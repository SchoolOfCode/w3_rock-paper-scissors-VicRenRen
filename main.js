const usernameAndTitle = document.querySelector(".game-title");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resetButton = document.getElementById("reset");
const confirmButton = document
  .querySelector(".confirm-button")
  .addEventListener("click", changeTitle);

let wins = 0;
let losses = 0;
let draws = 0;
let gamesPlayed = 0;
let playerChoice = "";
let result = "";
let username = "";

function changeTitle() {
  let input = document.querySelector("#name-input").value;

  if (input === "") {
    alert("Please enter your name");
  } else {
    username = input.charAt(0).toUpperCase() + input.slice(1);
    usernameAndTitle.innerHTML = `${username} VS The Machine!`;
    document.querySelector(".username-container").style.display = "none";
    document.querySelector(".ingame").style.visibility = "visible";
    document.querySelector(".games-score").style.visibility = "visible";
  }
}

function getWinner(player1, player2) {
  if (player1 === "rock") {
    if (player2 === "rock") {
      return 0;
    } else if (player2 === "paper") {
      return -1;
    } else if (player2 === "scissors") {
      return 1;
    }
  }
  if (player1 === "paper") {
    if (player2 === "paper") {
      return 0;
    } else if (player2 === "scissors") {
      return -1;
    } else if (player2 === "rock") {
      return 1;
    }
  }
  if (player1 === "scissors") {
    if (player2 === "scissors") {
      return 0;
    } else if (player2 === "rock") {
      return -1;
    } else if (player2 === "paper") {
      return 1;
    }
  }
}

function computerChoice() {
  let availableMoves = ["rock", "paper", "scissors"],
    randomNumber = Math.floor(Math.random() * availableMoves.length),
    computerPick = availableMoves[randomNumber];
  console.log(computerPick);
  if (computerPick === "rock") {
    document.getElementById("computer-weapon").src = "/RPS-assets/rock.png";
  } else if (computerPick === "paper") {
    document.getElementById("computer-weapon").src = "/RPS-assets/paper.png";
  } else if (computerPick === "scissors") {
    document.getElementById("computer-weapon").src = "/RPS-assets/scissors.png";
  }
  return computerPick;
}

function updateScore() {
  if (result === 0) {
    draws++;
    console.log(draws);
    document.querySelector(".draws-count").innerText = draws;
    gamesPlayed++;
    console.log(gamesPlayed);
    document.querySelector(
      ".games-score"
    ).innerText = `Games Played: ${gamesPlayed}`;
  } else if (result === -1) {
    losses++;
    console.log(losses);
    document.querySelector(".losses-count").innerText = losses;
    gamesPlayed++;
    console.log(gamesPlayed);
    document.querySelector(
      ".games-score"
    ).innerText = `Games Played: ${gamesPlayed}`;
  } else if (result === 1) {
    wins++;
    console.log(wins);
    document.querySelector(".wins-count").innerText = wins;
    gamesPlayed++;
    console.log(gamesPlayed);
    document.querySelector(
      ".games-score"
    ).innerText = `Games Played: ${gamesPlayed}`;
  }
}
rockButton.addEventListener("click", function () {
  playerChoice = "rock";
  document.getElementById("player-weapon").src = "/RPS-assets/rock.png";
  console.log(playerChoice);
  result = getWinner(playerChoice, computerChoice());
  updateScore();
});
paperButton.addEventListener("click", function () {
  playerChoice = "paper";
  document.getElementById("player-weapon").src = "/RPS-assets/paper.png";
  console.log(playerChoice);
  result = getWinner(playerChoice, computerChoice());
  updateScore();
});
scissorsButton.addEventListener("click", function () {
  playerChoice = "scissors";
  document.getElementById("player-weapon").src = "/RPS-assets/scissors.png";
  console.log(playerChoice);
  result = getWinner(playerChoice, computerChoice());
  updateScore();
});
resetButton.addEventListener("click", function () {
  location.reload();
});
