#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "HMBell.generated.h"

/**
 * Mourning Bell — the generator equivalent. Survivors haul the rope together
 * (progress scales with ringers, diminishing). Skill checks are "Toll checks":
 * a rhythmic beat the player matches; a miss makes the bell crack loudly.
 */
UCLASS()
class HOLLOWMOOR_API AHMBell : public AActor
{
	GENERATED_BODY()

public:
	AHMBell();
	virtual void Tick(float DeltaSeconds) override;
	virtual void GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& Out) const override;

	UPROPERTY(EditDefaultsOnly) float SecondsToRingSolo = 85.f;
	UPROPERTY(EditDefaultsOnly) float MissPenalty = 0.1f;

	void AddRinger(AActor* Survivor) { Ringers.AddUnique(Survivor); }
	void RemoveRinger(AActor* Survivor) { Ringers.Remove(Survivor); }
	void TollCheckResult(bool bGreat, bool bMiss);
	void ApplyProgressMultiplier(FName Source, float Mult) { ProgressMultipliers.Add(Source, Mult); }

	UFUNCTION(BlueprintPure) float GetProgress() const { return Progress; }
	UFUNCTION(BlueprintPure) bool IsRung() const { return Progress >= 1.f; }

	UFUNCTION(BlueprintImplementableEvent) void OnToll();
	UFUNCTION(BlueprintImplementableEvent) void OnCrack();

private:
	UPROPERTY(Replicated) float Progress = 0.f;
	UPROPERTY() TArray<TObjectPtr<AActor>> Ringers;
	TMap<FName, float> ProgressMultipliers;
};
