#pragma strict

var speed = 1000;

function Start () {

}

function FixedUpdate () {
        
        var horiz : float = Input.GetAxis("Horizontal");
 		transform. Translate(Vector3(horiz,0,0));
 		
 		var vertical : float = Input.GetAxis("Vertical");
 		transform.Translate(Vector3(0,0,vertical));	
}