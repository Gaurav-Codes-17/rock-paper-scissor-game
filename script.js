let choices = document.querySelectorAll(".choice");
let compScorePara = document.querySelector("#compScore");

let userScorePara = document.querySelector("#userScore");
let msg = document.querySelector("#msg");
userScore = 0;
compScore = 0;

// draw game fnc
let drawGame = () => {
  console.log("game is drawn");
  msg.style.backgroundColor = "#011638";
};

// this fnc shows the winner
let showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `you win! . your ${userChoice} beats computer's ${compChoice}`;
    msg.style.backgroundColor="green";
  } else {
    console.log("you lose!");
    compScore++;
    compScorePara.innerText = compScore;
     msg.innerText = `you lose!. computer's ${compChoice} beats your ${userChoice}`;
     msg.style.backgroundColor="red";
    //  alert(` you lose! computer chooses ${compChoice}`);
   
  }
};

// userchoice is made in this fnc
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

// compchoice is made in this fnc
let genCompChoice = () => {
  let options = ["rock", "paper", "scissor"];
  let randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

// play game fnc
const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  const compChoice = genCompChoice();
  console.log("computer choice is =", compChoice);

  if (userChoice === compChoice) {
    //game is drawn
    drawGame();
    msg.innerText = "game is draw";
  } else {
    let userWin = "true";
    if (userChoice === "rock") {
      //scissor paper
      userWin = compChoice === "scissor" ? true : false;
    } else if (userChoice === "paper") {
      //scissor rock
      userWin = compChoice === "scissor" ? false : true;
    } else {
      //rock paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin , userChoice ,compChoice);
  }
};
