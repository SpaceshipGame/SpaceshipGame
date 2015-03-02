#pragma strict

var buttonCount = 0;

function Update () {

}

function OnMouseDown () {

buttonCount = buttonCount + 1000;

	Debug.Log("Count=  " + buttonCount);
	
}