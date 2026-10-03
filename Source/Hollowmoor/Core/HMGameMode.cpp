#include "Core/HMGameMode.h"
#include "Characters/HMSurvivor.h"
#include "Perks/HMPerkComponent.h"
#include "Objectives/HMBell.h"
#include "EngineUtils.h"
#include "TimerManager.h"

AHMGameMode::AHMGameMode()
{
	DefaultPawnClass = AHMSurvivor::StaticClass();
}

void AHMGameMode::NotifyBellRung(AHMBell* Bell)
{
	++BellsRung;
	for (TActorIterator<APawn> It(GetWorld()); It; ++It)
	{
		if (UHMPerkComponent* Perks = It->FindComponentByClass<UHMPerkComponent>())
		{
			Perks->Broadcast(EHMPerkTrigger::BellRung, Bell);
		}
	}

	if (!bGatesUnsealed && BellsRung >= BellsRequired)
	{
		bGatesUnsealed = true;
		OnGatesUnsealed();
		GetWorldTimerManager().SetTimer(CollapseTimer, this, &AHMGameMode::OnMatchEnded, EndGameCollapseDuration);
	}
}

void AHMGameMode::NotifySurvivorRemoved()
{
	for (TActorIterator<AHMSurvivor> It(GetWorld()); It; ++It)
	{
		if (It->IsInPlay()) return;
	}
	OnMatchEnded();
}
