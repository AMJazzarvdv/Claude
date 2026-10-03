#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "HMSentinel.generated.h"

/**
 * A hollow stone saint the Reliquary plants around the map. It never moves on
 * its own, but the Reliquary can pour itself into any Sentinel nobody is
 * watching. Survivors can drape a Shroud over one to seal it for a while.
 */
UCLASS()
class HOLLOWMOOR_API AHMSentinel : public AActor
{
	GENERATED_BODY()

public:
	AHMSentinel();
	virtual void GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& Out) const override;

	UPROPERTY(VisibleAnywhere) TObjectPtr<UStaticMeshComponent> Mesh;
	UPROPERTY(EditDefaultsOnly) float ShroudDuration = 45.f;

	UFUNCTION(BlueprintCallable) void Shroud();
	UFUNCTION(BlueprintPure) bool IsShrouded() const { return bShrouded; }

	UFUNCTION(BlueprintImplementableEvent) void OnShroudChanged(bool bNowShrouded);

private:
	UPROPERTY(ReplicatedUsing = OnRep_Shrouded) bool bShrouded = false;
	UFUNCTION() void OnRep_Shrouded() { OnShroudChanged(bShrouded); }
	FTimerHandle ShroudTimer;
};
