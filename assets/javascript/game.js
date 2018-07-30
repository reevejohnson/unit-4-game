var randomNumber = Math.floor(Math.random() * (102)) + 19;
var winCounter = 0;
var lossCounter = 0;
var playerScore = 0;

$(".win-number").text(winCounter);
$(".loss-number").text(lossCounter);

var smallOddValue = 2 * (Math.floor(Math.random() * (3)) + 0) + 1;
var largeOddValue = 2 * (Math.floor(Math.random() * (3)) + 3) + 1;
var smallEvenValue = 2 * (Math.floor(Math.random() * (3)) + 1);
var largeEvenValue = 2 * (Math.floor(Math.random() * (3)) + 4);

var randomValues = [smallOddValue, largeOddValue, smallEvenValue, largeEvenValue]

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

$(document).ready(function() {

    $(".computer-number-display").text(randomNumber);
    $(".player-score").text(playerScore);

    shuffleArray(randomValues);

    var redGemValue = randomValues[0];
    var blueGemValue = randomValues[1];
    var yellowGemValue = randomValues[2];
    var greenGemValue = randomValues[3];

    $(".red-gem").attr("value", redGemValue);
    $(".blue-gem").attr("value", blueGemValue);
    $(".yellow-gem").attr("value", yellowGemValue);
    $(".green-gem").attr("value", greenGemValue);

    $(".gem-button").click(function() {
        var buttonValue = $(this).attr("value");
        var newScore = playerScore + parseInt(buttonValue);
        playerScore = newScore;
        $(".player-score").text(playerScore);
    })
});