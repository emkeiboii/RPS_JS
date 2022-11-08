const options = [`rock`, `paper`, `scissor`];

function getComputerChoice (){
  const pick = options[Math.floor(Math.random() * options.length)];
  return pick;
}


function checkWinner (playerSelection, computerSelection){

  if(playerSelection === computerSelection){
    return `Tie`;
  } else if(
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")){
    return `Player`;
  } else {
    return `Computer`;
  }
}

function playRound (playerSelection, computerSelection){
  const result = checkWinner(playerSelection, computerSelection)
  if(result === `Tie`){
    return `It's a tie!`
  } else if(result === `Player`){
    return `You WIN! ${playerSelection} beats ${computerSelection}.`
  } else(result === `Computer`)
    return `You LOST... ${computerSelection} beats ${playerSelection}.`
}

function getPlayerChoice (){
  let validatedInput = false;
  while(validatedInput === false){
    const pick = prompt(`Rock, Paper, Scissor?`)
    if(pick === null){
      continue;
    }
    const pickInLower = pick.toLowerCase();
    if(options.includes(pickInLower)){
      validatedInput === true;
      return pickInLower
    }
  }
}


function game () {
let scorePlayer = 0;
let scoreComputer = 0;  
  console.log(`Welcome!`)
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
      console.log(`-----------------------------`)
      if(checkWinner(playerSelection, computerSelection)=== `Player`){
        scorePlayer++;
      } else if(checkWinner(playerSelection, computerSelection)=== `Computer`){
        scoreComputer++;
      }
  }
  console.log(`Game Over!`)
  if(scorePlayer > scoreComputer){
    console.log(`You Won the Game!`)
  } else if (scoreComputer > scorePlayer){
    console.log(`You Lost the Game...`)
  } else {
    console.log(`Fantastic, a draw....`)
  }
}

game()