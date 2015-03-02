#pragma strict

var projectile : Rigidbody;

var speed = 20;
var isGunFiring = false;

function Start(){

	InvokeRepeating("fireBullet", 0, 0.5);
}

function fireBullet(){

	if(isGunFiring == true){

		var clone : Rigidbody;
		clone = Instantiate(projectile, transform.position, transform.rotation);
		clone.velocity = transform.TransformDirection( Vector3(0,0,speed));
	
		Destroy(clone.gameObject,3);

	}
}

