class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = "x";
        this.grid = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.grid[rowIndex][columnIndex] && (this.currentPlayerSymbol == "x" || this.currentPlayerSymbol == "o")) {
            this.grid[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.currentPlayerSymbol = (this.currentPlayerSymbol == "x") ? "o" : "x";
        }
    }

    isFinished() {
        if (this.getWinner() || this.isDraw()) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        let g = this.grid;
        let x = "x";
        let o = "o";

        if (
            (g[0][0] == x && g[0][1] == x && g[0][2] == x) ||
            (g[1][0] == x && g[1][1] == x && g[1][2] == x) ||
            (g[2][0] == x && g[2][1] == x && g[2][2] == x) ||
            (g[0][0] == x && g[1][1] == x && g[2][2] == x) ||
            (g[0][0] == x && g[1][0] == x && g[2][0] == x) ||
            (g[0][1] == x && g[1][1] == x && g[2][1] == x) ||
            (g[0][2] == x && g[1][2] == x && g[2][2] == x) ||
            (g[2][0] == x && g[1][1] == x && g[0][2] == x)
        ) {
            return x;
        } 
        if (
            (g[0][0] == o && g[0][1] == o && g[0][2] == o) ||
            (g[1][0] == o && g[1][1] == o && g[1][2] == o) ||
            (g[2][0] == o && g[2][1] == o && g[2][2] == o) ||
            (g[0][0] == o && g[1][1] == o && g[2][2] == o) ||
            (g[0][0] == o && g[1][0] == o && g[2][0] == o) ||
            (g[0][1] == o && g[1][1] == o && g[2][1] == o) ||
            (g[0][2] == o && g[1][2] == o && g[2][2] == o) ||
            (g[2][0] == o && g[1][1] == o && g[0][2] == o)
        ) {
            return o;
        }
        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid.length; j++) {
                if (!this.grid[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if (!this.getWinner() && this.noMoreTurns()) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        if (!this.grid[rowIndex][colIndex]) {
            return null
        }  else {
            return this.grid[rowIndex][colIndex];
        }
         
    }
}

module.exports = TicTacToe;
