/************ CHESS BOARD ************/
class Player {
  //There can be player type as well human or computer
  playerName: string;
}

class Game {
  //It will initialize board and player
}

class Cell {
  x: number;
  y: number;
  piece: Piece;
  constructor(x, y, piece) {}
}
class ChessBoard {
  dimension = BOARD_DIMENSION;
  create() {}
  reset() {}
}

class PieceGenerator {
  //Based on data type it will create piece
  constructor(data) {}
}

class Bishop implements Piece {
  // direction;
  render() {}
  isValidMove() {}
}

class King implements Piece {}

abstract class Piece {
  // direction;
  white: boolean;
  render: () => void;
  isValidMove: (x, y) => void;
  isWhite: () => boolean;
  isKilled: () => boolean;
  canMove: () => boolean;
  canOccupyCell: () => boolean;
}

const BOARD_DIMENSION = [8, 8];
enum typeOfPieces {
  "bishop", //2 - mandiri
  "king", //1
  "queen", //1
  "rook", //2 - elephant
  "knight", //2 - horse
  "pawn", //8
}
