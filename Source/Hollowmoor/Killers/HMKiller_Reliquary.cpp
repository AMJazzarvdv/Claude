#include "Killers/HMKiller_Reliquary.h"
#include "Killers/HMSentinel.h"
#include "Characters/HMSurvivor.h"
#include "Camera/CameraComponent.h"
#include "Components/SkeletalMeshComponent.h"
#include "GameFramework/CharacterMovementComponent.h"
#include "Net/UnrealNetwork.h"
#include "Components/CapsuleComponent.h"
#include "EngineUtils.h"

AHMKiller_Reliquary::AHMKiller_Reliquary()
{
	PrimaryActorTick.bCanEverTick = true;
	BaseWalkSpeed = 440.f;
	TerrorRadius = 0.f; // stone makes no heartbeat — survivors hear grinding instead
	LungeRange = 200.f;
}

void AHMKiller_Reliquary::GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& Out) const
{
	Super::GetLifetimeReplicatedProps(Out);
	DOREPLIFETIME(AHMKiller_Reliquary, bPetrified);
	DOREPLIFETIME(AHMKiller_Reliquary, bLamenting);
}

void AHMKiller_Reliquary::GatherWatchers(TArray<AHMSurvivor*>& OutWatchers) const
{
	const USkeletalMeshComponent* Body = GetMesh();
	for (TActorIterator<AHMSurvivor> It(GetWorld()); It; ++It)
	{
		for (const FName& Socket : GazeSockets)
		{
			const FVector P = Body->DoesSocketExist(Socket) ? Body->GetSocketLocation(Socket) : GetActorLocation();
			if (It->CanSee(P, this))
			{
				OutWatchers.Add(*It);
				break;
			}
		}
	}
}

bool AHMKiller_Reliquary::IsSentinelWatched(const AHMSentinel* S) const
{
	for (TActorIterator<AHMSurvivor> It(GetWorld()); It; ++It)
	{
		if (It->CanSee(S->GetActorLocation() + FVector(0, 0, 120), S)) return true;
	}
	return false;
}

void AHMKiller_Reliquary::Tick(float DeltaSeconds)
{
	Super::Tick(DeltaSeconds);
	if (!HasAuthority()) return;

	TArray<AHMSurvivor*> Watchers;
	GatherWatchers(Watchers);

	if (Watchers.Num() > 0)
	{
		UnwatchedTime = 0.f;
		FrozenTime += DeltaSeconds;
		SetPetrified(true);
		bLamenting = FrozenTime >= LamentThreshold;

		const float Drain = ResolveDrainPerSec * (bLamenting ? 2.f : 1.f) * DeltaSeconds;
		for (AHMSurvivor* W : Watchers) W->DrainResolve(Drain);
	}
	else
	{
		// Short grace window so one-frame glances don't cause stutter-stepping.
		UnwatchedTime += DeltaSeconds;
		if (UnwatchedTime >= PetrifyGraceTime)
		{
			FrozenTime = 0.f;
			bLamenting = false;
			SetPetrified(false);
		}
	}

	if (PowerHeldSince >= 0.f && GetWorld()->GetTimeSeconds() - PowerHeldSince >= TransferHoldTime)
	{
		PowerHeldSince = -1.f;
		if (!bPetrified)
		{
			if (AHMSentinel* Target = PickTransferTarget()) DoTransfer(Target);
		}
	}
}

void AHMKiller_Reliquary::SetPetrified(bool bNew)
{
	if (bPetrified == bNew) return;
	bPetrified = bNew;

	UCharacterMovementComponent* Move = GetCharacterMovement();
	if (bPetrified)
	{
		Move->StopMovementImmediately();
		Move->DisableMovement();
		GetMesh()->bPauseAnims = true; // freeze mid-pose: the pose is the horror
		ClearSpeedModifier(TEXT("Unseen"));
	}
	else
	{
		Move->SetMovementMode(MOVE_Walking);
		GetMesh()->bPauseAnims = false;
		SetSpeedModifier(TEXT("Unseen"), UnseenSpeedMultiplier);
	}
	OnRep_Petrified();
}

void AHMKiller_Reliquary::PrimaryAttack()
{
	if (bPetrified) return;
	Super::PrimaryAttack();
}

void AHMKiller_Reliquary::ActivatePower()
{
	if (!HasAuthority() || bPetrified) return;
	PowerHeldSince = GetWorld()->GetTimeSeconds();
}

void AHMKiller_Reliquary::ReleasePower()
{
	if (!HasAuthority() || PowerHeldSince < 0.f) return;
	PowerHeldSince = -1.f; // released before TransferHoldTime → a tap: plant a Sentinel

	Sentinels.RemoveAll([](const TObjectPtr<AHMSentinel>& S) { return !IsValid(S); });
	if (bPetrified || !SentinelClass || Sentinels.Num() >= MaxSentinels) return;

	const FVector Spot = GetActorLocation() + GetActorForwardVector() * 120.f - FVector(0, 0, GetCapsuleComponent()->GetScaledCapsuleHalfHeight());
	FActorSpawnParameters Params;
	Params.SpawnCollisionHandlingOverride = ESpawnActorCollisionHandlingMethod::AdjustIfPossibleButDontSpawnIfColliding;
	if (AHMSentinel* S = GetWorld()->SpawnActor<AHMSentinel>(SentinelClass, Spot, GetActorRotation(), Params))
	{
		Sentinels.Add(S);
	}
}

AHMSentinel* AHMKiller_Reliquary::PickTransferTarget() const
{
	if (GetWorld()->GetTimeSeconds() - LastTransferTime < TransferCooldown) return nullptr;

	// Choose the valid Sentinel closest to where the killer is aiming.
	AHMSentinel* Best = nullptr;
	float BestDot = -1.f;
	const FVector Fwd = Camera->GetForwardVector();
	for (AHMSentinel* S : Sentinels)
	{
		if (!IsValid(S) || S->IsShrouded() || IsSentinelWatched(S)) continue;
		const float Dot = FVector::DotProduct(Fwd, (S->GetActorLocation() - GetActorLocation()).GetSafeNormal());
		if (Dot > BestDot) { BestDot = Dot; Best = S; }
	}
	return Best;
}

void AHMKiller_Reliquary::DoTransfer(AHMSentinel* Target)
{
	const FTransform Old = GetActorTransform();
	const FVector Dest = Target->GetActorLocation() + FVector(0, 0, GetCapsuleComponent()->GetScaledCapsuleHalfHeight());
	const FRotator Rot = Target->GetActorRotation();

	Sentinels.Remove(Target);
	Target->SetActorEnableCollision(false);
	TeleportTo(Dest, Rot);
	LastTransferTime = GetWorld()->GetTimeSeconds();

	// The shell left behind is indistinguishable from the real thing.
	AHMSentinel* Shell = GetWorld()->SpawnActor<AHMSentinel>(SentinelClass, Old.GetLocation() - FVector(0, 0, GetCapsuleComponent()->GetScaledCapsuleHalfHeight()), Old.Rotator());
	if (Shell) Sentinels.Add(Shell);
	OnTransferred(Target, Shell);
	Target->Destroy();
}
