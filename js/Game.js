export default class Game {
  constructor() {
    console.log("init game");
    this.turn = "X";
    this.board = new Array(9).fill(null);
  }

  nextTurn() {
    this.turn === "X" ? (this.turn = "O") : (this.turn = "X");
  }

  makeMove(i) {

    if(this.endOfGame()) {
        return;
    }

    if (this.board[i]) {
      return;
    }
    this.board[i] = this.turn;
    this.nextTurn();

}

  findWinningCominations() {
    const winningComminations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for(const comination of winningComminations) {
        const [a, b, c] = comination;
        if( this.board[a] &&
            (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
                return comination;
        }
    }
    return null;
  }


  endOfGame() {
    let winningCommination = this.findWinningCominations();
    if(winningCommination) {
        return true;
    } else {
        return false;
    }
}
}
