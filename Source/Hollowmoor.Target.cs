using UnrealBuildTool;

public class HollowmoorTarget : TargetRules
{
	public HollowmoorTarget(TargetInfo Target) : base(Target)
	{
		Type = TargetType.Game;
		DefaultBuildSettings = BuildSettingsVersion.V5;
		IncludeOrderVersion = EngineIncludeOrderVersion.Latest;
		ExtraModuleNames.Add("Hollowmoor");
	}
}
