export default class GameView {
    constructor() {
        console.log("inti GameView");
    }

    updateBoard(game) {
        this.updateTurn(game);

        const winningCommination = game.findWinningCominations();

        for(let i = 0; i <game.board.length ; i++) {
            const tile = document.querySelector(`.board-tile[data-index='${i}']`);
            tile.textContent = game.board[i];
            
            tile.classList.remove("tile-winner");

            let tileType = game.board[i] =="X" ? "tile-x" : "tile-o";

            tile.innerHTML = `<span class="${tileType}">${game.board[i] ? game.board[i] : ""}</span>`
        
            if(winningCommination && winningCommination.includes(i)) {
                // tile.classList.add("tile-winner");
                const right = document.querySelector(".right");
                const winningImg = document.querySelector(".winning-img");
                const winnerType = document.querySelector(".winner-type");
                right.classList.add("hidden");
                winningImg.classList.remove("hidden");
                winnerType.innerHTML = `Congratulations Player-${game.turn === "X" ? "O" : "X"}`;
                document.querySelector("#winnerType").classList.remove("hidden");
            }
        
        }
    }

    updateTurn(game) {
        let playerX = document.querySelector(".player-X");
        let playerO = document.querySelector(".player-O");
        playerX.classList.remove("active");
        playerO.classList.remove("active");



        if(game.turn==='X') {
            playerX.classList.add("active");
        } else {
            playerO.classList.add("active");
        }

    }
}