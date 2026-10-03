using UnrealBuildTool;

public class HollowmoorEditorTarget : TargetRules
{
	public HollowmoorEditorTarget(TargetInfo Target) : base(Target)
	{
		Type = TargetType.Editor;
		DefaultBuildSettings = BuildSettingsVersion.V5;
		IncludeOrderVersion = EngineIncludeOrderVersion.Latest;
		ExtraModuleNames.Add("Hollowmoor");
	}
}
