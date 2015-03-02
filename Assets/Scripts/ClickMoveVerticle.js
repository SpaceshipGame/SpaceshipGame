#pragma strict

var count = 0;
var car : GameObject;

function OnMouseDown () {
		
		// Add 1 to the  count
		count = count + 1;
		
		// Trace out count to console
		Debug.Log("COUNT = " + count + "\n");
		
		// Place car along the Y axis based on count
		car.transform.position.y = count;
}