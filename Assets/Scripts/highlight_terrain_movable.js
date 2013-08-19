#pragma strict

//TODO combine attackable into this script as well, rename

var moveable : boolean = false;

function Start() 
{

}
//TODO make colors constants
var colorDefault : Color = Color( 240/255.0, 255/255.0, 114/255.0, 255/255.0 );
var colorStart : Color = Color( 73/255.0, 150/255.0, 255/255.0, 255/255.0 );
var colorEnd : Color = Color( 0/255.0, 43/255.0, 255/255.0, 255/255.0 );
var duration : float = 1.0;

function Update() 
{
	if( true == moveable )
	{
		var lerp : float = Mathf.PingPong (Time.time, duration) / duration;
		renderer.material.color = Color.Lerp (colorStart, colorEnd, lerp);
	}
	else
	{
		renderer.material.color = colorDefault;
	}
}

function update_moveable( in_data : Vector4 )
{
	var character_position : Vector3;
	
	character_position.x = in_data.x;
	character_position.y = in_data.y;
	character_position.z = in_data.z;
	
	moveable = in_moveable_range( transform.position, character_position, in_data.w );
}

function in_moveable_range( tile_position : Vector3, character_position : Vector3, character_range : float ) : boolean
{
	var distance : int = Mathf.Abs( tile_position.x - character_position.x ) + Mathf.Abs( tile_position.z - character_position.z );
	
	if( distance <= character_range )
	{
		return true;
	}
	else
	{
		return false;
	}
}