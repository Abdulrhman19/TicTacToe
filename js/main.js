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
  toggleBtn.classList.contains("toggled") 
    ? enableLightMode()
    : enableDarkMode();

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
    gameView.updateBoard(game);
}
