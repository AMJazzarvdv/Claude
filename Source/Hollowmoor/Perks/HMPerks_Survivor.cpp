#include "Perks/HMPerks_Survivor.h"
#include "Characters/HMSurvivor.h"

void UHMPerk_Unblinking::OnEquipped_Implementation()
{
	if (AHMSurvivor* S = Cast<AHMSurvivor>(Owner)) S->MaxResolve += TierValue(20.f, 30.f, 40.f);
}

void UHMPerk_Afterimage::OnTrigger_Implementation(EHMPerkTrigger Trigger, UObject* Context)
{
	if (Trigger != EHMPerkTrigger::Blink || OnCooldown()) return;
	RevealKillerAura(TierValue(3.f, 4.f, 5.f));
	StartCooldown(40.f);
}
