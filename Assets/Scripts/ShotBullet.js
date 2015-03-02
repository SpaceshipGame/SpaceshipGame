#pragma strict

var projectile : Rigidbody;
var speed = 20;

function Start(){

	InvokeRepeating("fireBullet", 2, 0.5);
}

function fireBullet(){

		var clone : Rigidbody;
		clone = Instantiate(projectile, transform.position, transform.rotation);
		clone.velocity = transform.TransformDirection( Vector3(0,0,speed));
	
		Destroy(clone.gameObject,3);
}
