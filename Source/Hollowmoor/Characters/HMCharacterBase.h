#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Character.h"
#include "HMCharacterBase.generated.h"

class UCameraComponent;
class UHMPerkComponent;

UCLASS(Abstract)
class HOLLOWMOOR_API AHMCharacterBase : public ACharacter
{
	GENERATED_BODY()

public:
	AHMCharacterBase();

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly) TObjectPtr<UCameraComponent> Camera;
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly) TObjectPtr<UHMPerkComponent> Perks;

	/** Multiplicative speed modifiers stack from perks/powers; recomputed on change. */
	void SetSpeedModifier(FName Source, float Multiplier);
	void ClearSpeedModifier(FName Source) { SetSpeedModifier(Source, 1.f); }

protected:
	UPROPERTY(EditDefaultsOnly, Category = "Movement") float BaseWalkSpeed = 400.f;

private:
	TMap<FName, float> SpeedModifiers;
};
