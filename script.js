//numar aleatoriu
let randomNumber = Math.floor(Math.random() * 100) + 1;

let guessCount = 1;
let resetButton;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".loworhigh");

const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");

function checkGuess()
{
    let userGuess=Number(guessField.value);
    if(userGuess===randomNumber){
        lastResult.textContent="Congratulations, you guessed the number!";
        lastResult.style.backgroundColor="green";
        lowOrHigh.textContent="";
        setGameOver();
        
    }
    else if (guessCount===10){
        lastResult.textContent="You lost.";
        setGameOver();
    }
        else{
        lastResult.textContent="Incorrect";
        lastResult.style.backgroundColor="red";
            if(userGuess<randomNumber){
                lowOrHigh.textContent="The number is higher.";
            }
            else if(userGuess>randomNumber){
                lowOrHigh.textContent="The number is lower.";
        }
    } 
    
    guessCount++;
    guessField.value="";
    guessField.focus();

}
guessSubmit.addEventListener("click", checkGuess);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    resetButton.style.backgroundColor = "black";
    resetButton.style.color = "lightgreen";
    resetButton.style.padding = "10px";
    resetButton.style.border = "1px solid green";
    resetButton.style.borderRadius = "5px";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}
function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");
    
    for ( let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "black";

    randomNumber = Math.floor(Math.random() * 100) + 1;
}

