#pragma strict

function Start () {

this.renderer.material.color = Color(0,.5,0,1);
}

var isLightOn = false;

function OnMouseDown(){

if ( isLightOn == false){

this.renderer.material.color = Color.gray;
isLightOn = true;

	} else {
	
this.renderer.material.color = Color.yellow;
isLightOn = false;

}
}	

function Update () {

if (isLightOn == true){
	var newRot = (Vector3(0,40 * Time.deltaTime ,0));
	this.transform.Rotate(newRot);

	}	
}