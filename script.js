import { getComputerChoice } from "./functions/getComputerChoice.js";
import { choices, playerScore, computerScore, rockImage, rockAlt, paperImage, paperAlt, scissorsImage, scissorsAlt } from "./constants/constants.js";

let playerScoreCount = 0;
let computerScoreCount = 0;

const play = (event) => {
  const playerChoice = event.target.id;
  const computerChoice = getComputerChoice();

  if(playerChoice === undefined || computerChoice === undefined) return alert("Ha ocurrido un error, por favor inténtelo nuevamente.")

  const containerPlayerChoice = document.querySelector(".final-choice-player");
  const containerComputerChoice = document.querySelector(".final-choice-computer");
  const choiceElementImagePlayer = document.querySelector(".final-choice-player-img");
  const choiceElementTextPlayer = document.querySelector(".final-choice-player-text");
  const choiceElementImageComputer = document.querySelector(".final-choice-computer-img");
  const choiceElementTextComputer = document.querySelector(".final-choice-computer-text");

  const separator = document.querySelector(".choices-separator");

  const winner = document.querySelector(".game-result");

  const selectOption = document.querySelector(".select-option-text");
  const selectOptionContent = selectOption.textContent;

  if (playerChoice === "rock") {
    choiceElementImagePlayer.src = rockImage;
    choiceElementImagePlayer.alt = rockAlt;
    choiceElementTextPlayer.textContent = "Piedra";
    containerPlayerChoice.style.display = "block";
  } else if (playerChoice === "paper") {
    choiceElementImagePlayer.src = paperImage;
    choiceElementImagePlayer.alt = paperAlt;
    choiceElementTextPlayer.textContent = "Papel";
    containerPlayerChoice.style.display = "block";
  } else {
    choiceElementImagePlayer.src = scissorsImage;
    choiceElementImagePlayer.alt = scissorsAlt;
    choiceElementTextPlayer.textContent = "Tijeras";
    containerPlayerChoice.style.display = "block";
  }

  if (computerChoice === "rock") {
    choiceElementImageComputer.src = rockImage;
    choiceElementImageComputer.alt = rockAlt;
    choiceElementTextComputer.textContent = "Piedra";
    containerComputerChoice.style.display = "block";
  } else if (computerChoice === "paper") {
    choiceElementImageComputer.src = paperImage;
    choiceElementImageComputer.alt = paperAlt;
    choiceElementTextComputer.textContent = "Papel";
    containerComputerChoice.style.display = "block";
  } else {
    choiceElementImageComputer.src = scissorsImage;
    choiceElementImageComputer.alt = scissorsAlt;
    choiceElementTextComputer.textContent = "Tijeras";
    containerComputerChoice.style.display = "block";
  }

  switch (`${playerChoice}${computerChoice}`) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      playerScoreCount++;
      playerScore.textContent = playerScoreCount;
      winner.textContent = "Ganaste";
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      computerScoreCount++;
      computerScore.textContent = computerScoreCount;
      winner.textContent = "Perdiste";
      break;
    case "rockrock":
      winner.textContent = "Empate";
    case "paperpaper":
      winner.textContent = "Empate";
    case "scissorsscissors":
      winner.textContent = "Empate";
      break;
    default:
      alert("Ha ocurrido un error, por favor inténtelo nuevamente.");
      break;
  }

  selectOption.style.display = "none";

  setTimeout(() => {
    containerPlayerChoice.style.display = "none";
    containerComputerChoice.style.display = "none";
    selectOption.textContent = selectOptionContent;
    separator.style.width = 0;
    winner.style.display = "block";

    setTimeout(() => {
      separator.style.width = "1px";
      winner.style.display = "none";
      selectOption.style.display = "block";
    }, 1000);
  }, 1000);
};

choices.forEach((choice) => choice.addEventListener("click", play));
