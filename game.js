"use strict";
var x = Math.trunc(Math.random() * 20) + 1;
console.log("number :" + x, typeof x);
var point = 20;
var highscore = 0;

// this display massage function used when we want to give massege in score;
var displayMassage = function (massage) {
  document.getElementById("massage").textContent = massage;
};
//check button functionality

document.getElementById("submit").addEventListener("click", function () {
  //store the input of number we gave in guess
  var guess = Number(document.getElementById("num").value);
  console.log(guess, typeof guess);
  if (!guess) displayMassage("No input");
  else if (guess != x) {
    if (point <= 0) {
      displayMassage("You Lost The Game");
    } else {
      // document.getElementById("massage").textContent =
      //   guess > x ? "To High ☹" : "To Low ☹"; // using conditional operator is good way to write short code

      displayMassage(guess > x ? "To High ☹" : "To Low ☹");

      point--;
      document.getElementById("points").textContent = point;
    }
  } else if (guess === x) {
    document.getElementById("body").style.backgroundColor = "green";
    displayMassage("correct  Congrats!! 🤩🤩");
    document.getElementById("secret").textContent = x;
    document.getElementById("points").textContent = point;

    if (point > highscore) {
      document.getElementById("highscore").textContent = point;
      highscore = point;
    }
  }
});

document.getElementById("btn").addEventListener("click", function () {
  x = Math.trunc(Math.random() * 20) + 1;
  console.log("number: " + x, typeof x);
  document.getElementById("secret").textContent = "Secret Number";
  document.getElementById("num").value = "";
  displayMassage("Start The Game");
  point = 20;
  document.getElementById("points").textContent = point;
  document.getElementById("body").style.backgroundColor = "black";
});
