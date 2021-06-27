import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();
let tiles = document.querySelectorAll(".board-tile");
let toggleBtn = document.querySelector(".toggle-btn");

const title = document.getElementById("title");
const restart = document.getElementById("restart");

document.querySelector(".restart").addEventListener("click", () => {
    onRestartClick();
})


toggleBtn.addEventListener("click", () => {
  console.log("clicked");
  let currentMode = toggleBtn.classList.contains("toggled") 
    ? enableLightMode()
    : enableDarkMode();
  console.log(currentMode);
})


const enableLightMode = () => {
  title.classList.remove("light-title-color");
  restart.classList.remove("light-restart-button")
  toggleBtn.classList.remove("toggled");
  document.body.style.backgroundColor = "#fff";
}

const enableDarkMode = () => {
  toggleBtn.classList.add("toggled");
  document.body.style.backgroundColor = "#121212";
  title.classList.add("light-title-color");
  restart.classList.add("light-restart-button")
  document.querySelector(".winning-img").style.backgroundColor = "#fff";
  document.querySelector(".winning-img").style.backgroundColor = "#fff";
  document.querySelector(".winnier-type").style.backgroundColor = "#fff";

}


tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    onTileClick(tile.dataset.index);
  });
})


function onTileClick(i) {
    game.makeMove(i);
    gameView.updateBoard(game);
}

function onRestartClick(){
    game = new Game();
    reset();
    gameView.updateBoard(game);
}

function reset() {
  document.querySelector(".right").classList.remove("hidden");
  document.querySelector(".winning-img").classList.add("hidden");
  document.querySelector("#winnerType").classList.add("hidden");
  // document.querySelector(".winnerType").classList
  // winnerType.innerHTML = `Congratulations Player-${game.turn}`;
}