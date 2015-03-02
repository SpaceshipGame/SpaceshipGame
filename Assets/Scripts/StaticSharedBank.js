#pragma strict

static var score : int ;
static var deaths : int = 0;
var totalCoins: int;

var txtScore : GUIText;

function Start () {
	
	score = 0; // Start player with zero points
	
	// Get starting count of coins in the world
	// Check how many total items are in the world
	var coins:GameObject[] = GameObject.FindGameObjectsWithTag("tagCoin");
	totalCoins = coins.Length;
}

function Update () {
		
	// Set score in text box;
	txtScore.text = score.ToString() + " / " + totalCoins.ToString();
}