
console.log("Hello world")
console.log(getComputerChoice())

const Choice = Object.freeze({
    SCISSORS: Symbol("scissors"),
    PAPER: Symbol("paper"),
    ROCK: Symbol("rock"),
  
})

let humanScore = 0
let computerScore = 0


function playRound(humanChoice, computerChoice){

    let hasWon = false

    switch(humanChoice) {
        case Choice.SCISSORS : 
            hasWon = computerChoice == Choice.PAPER
            break;
        case Choice.PAPER : 
            hasWon = computerChoice == Choice.ROCK
        case Choice.ROCK :
            hasWon = computerChoice == Choice.PAPER
        break;
    }


    if (hasWon) {
        console.log(`You win! ${humanChoice.description} beats ${computerChoice.description}`)
        humanScore++
    } else {
        console.log(`You lose! ${computerChoice.description} beats ${humanChoice.description}`)
        computerScore++
    }


}

function getHumanChoice() {
    const input = prompt("Choose between rock, paper, or scissors").toLocaleLowerCase().trim()
    const choice = Object.values(Choice).find(choice => choice.description == playerChoice)

    if (choice == undefined ) { //invalid choice
        console.log(`'${prompt}' is an invalid choice. Try again`)
        return getHumanChoice()
    } else {
        return choice
    }
}


function getComputerChoice() {
    let choice = Choice.INVALID
    const randomNumber = Math.random()

    if (randomNumber <= 0.33) {
        choice = Choice.PAPER
    } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
        choice = Choice.ROCK
    } else {
        choice = Choice.SCISSORS
    }

    return choice
}



