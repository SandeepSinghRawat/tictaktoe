import { useState } from "react";

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

export default function GameBoard(props) {
  debugger
  const [gameBoard, setGameBoard] = useState(initialGameboard);
  function handleSelectedSquare(rowIndex, colIndex) {
    console.log("row, col", rowIndex, colIndex);
    setGameBoard((prevGameboard) => {
      const updateGameboard = [...prevGameboard.map(innerArray => [...innerArray])];
      updateGameboard[rowIndex][colIndex] = "X";
      return updateGameboard;
    }
    );
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