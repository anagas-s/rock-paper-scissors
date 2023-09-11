function game(){
    let scorePlayer =0;
    let scoreComputer =0;
    for(let i=0;i<5;i++){
        const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    let round = checkWinner(playerSelection,computerSelection);
    console.log(playRound(playerSelection,computerSelection));
    console.log("---------------")

    if(round == 'Tie'){

    }else if(round === 'Player'){
        scorePlayer++;

    }else scoreComputer++;
    }
    console.log("Game Over");

    console.log("COMPUTER:"+ scoreComputer);
    console.log("YOU:"+ scorePlayer);
    if(scoreComputer>scorePlayer){
        console.log("You Lose");
    }else if(scorePlayer>scoreComputer){console.log("You Won");
}else console.log("Its a Tie");


}



function getComputerChoice(){
    let computerSelection = ['rock','paper','scissors'];
    let selection =Math.floor(Math.random()*computerSelection.length)
    console.log(computerSelection[selection])
    return computerSelection[selection];
}


function getPlayerChoice(){
    let playerSelection = prompt("Enter your choice(rock,paper,scissors)");
    let selection = playerSelection.toLowerCase();
    console.log(selection)
    return selection;
}

function checkWinner(playerSelection,computerSelection){
        if(playerSelection === computerSelection){
            return "Tie";
        } else if(
            (playerSelection === 'rock' && computerSelection ==='scissors') ||
            (playerSelection === 'paper' && computerSelection ==='rock') ||
            (playerSelection === 'scissors' && computerSelection ==='paper')
        ){
            return "Player";
        }else return "Computer";
        }


function playRound(playerSelection,computerSelection){
    let result = checkWinner(playerSelection,computerSelection);
    if(result == "Tie"){
        
        return "Its a Tie";
    }else if(result === "Player"){
        return "You WIN!!!"
        
    }else {
        return "You LOSE!!!"
}
}

// const playerSelection = getPlayerChoice();
// const computerSelection = getComputerChoice();

// console.log(playRound(playerSelection,computerSelection));
game();