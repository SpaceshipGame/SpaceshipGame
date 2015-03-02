#pragma strict

var animationQuad : GameObject; // Quad that has animation
var animList : Texture[]; // List of Textures
var count = 0;
var time : float = 0;
private var index : int = 0 ;

function Update () {

	time = time + 1 * Time.deltaTime;




	if (Input.GetKeyDown("space")){
	
		
		
			// Add 1 to the  count
			count = count + 1;
			
			// only run code once every 2 times
			if(count % 2 == 0){
			
		
				index++;
				index = index % animList.Length;
				animationQuad.renderer.material.mainTexture = animList[index];
			
			}
			
			if(count == 42)
			{

				Fusion() ;
			}
}
	}
function Fusion () {

	if (time < 7){
		Application.LoadLevel("PerfectGotenksGameOver");
	}

	if (time == 8){
		Application.LoadLevel("SkinnyGotenksGameOver");
	}

	if (time > 10){
		Application.LoadLevel("FatGotenksGameOver");
	}
	

}