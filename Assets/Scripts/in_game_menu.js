#pragma strict

var SCREEN_LEFT_PAD : int = 50;
var SCREEN_TOP_PAD  : int = 50;

var myGUI : GUISkin;

var gui_mode : String = "Menu";

function Update() 
{
	if( true == Input.GetKeyDown( "escape" ) )
	{
		print( "pause game" );
		Time.timeScale = 0;
		gui_mode = "Paused";
	}
}

function OnGUI()
{
	GUI.skin = myGUI;

	//"Move" Button
	if( GUI.Button( Rect( SCREEN_LEFT_PAD, SCREEN_TOP_PAD, 150, 50 ), "Move" ) )
	{
		print( "move mode" );
		gui_mode = "Move";
	}



	if( "Paused" == gui_mode )
	{
		//TODO remove magic numbers
		if( GUI.Button( Rect( Screen.width / 2 - 75, Screen.height/ 2 - 25, 150, 50 ), "Resume Game" ) )
		{
			print( "resume" );
			Time.timeScale = 1;
			gui_mode = "In Game";
		}
		
		if( GUI.Button( Rect( Screen.width / 2 - 75, Screen.height/ 2 + 25, 150, 50 ), "Quit to Main Menu" ) )
		{
			Time.timeScale = 1;
			print( "main menu" );
		}
	}
}