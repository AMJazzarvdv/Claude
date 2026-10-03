#include "Objectives/HMBell.h"
#include "Core/HMGameMode.h"
#include "Net/UnrealNetwork.h"
#include "Perks/HMPerkComponent.h"
#include "Perks/HMPerks_Survivor.h"

AHMBell::AHMBell()
{
	PrimaryActorTick.bCanEverTick = true;
	bReplicates = true;
}

void AHMBell::GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& Out) const
{
	Super::GetLifetimeReplicatedProps(Out);
	DOREPLIFETIME(AHMBell, Progress);
}

void AHMBell::Tick(float DeltaSeconds)
{
	Super::Tick(DeltaSeconds);
	if (!HasAuthority() || IsRung() || Ringers.Num() == 0) return;

	// 1 ringer = 1.0x, 2 = 1.7x, 3 = 2.2x, 4 = 2.5x
	static const float Efficiency[] = { 0.f, 1.f, 1.7f, 2.2f, 2.5f };
	float Rate = Efficiency[FMath::Min(Ringers.Num(), 4)] / SecondsToRingSolo;
	for (const auto& Pair : ProgressMultipliers) Rate *= Pair.Value;
	if (Ringers.Num() == 1)
	{
		const UHMPerkComponent* Perks = Ringers[0]->FindComponentByClass<UHMPerkComponent>();
		if (const UHMPerk_Ropeburn* Rope = Perks ? Perks->FindPerk<UHMPerk_Ropeburn>() : nullptr) Rate *= Rope->GetSoloBonus();
	}

	Progress = FMath::Min(1.f, Progress + Rate * DeltaSeconds);
	if (IsRung())
	{
		OnToll();
		if (AHMGameMode* GM = GetWorld()->GetAuthGameMode<AHMGameMode>()) GM->NotifyBellRung(this);
	}
}

void AHMBell::TollCheckResult(bool bGreat, bool bMiss)
{
	if (bMiss)
	{
		Progress = FMath::Max(0.f, Progress - MissPenalty);
		OnCrack(); // loud noise notification for the killer
	}
	else if (bGreat)
	{
		Progress = FMath::Min(1.f, Progress + 0.01f);
	}
}
