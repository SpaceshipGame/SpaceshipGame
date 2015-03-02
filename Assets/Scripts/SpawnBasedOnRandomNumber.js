#pragma strict

var prefab : GameObject;

function Update () {
	
	if(Input.GetKeyDown(KeyCode.A)){
		// Space bar pressed
	
		//var offset : Vector3 = Random.insideUnitCircle * 10;
		
		var randomNumber : float = Random.Range(-10,10);
		var offset : Vector3 = Vector3(0,0, randomNumber );
		
		GameObject.Instantiate(prefab, this.transform.position + offset, this.transform.rotation);
	}
}