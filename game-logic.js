
console.log("Hello world")
console.log(getComputerChoice())

const Choice = Object.freeze({
    SCISSORS : Symbol("Scissors"),
    PAPER : Symbol("Paper"),
    ROCK : Symbol("Rock"),
    INVALID : Symbol("Invalid")
})


function getHumanChoice() {
    const playerChoice = prompt("Choose between rock, paper, or scissors").toLocaleLowerCase().trim()


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



