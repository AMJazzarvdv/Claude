#pragma once

#include "CoreMinimal.h"
#include "Perks/HMPerk.h"
#include "HMPerks_Survivor.generated.h"

/** Unblinking: +20/30/40 max Resolve. "I buried my mother with my eyes open." */
UCLASS(meta = (DisplayName = "Unblinking"))
class HOLLOWMOOR_API UHMPerk_Unblinking : public UHMPerk
{
	GENERATED_BODY()
public:
	virtual void OnEquipped_Implementation() override;
};

/** Afterimage: when you Blink, the killer's aura burns into your eyes for 3/4/5s. 40s cooldown. */
UCLASS(meta = (DisplayName = "Afterimage"))
class HOLLOWMOOR_API UHMPerk_Afterimage : public UHMPerk
{
	GENERATED_BODY()
public:
	virtual void OnTrigger_Implementation(EHMPerkTrigger Trigger, UObject* Context) override;
	UFUNCTION(BlueprintImplementableEvent) void RevealKillerAura(float Duration);
};

/** Ropeburn: ringing a bell alone grants +8/10/12% progress speed. Lone wolves ring faster. */
UCLASS(meta = (DisplayName = "Ropeburn"))
class HOLLOWMOOR_API UHMPerk_Ropeburn : public UHMPerk
{
	GENERATED_BODY()
public:
	float GetSoloBonus() const { return TierValue(1.08f, 1.10f, 1.12f); }
};
