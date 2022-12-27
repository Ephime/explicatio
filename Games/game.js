//Information lists
window.$('#show-game-rules').click(function() {
  "use strict";
  window.$("#difficulty-page").show();
});
window.$("#difficulty-page").click(function() {
  "use strict";
  window.$("#difficulty-page").hide();
});



//The game itself
var buttonColours = ["red", "blue", "purple", "green", "yellow", "orange"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() { //This is for when the game starts
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() { //This takes the input of the player and gives the corresponding ouput

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});


function checkAnswer(currentLevel) { //this compares the players input with the already randomly generated output for each sequence

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }

  } else {

    console.log("wrong"); //This is for everything that should happen when the wring tile is pressed (i.e. the sound that plays, the change in background colour, etc.)

    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");

    startOver();
  }

}

function nextSequence() { //this creates the randomly generated sequence for the game

  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 6);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) { //This plays the sound when a tile is pressed, different for each tile
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) { //This causes the tiles to change colours when pressed
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function startOver() { //This resets the game
  level = 0;
  gamePattern = [];
  started = false;
}
