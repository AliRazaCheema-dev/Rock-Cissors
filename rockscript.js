let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
let msg= document.querySelector("#msg");
let msgContainer= document.querySelector(".msg-container");
let myScore=document.querySelector("#user-score");
let cpScore=document.querySelector("#comp-score");



let draw= ()=>{
    msg.innerText="Draw";
    msg.style.background="#081b31";
}

let showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        msg.innerText= `You Win! your ${userChoice} beats ${compChoice} `;
        myScore.innerText=userScore;
        msg.style.background="green";
    }else{
        compScore++;
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
        cpScore.innerText=compScore;
        msg.style.background="red";
    }
}

const playGame=(userChoice)=>{
    const compChoice=genCompChoices();
    if (userChoice===compChoice){
        draw();
    } 
    else{
        let userWin=true;
        if(userChoice === "rock")
        { 
            userWin= compChoice === "paper" ? false :true;
        } else if (userChoice === "paper"){
            userWin=compChoice === "scissors" ? false: true;
        }
        else if(userChoice === "scissors"){
            userWin=compChoice === "rock" ? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
const genCompChoices=(userChoice)=>{
          let options=["rock", "scissors", "paper"]
          let randIdx=Math.floor(Math.random() * 3);
          return options[randIdx];
}

choices.forEach(
    (choice)=>{
        console.log(choice);
        choice.addEventListener("click", ()=>{
            const userChoice=choice.getAttribute("id");
            playGame(userChoice);
           
        })
    }
)