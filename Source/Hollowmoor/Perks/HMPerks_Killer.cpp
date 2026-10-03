#include "Perks/HMPerks_Killer.h"
#include "Characters/HMSurvivor.h"
#include "Objectives/HMBell.h"
#include "EngineUtils.h"

void UHMPerk_Vespers::OnTrigger_Implementation(EHMPerkTrigger Trigger, UObject* Context)
{
	if (Trigger != EHMPerkTrigger::BellRung || !Owner) return;
	for (TActorIterator<AHMSurvivor> It(Owner->GetWorld()); It; ++It)
	{
		It->ForceBlink(TierValue(0.6f, 0.8f, 1.0f));
	}
}

void UHMPerk_GravePatience::OnTrigger_Implementation(EHMPerkTrigger Trigger, UObject* Context)
{
	if (Trigger != EHMPerkTrigger::SurvivorBound || !Owner) return;
	Stacks = FMath::Min(Stacks + 1, 8);
	const float Mult = FMath::Max(0.5f, 1.f - Stacks * TierValue(0.04f, 0.05f, 0.06f));
	for (TActorIterator<AHMBell> It(Owner->GetWorld()); It; ++It)
	{
		It->ApplyProgressMultiplier(TEXT("GravePatience"), Mult);
	}
}
