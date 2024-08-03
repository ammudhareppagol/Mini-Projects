let userScore=0;
let computerScore=0;

const choices = document.querySelectorAll(".choice");
const uScore = document.querySelector("#user");
const cScore = document.querySelector("#comp");

const computerPlay = () => {
    const options =["rock", "paper", "scissors"];
   const choiceIdx = Math.floor(Math.random()*3);
   return options[choiceIdx];
}
const showWinner = (userWin, userC, computerC) =>{
    if(userWin){
        userScore++;
        uScore.innerText = userScore;
        msg.innerText = `You win! ${userC} beats ${computerC}`;
        msg.style.backgroundColor = "green";
    }
    else{
        computerScore++;
        cScore.innerText = computerScore;
        msg.innerText = `You lost! ${computerC} beats ${userC}`;
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () => {
    msg.innerText= "it's a draw!. let's play again";
    msg.style.backgroundColor = "darkblue";

}
const userPlay = (userC) => {
     const computerC = computerPlay();
     if(userC === computerC){
        drawGame();
     }
     else{
        let userWin = true;
        if(userC === "rock" && computerC==="paper"){
            userWin = false;
        }
        else if(userC === "paper" && computerC==="scissors"){
            userWin = false;
        }
        else if(userC === "scissors" && computerC==="rock"){
            userWin = false;
        }
        showWinner(userWin, userC, computerC);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userC = choice.getAttribute("id");
        userPlay(userC);
    })
})