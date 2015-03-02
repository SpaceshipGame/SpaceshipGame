#pragma strict

var count = 16;
var cube : GameObject;

                              
function Update () {
		
		if (Input.GetKeyDown (KeyCode.KeypadEnter)){
		
		
			print ("Enter key was pressed");
			// Add 1 to the  count
			count = count - 1;
		
			// Trace out count to console
		     Debug.Log("COUNT = " + count + "\n");
		
			// Place car along the X axis based on count
			  cube.transform.position.x = count;
	
		}
	}