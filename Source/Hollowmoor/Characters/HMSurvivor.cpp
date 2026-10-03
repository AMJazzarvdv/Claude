#include "Characters/HMSurvivor.h"
#include "Camera/CameraComponent.h"
#include "Core/HMGameMode.h"
#include "Perks/HMPerkComponent.h"
#include "Net/UnrealNetwork.h"
#include "Engine/World.h"

AHMSurvivor::AHMSurvivor()
{
	PrimaryActorTick.bCanEverTick = true;
	BaseWalkSpeed = 400.f;
}

void AHMSurvivor::GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& Out) const
{
	Super::GetLifetimeReplicatedProps(Out);
	DOREPLIFETIME(AHMSurvivor, HealthState);
	DOREPLIFETIME(AHMSurvivor, Resolve);
	DOREPLIFETIME(AHMSurvivor, BlinkRemaining);
}

void AHMSurvivor::Tick(float DeltaSeconds)
{
	Super::Tick(DeltaSeconds);
	if (!HasAuthority()) return;

	if (BlinkRemaining > 0.f)
	{
		BlinkRemaining = FMath::Max(0.f, BlinkRemaining - DeltaSeconds);
	}
	else if (ResolveDrainThisFrame > 0.f)
	{
		Resolve -= ResolveDrainThisFrame;
		if (Resolve <= 0.f)
		{
			Resolve = MaxResolve * 0.4f; // eyes reopen partially rested
			ForceBlink(BlinkDuration);
		}
	}
	else
	{
		Resolve = FMath::Min(MaxResolve, Resolve + ResolveRegenPerSec * DeltaSeconds);
	}
	ResolveDrainThisFrame = 0.f;
}

void AHMSurvivor::ForceBlink(float Duration)
{
	BlinkRemaining = FMath::Max(BlinkRemaining, Duration);
	Perks->Broadcast(EHMPerkTrigger::Blink, this);
	OnBlink(Duration);
}

bool AHMSurvivor::CanSee(const FVector& Point, const AActor* Target, float MaxDistance) const
{
	if (IsBlinking() || !IsInPlay() || HealthState == EHMHealthState::Bound) return false;

	const FVector Eye = Camera->GetComponentLocation();
	const FVector ToPoint = Point - Eye;
	const float Dist = ToPoint.Size();
	if (Dist > MaxDistance) return false;

	// Inside the view cone (half-FOV, slightly padded so screen edges count).
	const float HalfFovRad = FMath::DegreesToRadians(Camera->FieldOfView * 0.5f + 5.f);
	if (FVector::DotProduct(Camera->GetForwardVector(), ToPoint / Dist) < FMath::Cos(HalfFovRad)) return false;

	FHitResult Hit;
	FCollisionQueryParams Params(SCENE_QUERY_STAT(HMCanSee), false, this);
	const bool bBlocked = GetWorld()->LineTraceSingleByChannel(Hit, Eye, Point, ECC_Visibility, Params);
	return !bBlocked || Hit.GetActor() == Target;
}

void AHMSurvivor::ReceiveHit(AActor* Instigator)
{
	switch (HealthState)
	{
	case EHMHealthState::Healthy:
		SetHealthState(EHMHealthState::Wounded);
		Perks->Broadcast(EHMPerkTrigger::SurvivorWounded, Instigator);
		break;
	case EHMHealthState::Wounded:
		SetHealthState(EHMHealthState::Downed);
		Perks->Broadcast(EHMPerkTrigger::SurvivorDowned, Instigator);
		break;
	default:
		break;
	}
}

void AHMSurvivor::SetHealthState(EHMHealthState NewState)
{
	HealthState = NewState;
	OnRep_HealthState();
	if (!IsInPlay())
	{
		if (AHMGameMode* GM = GetWorld()->GetAuthGameMode<AHMGameMode>()) GM->NotifySurvivorRemoved();
	}
}

void AHMSurvivor::OnRep_HealthState()
{
	const bool bCrawling = HealthState == EHMHealthState::Downed;
	SetSpeedModifier(TEXT("Downed"), bCrawling ? 0.2f : 1.f);
}
