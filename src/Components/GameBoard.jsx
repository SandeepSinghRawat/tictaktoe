import { useState } from "react";

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

export default function GameBoard({handleSquare, activePlayerSymbol}) {

  const [gameBoard, setGameBoard] = useState(initialGameboard);
  function handleSelectedSquare(rowIndex, colIndex) {
    console.log("row, col", rowIndex, colIndex);
    setGameBoard((prevGameboard) => {
      const updateGameboard = [...prevGameboard.map(innerArray => [...innerArray])];
      updateGameboard[rowIndex][colIndex] = activePlayerSymbol;
      return updateGameboard;
    });
    handleSquare(rowIndex, colIndex);
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, colIndex)=> <li key={colIndex}>
            <button onClick={() => handleSelectedSquare(rowIndex, colIndex)}>{playerSymbol}</button>
          </li>)}
        </ol>
      </li>)}
    </ol>
  );
};