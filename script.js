// The pig game

var scores, activePlayer, roundScore, isPlaying;

init();

document.querySelector(".btn--roll").addEventListener("click", function () {
  //random num
  if (isPlaying) {
    var dice = Math.floor(Math.random() * 6) + 1; //random is 0<= x <=1
    //display dice
    var diceObj = document.querySelector(".dice");

    diceObj.style.display = "block";
    diceObj.src = "dice-" + dice + ".png";

    //update current score
    if (dice !== 1) {
      //add to current score
      roundScore += dice;
      document.getElementById("current--" + activePlayer).textContent =
        roundScore;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector(".btn--hold").addEventListener("click", function () {
  if (isPlaying) {
    var diceObj = document.querySelector(".dice");

    //update scores
    scores[activePlayer] += roundScore;

    document.querySelector("#score--" + activePlayer).textContent =
      scores[activePlayer];

    //check if winner
    if (scores[activePlayer] >= 50) {
      document.querySelector("#name--" + activePlayer).textContent = "WINNER!";
      diceObj.style.display = "none";

      document
        .querySelector(".player--" + activePlayer)
        .classList.remove("player--active");
      document
        .querySelector(".player--" + activePlayer)
        .classList.add("player--winner");
      //document.querySelector(".name").classList.add("player--winner");

      isPlaying = false;
    } else {
      //not winner, end current turn
      nextPlayer();
    }
  }
});
document.querySelector(".btn--new").addEventListener("click", init);

function nextPlayer() {
  roundScore = 0;

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  document.getElementById("current--0").textContent = 0;
  document.getElementById("current--1").textContent = 0;

  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
}

function init() {
  scores = [0, 0];
  roundScore = 0;

  activePlayer = 0;

  isPlaying = true;

  document.querySelector(".dice").style.display = "none"; //change css

  document.getElementById("score--0").textContent = 0;
  document.getElementById("score--1").textContent = 0;
  document.getElementById("current--0").textContent = 0;
  document.getElementById("current--1").textContent = 0;

  document.querySelector(".player--0").classList.remove("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");

  document.querySelector(".player--0").classList.add("player--active");

  document.querySelector("#name--0").textContent = "Player 1";
  document.querySelector("#name--1").textContent = "Player 2";
}
