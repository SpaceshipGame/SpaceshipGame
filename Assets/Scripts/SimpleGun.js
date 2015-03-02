#pragma strict

var projectile : Rigidbody;

function Start(){

	InvokeRepeating("fireBullet", 0, 2.0);
}

function fireBullet(){

	var clone = Instantiate(projectile, transform.position, transform.rotation);
	clone.velocity = transform.TransformDirection( Vector3.forward * 20.0 );
}