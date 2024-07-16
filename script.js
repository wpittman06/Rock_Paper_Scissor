const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  document.querySelector("button").textContent = "Play new game";
  logWins();
}

function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
  console.log("-----------------------------");
}

function computerChoice() {
  //get random input from computerS
  return choices[Math.floor(Math.random() * choices.length)];
}

function playerChoice() {
  //get random input from player
  let input = prompt("Type Rock, Paper, or Scissors");
  while (input == null) {
    input = prompt("Type Rock, Paper, Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt(
      "Type Rock, Paper, or Scissors. Spell your choice correctly"
    );
    while (input == null) {
      input = prompt("Type Rock, Paper, Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie!";
  } else if (
    (choiceP === "rock" && choiceC == "scissors") ||
    (choiceP === "paper" && choiceC == "rock") ||
    (choiceP === "scissors" && choiceC == "paper")
  ) {
    return "Player wins!";
  } else {
    return "Computer wins!";
  }
}

function logWins() {
  let playerWins = winners.filter((item) => item == "Player wins!").length;
  let computerWins = winners.filter((item) => item == "Computer wins!").length;
  let ties = winners.filter((item) => item == "Tie!").length;
  console.log("Results:");
  console.log("Player Wins:", playerWins);
  console.log("Computer Wins:", computerWins);
  console.log("Ties:", ties);
}
function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round:", round);
  console.log("Player chose:", playerChoice);
  console.log("Computer chose:", computerChoice);
  console.log(winner, "Won the round");
}
