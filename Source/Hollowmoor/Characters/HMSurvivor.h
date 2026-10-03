#pragma once

#include "CoreMinimal.h"
#include "Characters/HMCharacterBase.h"
#include "Core/HMTypes.h"
#include "HMSurvivor.generated.h"

/**
 * Survivors have a Resolve meter (gaze stamina). Staring at something that
 * demands attention — the Reliquary, a Sentinel — drains it. When it empties
 * the survivor is forced to Blink: a ~0.35s black-out that the killer can
 * exploit. Looking away or at a lit candle recovers it.
 */
UCLASS()
class HOLLOWMOOR_API AHMSurvivor : public AHMCharacterBase
{
	GENERATED_BODY()

public:
	AHMSurvivor();
	virtual void Tick(float DeltaSeconds) override;
	virtual void GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& Out) const override;

	UFUNCTION(BlueprintPure) EHMHealthState GetHealthState() const { return HealthState; }
	UFUNCTION(BlueprintPure) bool IsInPlay() const { return HealthState != EHMHealthState::Sacrificed && HealthState != EHMHealthState::Escaped; }
	UFUNCTION(BlueprintPure) bool IsBlinking() const { return BlinkRemaining > 0.f; }
	UFUNCTION(BlueprintPure) float GetResolve() const { return Resolve; }

	/** Called by whatever this survivor is currently staring at, each tick. */
	void DrainResolve(float Amount) { ResolveDrainThisFrame += Amount; }
	void ForceBlink(float Duration);

	void ReceiveHit(AActor* Instigator);
	void SetHealthState(EHMHealthState NewState);

	/** Is world point visible on this survivor's screen, unobstructed, and not mid-blink? */
	bool CanSee(const FVector& Point, const AActor* Target, float MaxDistance = 4000.f) const;

	UPROPERTY(EditDefaultsOnly, Category = "Resolve") float MaxResolve = 100.f;
	UPROPERTY(EditDefaultsOnly, Category = "Resolve") float ResolveRegenPerSec = 18.f;
	UPROPERTY(EditDefaultsOnly, Category = "Resolve") float BlinkDuration = 0.35f;

	UFUNCTION(BlueprintImplementableEvent) void OnBlink(float Duration);

protected:
	UPROPERTY(ReplicatedUsing = OnRep_HealthState) EHMHealthState HealthState = EHMHealthState::Healthy;
	UPROPERTY(Replicated) float Resolve = 100.f;
	UPROPERTY(Replicated) float BlinkRemaining = 0.f;

	UFUNCTION() void OnRep_HealthState();

private:
	float ResolveDrainThisFrame = 0.f;
};
