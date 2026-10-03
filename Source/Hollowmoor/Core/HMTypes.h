#pragma once

#include "CoreMinimal.h"
#include "HMTypes.generated.h"

UENUM(BlueprintType)
enum class EHMHealthState : uint8
{
	Healthy,
	Wounded,
	Downed,
	Bound,      // tethered to a Weeping Post (our "hook")
	Sacrificed,
	Escaped
};

UENUM(BlueprintType)
enum class EHMPerkTrigger : uint8
{
	MatchStart,
	BellProgress,
	BellRung,
	SurvivorWounded,
	SurvivorDowned,
	SurvivorBound,
	SurvivorRescued,
	ChaseStart,
	ChaseEnd,
	Blink,
	Tick
};
