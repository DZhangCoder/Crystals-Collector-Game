// global variables
var total_score = 0;
var wins = 0;
var losses = 0;

// define a function that generates a random number 
function randomNumberGen(x, y) {
    return (Math.floor(Math.random() * x) + y);
}

// define a function that reset the game 
function reset() {
    // If user wins or loses, reset the game. 
    // generate a random number between 19 and 120
    randomNumber = randomNumberGen(102, 19);
    $("#randomNumber").text(randomNumber);

    // reset the total score to 0 
    total_score = 0;
    $("#totalScore").text(total_score);

    // reset the value of each gem 
    $("#redGem").val(randomNumberGen(12, 1));
    $("#blueGem").val(randomNumberGen(12, 1));
    $("#yellowGem").val(randomNumberGen(12, 1));
    $("#greenGem").val(randomNumberGen(12, 1));
}

reset();
// when click on the image, show the value of each gem. 
$(".gem").on("click", function () {
    total_score = total_score + parseInt($(this).val());
    $("#totalScore").text(total_score);
    // the rules of wins
    if (total_score === randomNumber) {
        wins++;
        $("#wins").text("Wins: " + wins);
        reset();
    }

    // the rules of losses
    else if (total_score > randomNumber) {
        losses++;
        $("#losses").text("Losses: " + losses);
        reset();
    }
}) 