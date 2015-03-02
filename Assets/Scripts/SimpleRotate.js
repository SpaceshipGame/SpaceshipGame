#pragma strict

var mySpeed : float = 50;

function Update () {
    
transform.Rotate(1, mySpeed * Time.deltaTime ,0);
    
}
