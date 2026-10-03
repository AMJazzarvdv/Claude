#include "Killers/HMSentinel.h"
#include "Components/StaticMeshComponent.h"
#include "Net/UnrealNetwork.h"
#include "TimerManager.h"

AHMSentinel::AHMSentinel()
{
	bReplicates = true;
	Mesh = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("Mesh"));
	RootComponent = Mesh;
}

void AHMSentinel::GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& Out) const
{
	Super::GetLifetimeReplicatedProps(Out);
	DOREPLIFETIME(AHMSentinel, bShrouded);
}

void AHMSentinel::Shroud()
{
	if (!HasAuthority() || bShrouded) return;
	bShrouded = true;
	OnRep_Shrouded();
	GetWorldTimerManager().SetTimer(ShroudTimer, [this]() { bShrouded = false; OnRep_Shrouded(); }, ShroudDuration, false);
}
