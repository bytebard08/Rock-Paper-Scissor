let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const showUserScore = document.querySelector("#user-score");
const showCompScore = document.querySelector("#comp-score");
const reset = document.querySelector("#reset");

reset.addEventListener(("click"),()=>{
    const resetSound = new Audio("Sounds/RPS-Draw-Sound.wav");
    resetSound.play();
    userScore = 0;
    showUserScore.innerText = userScore;
    compScore = 0;
    showCompScore.innerText = compScore;
    msg.innerText="Play your move!";
    msg.style.backgroundColor="rgb(9, 3, 39)";
})

const drawGame = () =>{
    const drawSound = new Audio("Sounds/RPS-Draw-Sound.wav");
    drawSound.play();
    msg.innerText = "Draw, Play Again";
    msg.style.backgroundColor = "rgb(9, 3, 39)";
}

const showResult = (userWin) =>{
    if(userWin){
        const winSound = new Audio("Sounds/RPS-Win-sound.wav");
        winSound.play();
        userScore++;
        showUserScore.innerText = userScore;
        msg.innerText="You Win!";
        msg.style.backgroundColor = "Green"
    }else{
        const loseSound = new Audio("Sounds/RPS-Lose-Sound.wav");
        loseSound.play();
        compScore++;
        showCompScore.innerText = compScore;
        msg.innerText="You Lose";
        msg.style.backgroundColor = "Red";
    }
}

const getCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    let idx = Math.floor(Math.random() * 3);
    return options[idx];
}

const playGame = (userChoice) =>{
    let compChoice = getCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            compChoice==="paper"?userWin=false:userWin=true;
        }else if(userChoice==="paper"){
            compChoice==="scissor"?userWin=false:userWin=true;
        }else{
            compChoice==="rock"?userWin=false:userWin=true;
        }
        showResult(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener(("click"),()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})