#include "Perks/HMPerkComponent.h"
#include "Perks/HMPerk.h"
#include "Characters/HMCharacterBase.h"

UHMPerkComponent::UHMPerkComponent()
{
	PrimaryComponentTick.bCanEverTick = true;
}

void UHMPerkComponent::BeginPlay()
{
	Super::BeginPlay();
	if (Loadout.Num() > 4) Loadout.SetNum(4);
	if (!GetOwner()->HasAuthority()) return;

	AHMCharacterBase* Char = Cast<AHMCharacterBase>(GetOwner());
	for (UHMPerk* P : Loadout) if (P) P->Init(Char);
	Broadcast(EHMPerkTrigger::MatchStart, GetOwner());
}

void UHMPerkComponent::TickComponent(float DeltaTime, ELevelTick TickType, FActorComponentTickFunction* ThisTickFunction)
{
	Super::TickComponent(DeltaTime, TickType, ThisTickFunction);
	if (!GetOwner()->HasAuthority()) return;
	for (UHMPerk* P : Loadout) if (P) P->TickPerk(DeltaTime);
}

void UHMPerkComponent::Broadcast(EHMPerkTrigger Trigger, UObject* Context)
{
	if (!GetOwner()->HasAuthority()) return;
	for (UHMPerk* P : Loadout) if (P) P->OnTrigger(Trigger, Context);
}
