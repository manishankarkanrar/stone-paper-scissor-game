let uscore = 0;
let cscore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let uDisplay = document.querySelector(".uDisplay");
let cDisplay = document.querySelector(".cDisplay");
let reset = document.querySelector(".reset");

function resetFun() {
  uscore = 0;
  cscore = 0;
  uDisplay.innerText = uscore;
  cDisplay.innerText = cscore;
  msg.innerText = "Play your move...";
  msg.style.backgroundColor = "#0d2b4d";
}

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  const randIdx = array[0] % 3;
  return options[randIdx];
};

function showWinner(userWin, uChoose, cChoose) {
  if (userWin) {
    uscore++;
    uDisplay.innerText = uscore;
    msg.innerText = `You win!!, You : ${uChoose.toUpperCase()} & Computer : ${cChoose.toUpperCase()}`;
    msg.style.backgroundColor = "green";
  } else {
    cscore++;
    cDisplay.innerText = cscore;
    msg.innerText = `You Lose!!, You : ${uChoose.toUpperCase()} & Computer : ${cChoose.toUpperCase()}`;
    msg.style.backgroundColor = "red";
  }
}

function playWithComputer(uChoose) {
  let cChoose = genCompChoice();
  let userWin = true;
  if (uChoose == cChoose) {
    msg.innerText = `Game was Draw. Play again. Both : ${uChoose.toUpperCase()}`;
    msg.style.backgroundColor = "#081b31";
  } else {
    if (uChoose === "rock") {
      userWin = cChoose === "paper" ? false : true;
    } else if (uChoose === "paper") {
      userWin = cChoose === "scissor" ? false : true;
    } else {
      userWin = cChoose === "rock" ? false : true;
    }
    showWinner(userWin, uChoose, cChoose);
  }
}

reset.addEventListener("click", resetFun);

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    playWithComputer(choice.getAttribute("id"));
  });
});
