// Image 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // Create a string that has the image name according to the random number

var randomImageSource1 = "images/" + randomDiceImage1; // Create a string that has the image source according to the random number

var image1 = document.querySelector(".img1"); // Select the first image

image1.setAttribute("src", randomImageSource1); // Set the image source


// Image 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // Create a string that has the image name according to the random number

var randomImageSource2 = "images/" + randomDiceImage2; // Create a string that has the image source according to the random number

var image2 = document.querySelector(".img2"); // Select the second image

image2.setAttribute("src", randomImageSource2); // Set the image source


console.log(randomNumber1);
console.log(randomNumber2);

// H1 Change
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw, please play again";
}


// Play Again Button
var button = document.querySelector("button");

button.addEventListener("click", function() {
    location.reload();
});