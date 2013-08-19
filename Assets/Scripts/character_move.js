#pragma strict

var MOVE_MULTIPLIER : int = 2;
//var can_move : float = 2 * MOVE_MULTIPLIER;
var move_value : int = 2;
var move_range : float = MOVE_MULTIPLIER * move_value;

var terrain : GameObject;
var GUI : in_game_menu;

function Start () 
{
	terrain = GameObject.Find( "Terrain" );
	GUI = GameObject.FindWithTag( "GUI" ).GetComponent(in_game_menu);
}

var clickedPosition : Vector3;

function Update ()
{
	print( GUI.gui_mode );

	if( GUI.gui_mode == "Move" )
	{
		if( true == ( Input.GetButtonDown( "Horizontal" ) || Input.GetButtonDown( "Vertical" ) ) )
		{
			transform.Translate( -2 * Input.GetAxisRaw( "Horizontal" ), 0, -2 * Input.GetAxisRaw( "Vertical" ) );
			Input.ResetInputAxes();
			
			//TODO send a class/struct instead of this hacky vec4
			//terrain.BroadcastMessage( "update_moveable", Vector4( transform.position.x, transform.position.y, transform.position.z, move_range ) );
		}		
		
		if( true == Input.GetMouseButtonDown( 0 ) )
		{
			var ray = Camera.main.ScreenPointToRay( Input.mousePosition );
			var selected : RaycastHit; 
			var location: Vector3;
	
			if (Physics.Raycast(ray, selected))
			{
			//selected.point is the 3d position of where the mouse is
			
			location.x = 2 * Mathf.Floor( ( selected.point.x + 1 ) / 2 );
			location.y = 1;
			location.z = 2 * Mathf.Floor( ( selected.point.z + 1 ) / 2 );
			
			Debug.Log( location );
			
			transform.position = location;
			
			terrain.BroadcastMessage( "update_moveable", Vector4( transform.position.x, transform.position.y, transform.position.z, move_range ) );
			}
		}    
	}
}