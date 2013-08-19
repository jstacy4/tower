#pragma strict

function Start() 
{

}
//TODO make colors constants
var colorStart : Color = Color( 255/255.0, 132/255.0, 0/255.0, 255/255.0 );
var colorEnd : Color = Color( 255/255.0, 0/255.0, 0/255.0, 255/255.0 );
var duration : float = 1.0;

function Update() 
{
	var lerp : float = Mathf.PingPong (Time.time, duration) / duration;
	renderer.material.color = Color.Lerp (colorStart, colorEnd, lerp);	
}