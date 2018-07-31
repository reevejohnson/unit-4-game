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

    function reset() {
        $(".computer-number-display").text("");
        randomNumber = Math.floor(Math.random() * (102)) + 19;
        $(".computer-number-display").text(randomNumber);

        playerScore = 0;

        shuffleArray(randomValues);

        redGemValue = randomValues[0];
        blueGemValue = randomValues[1];
        yellowGemValue = randomValues[2];
        greenGemValue = randomValues[3];

        $(".red-gem").attr("value", redGemValue);
        $(".blue-gem").attr("value", blueGemValue);
        $(".yellow-gem").attr("value", yellowGemValue);
        $(".green-gem").attr("value", greenGemValue);
    }

    $(".gem-button").click(function() {
        $(".instructions").html("<p>You will be give a random number at the start of the game.</p><br><p>There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.</p><br><p>You win the game by matching your total score to the random number. You lose the game if your total score goes above the random number.</p><br><p>The value of each crystal is hidden from you until you click on it.</p><br><p>Each time when the game starts, the game will change the values of each crystal.</p>");
        var buttonValue = $(this).attr("value");
        var newScore = playerScore + parseInt(buttonValue);
        playerScore = newScore;
        $(".player-score").text(playerScore);
        if(randomNumber === playerScore) {
            $(".instructions").append("<br>You win! Click any gem to start working towards the new number in the box.")
            winCounter++;
            $(".win-number").text(winCounter);
            reset();
        } else if(randomNumber < playerScore) {
            $(".instructions").append("<br><br>You lose. Click any gem to start working towards the new number in the box.")
            lossCounter++;
            $(".loss-number").text(lossCounter);
            reset();
        }
    })
});