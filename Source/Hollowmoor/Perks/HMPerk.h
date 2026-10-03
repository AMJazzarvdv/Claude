#pragma once

#include "CoreMinimal.h"
#include "UObject/Object.h"
#include "Core/HMTypes.h"
#include "HMPerk.generated.h"

class AHMCharacterBase;

/** A perk is an event listener with three tiers. Subclass in C++ or Blueprint. */
UCLASS(Abstract, Blueprintable, EditInlineNew)
class HOLLOWMOOR_API UHMPerk : public UObject
{
	GENERATED_BODY()

public:
	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly) FText DisplayName;
	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, meta = (MultiLine = true)) FText Description;
	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly) TObjectPtr<UTexture2D> Icon;
	UPROPERTY(EditAnywhere, BlueprintReadOnly, meta = (ClampMin = 1, ClampMax = 3)) int32 Tier = 3;

	void Init(AHMCharacterBase* InOwner) { Owner = InOwner; OnEquipped(); }

	UFUNCTION(BlueprintNativeEvent) void OnEquipped();
	UFUNCTION(BlueprintNativeEvent) void OnTrigger(EHMPerkTrigger Trigger, UObject* Context);
	virtual void TickPerk(float DeltaSeconds) {}

protected:
	/** Pick a value by tier: TierValue(10, 15, 20). */
	float TierValue(float T1, float T2, float T3) const { return Tier == 1 ? T1 : Tier == 2 ? T2 : T3; }

	UPROPERTY(BlueprintReadOnly) TObjectPtr<AHMCharacterBase> Owner;
	bool OnCooldown() const;
	void StartCooldown(float Seconds);

private:
	float CooldownEnd = 0.f;
};
