class Player {
  name: string;
  symbol: string;
  winner: boolean;
  getSymbol() {}
}

class Game {
    //Create 2 player and set X to first player.
    getPlayer() {}
    getWinner() {}
}

class Board {
    //We can take input from user
  DIMENSION = [3, 3];
  create() {}
//   //Set X or O to player
//   setCoinToPlayer() {}
  reset() {}
  
}

//Move or cell
class Move {
    x: number;
    y: number;
    insertedX: boolean;
    move(x, y) {
        //First insert X and then after that 
        this.insertedX = !this.insertedX;
    }
    clear() {}
}

//Scoring or AI
class Scoring {
    //should maintain values of all cells
    //Validate diagonally, vertically and horizon
    validate(x,y) {}
    isGameOver() {}
    isDraw() {}
}

enum CoinTypes {
  X,
  O,
}
