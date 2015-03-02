#pragma strict

var count = 0;
var character : GameObject;

function OnMouseDown () {
		
		// Add 1 to the  count
		count = count + 1;
		
		// Trace out count to console
		Debug.Log("COUNT = " + count + "\n");
		
		// Place car along the Y axis based on count
		var newAlpha = count / 10.0;
		
		 character.renderer.material.color.a = newAlpha;
}