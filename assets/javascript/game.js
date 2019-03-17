// global variables
var total_score = 0;
var wins = 0;
var losses = 0;

// define a function that generates a random number 
function randomNumberGen(x,y) {
    var num = (Math.floor(Math.random() * x) + y);
    return num;
}

// generate a random number (19-120)
var randomNumber = randomNumberGen(102,19);
console.log(randomNumber);
$("#randomNumber").text(randomNumber);

// get the random value of red gem (1-12)
$("#redGem").val(randomNumberGen(12,1));
console.log($("#redGem").val());

// get the random value of blue gem (1-12)
$("#blueGem").val(randomNumberGen(12,1));
console.log($("#blueGem").val());

// get the random value of yellow gem (1-12)
$("#yellowGem").val(randomNumberGen(12,1));
console.log($("#yellowGem").val());

// get the random value of green gem (1-12)
$("#greenGem").val(randomNumberGen(12,1));
console.log($("#greenGem").val());

// when click on the image, show the value of each gem. 
$(".gem").on("click", function () {
    total_score = total_score + parseInt($(this).val());
    $("#totalScore").text(total_score);
    // the rules of wins and losses 
    if (total_score === randomNumber) {
        wins++;
        $("#wins").text("Wins: " + wins);
    }
    else if (total_score > randomNumber) {
        losses++;
        $("#losses").text("Losses: " + losses);
    }
}) 