#pragma once

#include "CoreMinimal.h"
#include "Perks/HMPerk.h"
#include "HMPerks_Killer.generated.h"

/** Vespers: whenever a Mourning Bell is rung, every survivor Blinks for 0.6/0.8/1.0s. */
UCLASS(meta = (DisplayName = "Vespers"))
class HOLLOWMOOR_API UHMPerk_Vespers : public UHMPerk
{
	GENERATED_BODY()
public:
	virtual void OnTrigger_Implementation(EHMPerkTrigger Trigger, UObject* Context) override;
};

/** Grave Patience: each survivor bound to a Weeping Post makes all bells ring 4/5/6% slower. */
UCLASS(meta = (DisplayName = "Grave Patience"))
class HOLLOWMOOR_API UHMPerk_GravePatience : public UHMPerk
{
	GENERATED_BODY()
public:
	virtual void OnTrigger_Implementation(EHMPerkTrigger Trigger, UObject* Context) override;
private:
	int32 Stacks = 0;
};
