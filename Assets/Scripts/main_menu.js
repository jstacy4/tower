#pragma strict

@script ExecuteInEditMode()

var myGUI : GUISkin;

function OnGUI()
{
	GUI.skin = myGUI;
	
	//TODO remove magic numbers
	if( GUI.Button( Rect( Screen.width / 2 - 75, Screen.height/ 2 - 25, 150, 50 ), "START" ) )
	{
		Application.LoadLevel( "tower" );
	}
}