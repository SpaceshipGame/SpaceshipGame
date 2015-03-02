#pragma strict

function OnCollisionEnter(collision : Collision) {
	
	if( collision.gameObject.tag != "tagBullet"){
		gameObject.renderer.material.color = Color.red;
	}
}