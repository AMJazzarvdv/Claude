#include "Characters/HMKiller.h"
#include "Characters/HMSurvivor.h"
#include "Camera/CameraComponent.h"
#include "EngineUtils.h"

AHMKiller::AHMKiller()
{
	BaseWalkSpeed = 460.f; // 115% of survivor speed
}

AHMSurvivor* AHMKiller::FindAttackTarget() const
{
	AHMSurvivor* Best = nullptr;
	float BestDist = LungeRange;
	const FVector Fwd = Camera->GetForwardVector();
	for (TActorIterator<AHMSurvivor> It(GetWorld()); It; ++It)
	{
		const FVector To = It->GetActorLocation() - GetActorLocation();
		const float D = To.Size();
		if (D < BestDist && FVector::DotProduct(Fwd, To.GetSafeNormal()) > 0.6f && It->IsInPlay())
		{
			Best = *It;
			BestDist = D;
		}
	}
	return Best;
}

void AHMKiller::PrimaryAttack()
{
	const float Now = GetWorld()->GetTimeSeconds();
	if (!HasAuthority() || Now - LastAttackTime < AttackCooldown) return;
	LastAttackTime = Now;
	if (AHMSurvivor* Target = FindAttackTarget()) Target->ReceiveHit(this);
}
