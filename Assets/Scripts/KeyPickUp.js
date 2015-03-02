#pragma strict

var particlePrefab : GameObject;


function Update () {
	// Rotate for cool animation
	transform.Rotate(Vector3(0.0,300.0 * Time.deltaTime,0.0));
	
	
	
}

// Make sure 
function OnTriggerEnter( other : Collider ){
	
	// Give player point in the global class
	StaticSharedBank.score += 1;
	
	// Spawn a cool effects 
	var clone = Instantiate(particlePrefab, this.transform.position, this.transform.rotation);
	Destroy(clone , 4.0f);
	
	
	// Remove this coin
	Destroy(this.gameObject);
	
}