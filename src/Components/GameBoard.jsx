// import { useState } from "react";



export default function GameBoard({handleSquare, board}) {

  // const gameBoard = initialGameboard;
  // for(let turn of turns) {
  //   const {square, player} = turn;
  //   const {row, col} = square;
  //   console.log("row column", row, col);
  //   gameBoard[row][col] = player;
  // }

  // const [gameBoard, setGameBoard] = useState(initialGameboard);
  // function handleSelectedSquare(rowIndex, colIndex) {
  //   console.log("row, col", rowIndex, colIndex);
  //   setGameBoard((prevGameboard) => {
  //     const updateGameboard = [...prevGameboard.map(innerArray => [...innerArray])];
  //     updateGameboard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updateGameboard;
  //   });
  //   handleSquare();
  // }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, colIndex)=> <li key={colIndex}>
            <button onClick={()=> {handleSquare(rowIndex, colIndex)}} disabled={playerSymbol!==null}>{playerSymbol}</button>
          </li>)}
        </ol>
      </li>)}
    </ol>
  );
};