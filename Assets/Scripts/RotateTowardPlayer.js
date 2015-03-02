#pragma strict

private var target : Transform; //the enemy's target
private var myTransform : Transform; //current transform data of this enemy

var rotationSpeed = 3; //speed of turning
var range : float = 10.0f;
var fireRate : float = 0.1f;// time between each bullet shooting

// BULLETS
public var gunBulletSpawn : Transform;
var projectile : Rigidbody;
var speed = 20;
private var isGunFiring = false;

function Awake()
{
    myTransform = transform; //cache transform data for easy access/preformance
}
 
function Start()
{
     target = GameObject.FindWithTag("Player").transform; //target the player
     
     // Start gun shooting
     InvokeRepeating("fireBullet", 0, fireRate);
}
 
function Update () {
    //rotate to look at the player
    var distance = Vector3.Distance(myTransform.position, target.position);
    
    if ( distance < range){
		
    	this.renderer.material.color = Color.red;
    	
    	myTransform.rotation = Quaternion.Slerp(myTransform.rotation,
    	Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime);
    	
    	isGunFiring = true;
    }else{
    	// Not in range
    	this.renderer.material.color = Color.blue;
    	isGunFiring = false;
    }
}

function fireBullet(){

	if(isGunFiring == true){
		var clone : Rigidbody;
		clone = Instantiate(projectile, gunBulletSpawn.position, gunBulletSpawn.rotation);
		clone.velocity = transform.TransformDirection( Vector3(0,0,speed));

		Destroy(clone.gameObject,3);
	}
}
