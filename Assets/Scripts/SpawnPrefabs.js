#pragma strict

var prefab : GameObject;

function Update () {

	if(Input.GetKeyDown(KeyCode.Space)){
		// Space bar pressed
	
		GameObject.Instantiate(prefab, this.transform.position , this.transform.rotation);
	}
}