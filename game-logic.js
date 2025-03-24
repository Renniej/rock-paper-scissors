
console.log("Hello world")
console.log(getComputerChoice())
function getComputerChoice() {
    let choice = ""
    const randomNumber = Math.random()

    if (randomNumber <= 0.33) {
        choice = "rock"
    } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
        choice = "paper"
    } else {
        choice = "scissors"
    }

    return choice
}



