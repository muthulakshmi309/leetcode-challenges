
/************* SNAKE and LADDER *************/
class Player {
    name: string;
    position: number = 0;
  }
  class Dice {
      faceValue: number;
    roll() {
      return Math.floor(Math.random() * 6) + 1;
    }
  }
  class Board {}
  
  class Game {
    //will create instance of player, board and dice
    render() {}
    d = new Dice();
    //Rotate dice and when its 1 start game of that player if position is 0
    
    //Player 1 - call rotate and move position of player 1
    
    let diceValue = d.roll();
    
  }
  
  class Move {
      getUpdatedPosition() {
          //call validatePosition and verify and return the new position
      }
      //if position is same as start of snake/ladder then return true.
      validatePosition(pos) {
  
      }
  }
  
  const FaceValue = [1,2,3,4,5,6];
  
  enum Coins {
      Snake = 1,
      Ladder,
    }
  
  //If snake and ladder are dynamic then create these 2 classes
  class Snake {
      start;
      end;
  }
  
  class Ladder {}
  
  const Position = {
    //start and end position of snake and ladder
    [Coins.Snake]: [
      [25, 3],
      [41, 9],
      [91, 20],
      [97, 35],
    ],
    [Coins.Ladder]: [
      [6, 21],
      [11, 30],
      [18, 45],
    ],
  };
  