var randomNumber = Math.floor(Math.random() * (102)) + 19;
var winCounter = 0;
var lossCounter = 0;
var playerScore = 0;

var redGemValue;
var blueGemValue;
var yellowGemValue;
var greenGemValue;

$(".random-number-display").text(randomNumber);

$(".win-number").text(winCounter);
$(".loss-number").text(lossCounter);

$(".player-score").text(playerScore);