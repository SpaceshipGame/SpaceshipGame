#pragma strict

var count = 0;
var sword : GameObject;

function OnMouseDown () {
		
		// Add 1 to the  count
		count = count + 1;
		
		// Trace out count to console
		Debug.Log("COUNT = " + count + "\n");
		
		// Place car along the Y axis based on count
		//sword.transform.Rotate(Vector3(0,0,-10));// = count * 5;
		
		sword.transform.rotation = Quaternion.AngleAxis(count, Vector3.back);
}