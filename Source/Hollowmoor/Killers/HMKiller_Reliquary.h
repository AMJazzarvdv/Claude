#pragma once

#include "CoreMinimal.h"
#include "Characters/HMKiller.h"
#include "HMKiller_Reliquary.generated.h"

class AHMSentinel;
class AHMSurvivor;

/**
 * THE RELIQUARY
 * A cathedral saint carved to hold a relic that was never a saint's bone.
 *
 *  - Petrified Gaze: while any survivor has it on-screen with line of sight,
 *    the Reliquary is stone — it cannot move or attack. Unwatched, it is fast.
 *  - Every survivor watching it loses Resolve. Empty Resolve forces a Blink,
 *    and a blink is a gap the Reliquary can move through.
 *  - Lament: frozen for LamentThreshold seconds straight, it begins to weep
 *    dust, doubling Resolve drain on everyone watching. Staring contests lose.
 *  - Power — Votive Sentinels: plant up to MaxSentinels hollow saints. Hold the
 *    power while unwatched to Transfer into any unwatched, unshrouded Sentinel;
 *    the body you leave behind becomes a Sentinel itself.
 */
UCLASS()
class HOLLOWMOOR_API AHMKiller_Reliquary : public AHMKiller
{
	GENERATED_BODY()

public:
	AHMKiller_Reliquary();
	virtual void Tick(float DeltaSeconds) override;
	virtual void GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& Out) const override;

	virtual void PrimaryAttack() override;
	virtual void ActivatePower() override;   // tap: plant Sentinel / hold: aim Transfer
	virtual void ReleasePower() override;

	UFUNCTION(BlueprintPure) bool IsPetrified() const { return bPetrified; }
	UFUNCTION(BlueprintPure) bool IsLamenting() const { return bLamenting; }

	UPROPERTY(EditDefaultsOnly, Category = "Reliquary") float UnseenSpeedMultiplier = 1.35f;
	UPROPERTY(EditDefaultsOnly, Category = "Reliquary") float ResolveDrainPerSec = 14.f;
	UPROPERTY(EditDefaultsOnly, Category = "Reliquary") float LamentThreshold = 6.f;
	UPROPERTY(EditDefaultsOnly, Category = "Reliquary") float PetrifyGraceTime = 0.12f; // avoids flicker-stepping
	UPROPERTY(EditDefaultsOnly, Category = "Reliquary|Sentinels") TSubclassOf<AHMSentinel> SentinelClass;
	UPROPERTY(EditDefaultsOnly, Category = "Reliquary|Sentinels") int32 MaxSentinels = 4;
	UPROPERTY(EditDefaultsOnly, Category = "Reliquary|Sentinels") float TransferHoldTime = 1.5f;
	UPROPERTY(EditDefaultsOnly, Category = "Reliquary|Sentinels") float TransferCooldown = 25.f;

	/** Bone/socket names sampled for visibility — any one seen petrifies. */
	UPROPERTY(EditDefaultsOnly, Category = "Reliquary") TArray<FName> GazeSockets = { TEXT("head"), TEXT("spine_03"), TEXT("hand_r"), TEXT("foot_l") };

	UFUNCTION(BlueprintImplementableEvent) void OnPetrifyChanged(bool bNowPetrified);
	UFUNCTION(BlueprintImplementableEvent) void OnTransferred(AHMSentinel* From, AHMSentinel* LeftBehind);

private:
	void GatherWatchers(TArray<AHMSurvivor*>& OutWatchers) const;
	bool IsSentinelWatched(const AHMSentinel* S) const;
	AHMSentinel* PickTransferTarget() const;
	void DoTransfer(AHMSentinel* Target);
	void SetPetrified(bool bNew);

	UPROPERTY(ReplicatedUsing = OnRep_Petrified) bool bPetrified = false;
	UPROPERTY(Replicated) bool bLamenting = false;
	UFUNCTION() void OnRep_Petrified() { OnPetrifyChanged(bPetrified); }

	UPROPERTY() TArray<TObjectPtr<AHMSentinel>> Sentinels;
	float FrozenTime = 0.f;
	float UnwatchedTime = 0.f;
	float PowerHeldSince = -1.f;
	float LastTransferTime = -100.f;
};
