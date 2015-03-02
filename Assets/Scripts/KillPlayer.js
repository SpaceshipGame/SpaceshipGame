#pragma strict

private var player : GameObject;

function Start () {

	// Get the player based on tag
	player = GameObject.FindGameObjectWithTag("Player");
}

function OnCollisionEnter(gameObjectColliderThatHitMe : Collision) {

	// Check if player then kill the player
	if( gameObjectColliderThatHitMe.gameObject == player){
	
		// restart level
		Application.LoadLevel(Application.loadedLevel);
	}
}