//* TASK 1: Logic *

// change these variables to test your code

//Testing Player Wins!:
// let playerMove = "rock";
// let computerMove = "paper";
// console returs Player Wins! - works

//Testing Draw!:
// let playerMove = "paper";
// let computerMove = "paper";
// console returns Draw! - works

//Testing Computer Wins!:
// let playerMove = "scissors";
// let computerMove = "rock";
//console returns Computer Wins! - works

//Combinations Plan:
// Draw:
//playerMove = "rock" && computerMove = "rock"
//playerMove = "paper" && computerMove = "paper"
//playerMove = "scissors" && computerMove = "scissors"
//
//Player Wins:
//playerMove = "rock" && computerMove = "scissors"
//playerMove = "paper" && computerMove = "rock"
//playerMove = "scissors" && computerMove = "paper"
//
//Computer Wins:
//playerMove = "rock" && computerMove = "paper"
//playerMove = "paper" && computerMove = "scissors"
//playerMove = "scissors" && computerMove = "rock"
//
//Set of if statements:
// if (
//   (playerMove === "rock" && computerMove === "rock") ||
//   (playerMove === "paper" && computerMove === "paper") ||
//   (playerMove === "scissors" && computerMove === "scissors")
// ) {
//   console.log("Draw!");
// } else if (
//   (playerMove === "rock" && computerMove === "scissors") ||
//   (playerMove === "paper" && computerMove === "rock") ||
//   (playerMove === "scissors" && computerMove === "paper")
// ) {
//   console.log("Player Wins!");
// } else if (
//   (playerMove === "rock" && computerMove === "paper") ||
//   (playerMove === "paper" && computerMove === "scissors") ||
//   (playerMove === "scissors" && computerMove === "rock")
// ) {
//   console.log("Computer Wins!");
// }
//Set of if statements - testing complete - works.

//* TASK 2: Function *

// function getWinner(player1, player2) {
//   if (player1 === "rock") {
//     if (player2 === "rock") {
//       return 0;
//     } else if (player2 === "paper") {
//       return -1;
//     } else if (player2 === "scissors") {
//       return 1;
//     }
//   }
//   if (player1 === "paper") {
//     if (player2 === "paper") {
//       return 0;
//     } else if (player2 === "scissors") {
//       return -1;
//     } else if (player2 === "rock") {
//       return 1;
//     }
//   }
//   if (player1 === "scissors") {
//     if (player2 === "scissors") {
//       return 0;
//     } else if (player2 === "rock") {
//       return -1;
//     } else if (player2 === "paper") {
//       return 1;
//     }
//   }
// }

//Testing Computer Wins:
// let result = getWinner("rock", "paper");
//Computer Wins! - console shows: -1 -> works

//Testing Draw:
// let result = getWinner("paper", "paper");
//Draw! - console shows: 0 -> works

//Testing Player Wins:
// let result = getWinner("scissors", "paper");
//Player Wins! - console shows: 1 -> works

// console.log(result);

//* TASK 3: User Input *

// function getWinner(player1, player2) {
//   if (player1 === "rock") {
//     if (player2 === "rock") {
//       return 0;
//     } else if (player2 === "paper") {
//       return -1;
//     } else if (player2 === "scissors") {
//       return 1;
//     }
//   }
//   if (player1 === "paper") {
//     if (player2 === "paper") {
//       return 0;
//     } else if (player2 === "scissors") {
//       return -1;
//     } else if (player2 === "rock") {
//       return 1;
//     }
//   }
//   if (player1 === "scissors") {
//     if (player2 === "scissors") {
//       return 0;
//     } else if (player2 === "rock") {
//       return -1;
//     } else if (player2 === "paper") {
//       return 1;
//     }
//   }
// }
// let userInput = prompt("Please type rock, paper or scissors here.");
// let result = getWinner(userInput, "paper");

// alert(result);
// works; returns appropriate values -> 1, -1, 0

//* TASK 4: Computer Player

// function getWinner(player1, player2) {
//   if (player1 === "rock") {
//     if (player2 === "rock") {
//       return 0;
//     } else if (player2 === "paper") {
//       return -1;
//     } else if (player2 === "scissors") {
//       return 1;
//     }
//   }
//   if (player1 === "paper") {
//     if (player2 === "paper") {
//       return 0;
//     } else if (player2 === "scissors") {
//       return -1;
//     } else if (player2 === "rock") {
//       return 1;
//     }
//   }
//   if (player1 === "scissors") {
//     if (player2 === "scissors") {
//       return 0;
//     } else if (player2 === "rock") {
//       return -1;
//     } else if (player2 === "paper") {
//       return 1;
//     }
//   }
// }
// let playerChoice = prompt("Please type rock, paper or scissors here.");
// // console.log(playerChoice); //to check if works correctly -> works

// function computerChoice() {
//   let availableMoves = ["rock", "paper", "scissors"],
//     randomNumber = Math.floor(Math.random() * availableMoves.length),
//     computerPick = availableMoves[randomNumber];
// //   console.log(computerPick); //to check if works correctly -> works
//   return computerPick;
// }

// let result = getWinner(playerChoice, computerChoice());

// // console.log(result); //to check if works correctly -> works
// alert(result);

//works; each time computer picks random option.

//* TASK 5: Game Loop *

// function getWinner(player1, player2) {
//   if (player1 === "rock") {
//     if (player2 === "rock") {
//       return 0;
//     } else if (player2 === "paper") {
//       return -1;
//     } else if (player2 === "scissors") {
//       return 1;
//     }
//   }
//   if (player1 === "paper") {
//     if (player2 === "paper") {
//       return 0;
//     } else if (player2 === "scissors") {
//       return -1;
//     } else if (player2 === "rock") {
//       return 1;
//     }
//   }
//   if (player1 === "scissors") {
//     if (player2 === "scissors") {
//       return 0;
//     } else if (player2 === "rock") {
//       return -1;
//     } else if (player2 === "paper") {
//       return 1;
//     }
//   }
// }

// //added playRPS variable and while loop
// let playRPS = true;

// while (playRPS === true) {
//   let playerChoice = prompt("Please type rock, paper or scissors here.");

//   function computerChoice() {
//     let availableMoves = ["rock", "paper", "scissors"],
//       randomNumber = Math.floor(Math.random() * availableMoves.length),
//       computerPick = availableMoves[randomNumber];
//     return computerPick;
//   }

//   let result = getWinner(playerChoice, computerChoice());

//   alert(result);

//   playRPS = confirm("Do you want to play again?");
// }
//confirm successfully lets the player to play indefinitely or stop after every round.
//works.

//* TASK 6: Scores
//Keep track of how many games have been played, as well as the number of wins, losses, and draws.

// let wins = 0;
// let losses = 0;
// let draws = 0;
// let gamesPlayed = 0;

// function getWinner(player1, player2) {
//   if (player1 === "rock") {
//     if (player2 === "rock") {
//       return 0;
//     } else if (player2 === "paper") {
//       return -1;
//     } else if (player2 === "scissors") {
//       return 1;
//     }
//   }
//   if (player1 === "paper") {
//     if (player2 === "paper") {
//       return 0;
//     } else if (player2 === "scissors") {
//       return -1;
//     } else if (player2 === "rock") {
//       return 1;
//     }
//   }
//   if (player1 === "scissors") {
//     if (player2 === "scissors") {
//       return 0;
//     } else if (player2 === "rock") {
//       return -1;
//     } else if (player2 === "paper") {
//       return 1;
//     }
//   }
// }

// let playRPS = true;

// while (playRPS === true) {
//   let playerChoice = prompt("Please type rock, paper or scissors here.");

//   function computerChoice() {
//     let availableMoves = ["rock", "paper", "scissors"],
//       randomNumber = Math.floor(Math.random() * availableMoves.length),
//       computerPick = availableMoves[randomNumber];
//     return computerPick;
//   }

//   let result = getWinner(playerChoice, computerChoice());

//   alert(result);
//   //to update score
//   function updateScore() {
//     if (result === 0) {
//       draws++;
//       console.log(draws);
//       gamesPlayed++;
//       console.log(gamesPlayed);
//     } else if (result === -1) {
//       losses++;
//       console.log(losses);
//       gamesPlayed++;
//       console.log(gamesPlayed);
//     } else if (result === 1) {
//       wins++;
//       console.log(wins);
//       gamesPlayed++;
//       console.log(gamesPlayed);
//     }
//   }
//   updateScore();
//   //to show different scores
//   alert("Wins: " + wins);
//   alert("Losses: " + losses);
//   alert("Draws: " + draws);
//   alert("Games Played: " + gamesPlayed);

//   playRPS = confirm("Do you want to play again?");
// }
//works -> shows games played, wins, losses, draws
// remembers score until playRPS != true

//* TASK 7: DOM *
// Refactor your application so that all interactions are through HTML elements.
// Compute the winner when an event is fired.
//event listener perhaps?
// Turrn while loop -> event listener
// Turn user input -> HTML element
// const winsScore = document.
// const rockButton = document.getElementById("rock");
// const paperButton = document.getElementById("paper");
// const scissorsButton = document.getElementById("scissors");
// const resetButton = document.getElementById("reset");

// let wins = 0;
// let losses = 0;
// let draws = 0;
// let gamesPlayed = 0;
// let playerChoice = "";
// let result = "";

// function getWinner(player1, player2) {
//   if (player1 === "rock") {
//     if (player2 === "rock") {
//       return 0;
//     } else if (player2 === "paper") {
//       return -1;
//     } else if (player2 === "scissors") {
//       return 1;
//     }
//   }
//   if (player1 === "paper") {
//     if (player2 === "paper") {
//       return 0;
//     } else if (player2 === "scissors") {
//       return -1;
//     } else if (player2 === "rock") {
//       return 1;
//     }
//   }
//   if (player1 === "scissors") {
//     if (player2 === "scissors") {
//       return 0;
//     } else if (player2 === "rock") {
//       return -1;
//     } else if (player2 === "paper") {
//       return 1;
//     }
//   }
// }

// function computerChoice() {
//   let availableMoves = ["rock", "paper", "scissors"],
//     randomNumber = Math.floor(Math.random() * availableMoves.length),
//     computerPick = availableMoves[randomNumber];
//   console.log(computerPick);
//   return computerPick;
// }

// function updateScore() {
//   if (result === 0) {
//     draws++;
//     console.log(draws);
//     document.querySelector(".draws-count").innerText = draws;
//     gamesPlayed++;
//     console.log(gamesPlayed);
//     document.querySelector(
//       ".games-score"
//     ).innerText = `Games Played: ${gamesPlayed}`;
//   } else if (result === -1) {
//     losses++;
//     console.log(losses);
//     document.querySelector(".losses-count").innerText = losses;
//     gamesPlayed++;
//     console.log(gamesPlayed);
//     document.querySelector(
//       ".games-score"
//     ).innerText = `Games Played: ${gamesPlayed}`;
//   } else if (result === 1) {
//     wins++;
//     console.log(wins);
//     document.querySelector(".wins-count").innerText = wins;
//     gamesPlayed++;
//     console.log(gamesPlayed);
//     document.querySelector(
//       ".games-score"
//     ).innerText = `Games Played: ${gamesPlayed}`;
//   }
// }
// rockButton.addEventListener("click", function () {
//   playerChoice = "rock";
//   console.log(playerChoice);
//   result = getWinner(playerChoice, computerChoice());
//   updateScore();
// });
// paperButton.addEventListener("click", function () {
//   playerChoice = "paper";
//   console.log(playerChoice);
//   result = getWinner(playerChoice, computerChoice());
//   updateScore();
// });
// scissorsButton.addEventListener("click", function () {
//   playerChoice = "scissors";
//   console.log(playerChoice);
//   result = getWinner(playerChoice, computerChoice());
//   updateScore();
// });
// resetButton.addEventListener("click", function () {
//   location.reload();
// });

//* TASK 8: Validation *
// const usernameAndTitle = document.querySelector(".title");
// const rockButton = document.getElementById("rock");
// const paperButton = document.getElementById("paper");
// const scissorsButton = document.getElementById("scissors");
// const resetButton = document.getElementById("reset");
// const confirmButton = document
//   .querySelector(".confirm-button")
//   .addEventListener("click", changeTitle);

// let wins = 0;
// let losses = 0;
// let draws = 0;
// let gamesPlayed = 0;
// let playerChoice = "";
// let result = "";
// let username = "";

// function changeTitle() {
//   let input = document.querySelector("#name-input").value;

//   if (input === "") {
//     alert("Please enter your name");
//   } else {
//     username = input.charAt(0).toUpperCase() + input.slice(1);
//     usernameAndTitle.innerHTML = `${username} VS The Machine!`;
//   }
// }

// function getWinner(player1, player2) {
//   if (player1 === "rock") {
//     if (player2 === "rock") {
//       return 0;
//     } else if (player2 === "paper") {
//       return -1;
//     } else if (player2 === "scissors") {
//       return 1;
//     }
//   }
//   if (player1 === "paper") {
//     if (player2 === "paper") {
//       return 0;
//     } else if (player2 === "scissors") {
//       return -1;
//     } else if (player2 === "rock") {
//       return 1;
//     }
//   }
//   if (player1 === "scissors") {
//     if (player2 === "scissors") {
//       return 0;
//     } else if (player2 === "rock") {
//       return -1;
//     } else if (player2 === "paper") {
//       return 1;
//     }
//   }
// }

// function computerChoice() {
//   let availableMoves = ["rock", "paper", "scissors"],
//     randomNumber = Math.floor(Math.random() * availableMoves.length),
//     computerPick = availableMoves[randomNumber];
//   console.log(computerPick);
//   return computerPick;
// }

// function updateScore() {
//   if (result === 0) {
//     draws++;
//     console.log(draws);
//     document.querySelector(".draws-count").innerText = draws;
//     gamesPlayed++;
//     console.log(gamesPlayed);
//     document.querySelector(
//       ".games-score"
//     ).innerText = `Games Played: ${gamesPlayed}`;
//   } else if (result === -1) {
//     losses++;
//     console.log(losses);
//     document.querySelector(".losses-count").innerText = losses;
//     gamesPlayed++;
//     console.log(gamesPlayed);
//     document.querySelector(
//       ".games-score"
//     ).innerText = `Games Played: ${gamesPlayed}`;
//   } else if (result === 1) {
//     wins++;
//     console.log(wins);
//     document.querySelector(".wins-count").innerText = wins;
//     gamesPlayed++;
//     console.log(gamesPlayed);
//     document.querySelector(
//       ".games-score"
//     ).innerText = `Games Played: ${gamesPlayed}`;
//   }
// }
// rockButton.addEventListener("click", function () {
//   playerChoice = "rock";
//   console.log(playerChoice);
//   result = getWinner(playerChoice, computerChoice());
//   updateScore();
// });
// paperButton.addEventListener("click", function () {
//   playerChoice = "paper";
//   console.log(playerChoice);
//   result = getWinner(playerChoice, computerChoice());
//   updateScore();
// });
// scissorsButton.addEventListener("click", function () {
//   playerChoice = "scissors";
//   console.log(playerChoice);
//   result = getWinner(playerChoice, computerChoice());
//   updateScore();
// });
// resetButton.addEventListener("click", function () {
//   location.reload();
// });

//* Task 9: Style, Animation and User Experience *

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
