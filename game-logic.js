
console.log("Hello world")
console.log(getComputerChoice())

const Choice = Object.freeze({
    SCISSORS: Symbol("scissors"),
    PAPER: Symbol("paper"),
    ROCK: Symbol("rock"),
    INVALID: Symbol("invalid")
})

let humanScore = 0
let computerScore = 0




function getHumanChoice() {
    const playerChoice = prompt("Choose between rock, paper, or scissors").toLocaleLowerCase().trim()
    if (playerChoice != Choice.SCISSORS.description && playerChoice != Choice.PAPER.description && playerChoice != Choice.ROCK.description) {
        console.log(`'${prompt}' is an invalid choice. Try again`)
        return getHumanChoice()
    } else {
        return playerChoice
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



