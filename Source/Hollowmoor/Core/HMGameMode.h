#pragma once

#include "CoreMinimal.h"
#include "GameFramework/GameModeBase.h"
#include "HMGameMode.generated.h"

class AHMBell;

/**
 * Match flow: survivors must ring 5 Mourning Bells (of 7) to unseal the
 * Lychgates. The killer binds downed survivors to Weeping Posts; each post
 * stage lasts BindStageDuration, third bind (or timeout) = sacrifice.
 */
UCLASS()
class HOLLOWMOOR_API AHMGameMode : public AGameModeBase
{
	GENERATED_BODY()

public:
	AHMGameMode();

	UPROPERTY(EditDefaultsOnly, Category = "Rules") int32 BellsRequired = 5;
	UPROPERTY(EditDefaultsOnly, Category = "Rules") float BindStageDuration = 60.f;
	UPROPERTY(EditDefaultsOnly, Category = "Rules") float EndGameCollapseDuration = 120.f;

	void NotifyBellRung(AHMBell* Bell);
	void NotifySurvivorRemoved();

	UFUNCTION(BlueprintPure) int32 GetBellsRemaining() const { return FMath::Max(0, BellsRequired - BellsRung); }
	UFUNCTION(BlueprintImplementableEvent) void OnGatesUnsealed();
	UFUNCTION(BlueprintImplementableEvent) void OnMatchEnded();

private:
	int32 BellsRung = 0;
	bool bGatesUnsealed = false;
	FTimerHandle CollapseTimer;
};
