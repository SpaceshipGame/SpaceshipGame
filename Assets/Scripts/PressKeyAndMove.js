#pragma strict

var count = 0;
var Quad : GameObject;

                              
function Update () {
		
		if (Input.GetKeyDown (KeyCode.Space)){
		
		
			print ("space key was pressed");
			// Add 1 to the  count
			count = count + 1;
		
			// Trace out count to console
		     Debug.Log("COUNT = " + count + "\n");
		
			// Place car along the X axis based on count
			  Quad.transform.position.x = count;
	
		}
	}