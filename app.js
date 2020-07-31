let scores, round, activePlayer, diceValue;

scores = [0, 0];
round = 0;
activePlayer = 0; // currently active player: 0 is first and 1 is second player

diceValue = Math.floor(Math.random() * 6) + 1; // number between 1 and 6

document.querySelector("#current-" + activePlayer).textContent = diceValue;
document.querySelector(".dice").style.display = "none";
