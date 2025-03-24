


const Choice = Object.freeze({
    SCISSORS: Symbol("scissors"),
    PAPER: Symbol("paper"),
    ROCK: Symbol("rock"),
  
})

let humanScore = 0
let computerScore = 0
let curRound = 1;
const MAX_ROUNDS = 5;
const displayTextElem = document.getElementById("display")

playGame()

function playGame() {

    curRound = 1;
    humanScore = 0;
    computerScore = 0;


    const rockBtn = {element :  document.getElementById("rock"), value : Choice.ROCK}
    const paperBtn = {element: document.getElementById("paper"), value : Choice.PAPER}
    const scissorsBtn = {element: document.getElementById("scissors"), value: Choice.SCISSORS}

    const listOfButtons = [rockBtn, paperBtn, scissorsBtn]

    listOfButtons.forEach(btn => {
        btn.element.addEventListener("click", e => {
            if (curRound > MAX_ROUNDS) return;

            const computerChoice = getComputerChoice()
            const playerChoice = btn.value
            playRound(playerChoice, computerChoice)
            curRound++

            if (curRound > MAX_ROUNDS) {
                announceWinner()
            } else {
                displayScore()
            }
        })
    })




  

   


}

function displayScore() {
    const scoreMsg = `Player : ${humanScore} | Computer : ${computerScore}`
    displayTextElem.innerText = scoreMsg
}

function announceWinner() {

    let winnerMsg

    if (humanScore > computerScore) {
        winnerMsg = "[ Game Over ] You won the game!"
    } else if (humanScore < computerScore) {
        winnerMsg = "[ Game Over ] You lost! ):"
    } else {
         winnerMsg = "[ Game Over ] It's a tie!"
    }

    displayTextElem.innerText = winnerMsg
}



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
    const input = prompt("Choose between rock, paper, or scissors")?.toLocaleLowerCase().trim()
    const choice = Object.values(Choice).find(choice => choice.description == input)

    if (choice == undefined || choice == null) { //invalid choice
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



