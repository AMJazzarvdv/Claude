#pragma once

#include "CoreMinimal.h"
#include "Characters/HMCharacterBase.h"
#include "HMKiller.generated.h"

class AHMSurvivor;

UCLASS(Abstract)
class HOLLOWMOOR_API AHMKiller : public AHMCharacterBase
{
	GENERATED_BODY()

public:
	AHMKiller();

	UFUNCTION(BlueprintCallable) virtual void PrimaryAttack();
	UFUNCTION(BlueprintCallable) virtual void ActivatePower() {}
	UFUNCTION(BlueprintCallable) virtual void ReleasePower() {}

	UPROPERTY(EditDefaultsOnly, Category = "Attack") float LungeRange = 250.f;
	UPROPERTY(EditDefaultsOnly, Category = "Attack") float AttackCooldown = 2.7f;
	UPROPERTY(EditDefaultsOnly, Category = "Detection") float TerrorRadius = 3200.f;

protected:
	AHMSurvivor* FindAttackTarget() const;
	float LastAttackTime = -100.f;
};
