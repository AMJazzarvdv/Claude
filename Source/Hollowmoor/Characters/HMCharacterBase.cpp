#include "Characters/HMCharacterBase.h"
#include "Camera/CameraComponent.h"
#include "GameFramework/CharacterMovementComponent.h"
#include "Perks/HMPerkComponent.h"

AHMCharacterBase::AHMCharacterBase()
{
	bReplicates = true;
	Camera = CreateDefaultSubobject<UCameraComponent>(TEXT("Camera"));
	Camera->SetupAttachment(RootComponent);
	Perks = CreateDefaultSubobject<UHMPerkComponent>(TEXT("Perks"));
}

void AHMCharacterBase::SetSpeedModifier(FName Source, float Multiplier)
{
	if (FMath::IsNearlyEqual(Multiplier, 1.f)) SpeedModifiers.Remove(Source);
	else SpeedModifiers.Add(Source, Multiplier);

	float Total = 1.f;
	for (const auto& Pair : SpeedModifiers) Total *= Pair.Value;
	GetCharacterMovement()->MaxWalkSpeed = BaseWalkSpeed * Total;
}
