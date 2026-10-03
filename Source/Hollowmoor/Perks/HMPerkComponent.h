#pragma once

#include "CoreMinimal.h"
#include "Components/ActorComponent.h"
#include "Core/HMTypes.h"
#include "HMPerkComponent.generated.h"

class UHMPerk;

UCLASS(ClassGroup = (Hollowmoor), meta = (BlueprintSpawnableComponent))
class HOLLOWMOOR_API UHMPerkComponent : public UActorComponent
{
	GENERATED_BODY()

public:
	UHMPerkComponent();
	virtual void BeginPlay() override;
	virtual void TickComponent(float DeltaTime, ELevelTick TickType, FActorComponentTickFunction* ThisTickFunction) override;

	/** Loadout: up to 4 perks, instanced per character. */
	UPROPERTY(EditAnywhere, Instanced, BlueprintReadOnly, Category = "Perks") TArray<TObjectPtr<UHMPerk>> Loadout;

	void Broadcast(EHMPerkTrigger Trigger, UObject* Context);

	template <typename T> T* FindPerk() const
	{
		for (UHMPerk* P : Loadout) if (T* Typed = Cast<T>(P)) return Typed;
		return nullptr;
	}
};
