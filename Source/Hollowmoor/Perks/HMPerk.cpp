#include "Perks/HMPerk.h"
#include "Characters/HMCharacterBase.h"

void UHMPerk::OnEquipped_Implementation() {}
void UHMPerk::OnTrigger_Implementation(EHMPerkTrigger, UObject*) {}

bool UHMPerk::OnCooldown() const
{
	return Owner && Owner->GetWorld()->GetTimeSeconds() < CooldownEnd;
}

void UHMPerk::StartCooldown(float Seconds)
{
	if (Owner) CooldownEnd = Owner->GetWorld()->GetTimeSeconds() + Seconds;
}
