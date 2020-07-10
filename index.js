function rollDice() {
  console.log("Let's roll the dice!");

  var randomNumber = Math.round(Math.random() * 5 + 1);
  var image = "";

  if (randomNumber == 1) {
    image = "dice1.JPG";
  }
  if (randomNumber == 2) {
    image = "dice2.JPG";
  }
  if (randomNumber == 3) {
    image = "dice3.JPG";
  }
  if (randomNumber == 4) {
    image = "dice4.JPG";
  }
  if (randomNumber == 5) {
    image = "dice5.JPG";
  }
  if (randomNumber == 6) {
    image = "dice6.JPG";
  }

  document.querySelector("img").src = image;
}
