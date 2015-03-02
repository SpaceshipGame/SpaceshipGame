#pragma strict

var speed = 1000;

function FixedUpdate () {
      
 		var horiz : float = Input.GetAxis("Horizontal");
 		var vertical : float = Input.GetAxis("Vertical");
 		rigidbody.velocity = Vector3(horiz,0,vertical) * speed * Time.deltaTime;
}