let scores, round, activePlayer, gameOn;

let init = () => {
  scores = [0, 0];
  round = 0;
  activePlayer = 0; // currently active player: 0 is first and 1 is second player
  gameOn = true;

  document.querySelector(".dice").style.display = "none";
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "1st Player";
  document.getElementById("name-1").textContent = "2nd Player";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
};

let nextPlayer = () => {
  // next player turn
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0); // switch players
  round = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.querySelector(".dice").style.display = "none"; // hide dice when new player is on his turn
};

init();

// ROLL THE DICE
document.querySelector(".btn-roll").addEventListener("click", () => {
  if (gameOn) {
    // get random nubmer
    let diceValue = Math.floor(Math.random() * 6) + 1; // number between 1 and 6

    // display the result
    const diceNumber = document.querySelector(".dice");
    diceNumber.style.display = "block";
    diceNumber.src = diceValue + ".png";

    // update score for all values except value 1
    if (diceValue !== 1) {
      round += diceValue;
      document.querySelector("#current-" + activePlayer).textContent = round;
    } else {
      nextPlayer();
    }
  }
});

// HOLD THE POINTS TO THE SCORE
document.querySelector(".btn-hold").addEventListener("click", () => {
  if (gameOn) {
    // adding current score to global score
    let activePlayerPoints = (scores[activePlayer] += round);

    // udate user interface
    document.querySelector(
      "#score-" + activePlayer
    ).textContent = activePlayerPoints;

    // check who won the game
    if (scores[activePlayer] >= 100) {
      document.querySelector("#name-" + activePlayer).textContent = "WINER!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gameOn = false; // end of the game state variable
    } else {
      // next player turn
      nextPlayer();
    }
  }
});

// START A NEW GAME
document.querySelector(".btn-new").addEventListener("click", init); // reset everything and start a new game
