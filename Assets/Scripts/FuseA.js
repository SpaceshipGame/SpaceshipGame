#pragma strict

var animationQuad : GameObject; // Quad that has animation
var animList : Texture[]; // List of Textures
private var index : int = 0 ;

function update () {
	if (Input.GetKeyDown("space")){
	
		index++;
		index = index % animList.Length;
		animationQuad.renderer.material.mainTexture = animList[index];
		
		print ("space key was pressed");
		Debug.Log("hey work18");

	}
}