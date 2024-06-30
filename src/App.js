import { useState } from 'react';
import './App.css';
import GameBoard from './Components/GameBoard';
import Player from './Components/Player';
import Log from './Components/Log';
import { WINNING_COMBINATIONS } from './Components/WinningCombinations';
import { GameOver } from './Components/GameOver';

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function derivedState(data) {
  let currentPlayer = "X";
  if (data.length>0 && data[0].player==="X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  // const [isWinner, setIsWinner] = useState(false);
  let activePlayer = derivedState(gameTurns);
  const gameBoard = [...initialGameboard.map((innerArray)=> [...innerArray])];
  for(let turn of gameTurns) {
    const {square, player} = turn;
    const {row, col} = square;
    console.log("row column", row, col);
    gameBoard[row][col] = player;
  }
  for (let data of gameBoard) {
    for (let childData of data) {
      console.log("data:", childData);
    }
  }
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
    console.log("symbols", firstSquareSymbol, secondSquareSymbol, thirdSquareSymbol);
    if (firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol){
      console.log("winner");
      winner = firstSquareSymbol;
    }
  }
  const hasDraw = gameTurns.length===9 && !winner;
  // function handleTurns(turnData) {
  //   setGameTurns((prev)=> {
  //     return [...prev, turnData];
  //   });
  // }
  function hadleActivePlayer(rowIndex, colIndex) {
    // setActivePlayer((prev)=> prev === "X" ? "O" : "X");
    setGameTurns((prev)=> {
      // let currentPlayer = "X";              //this is where symbol checks are made and doesn't let change the already added symbol.
      // if (prev.length>0 && prev[0].player === "X") {
      //   currentPlayer = "O"
      // }
      let currentPlayer = derivedState(prev);
      return [{square : {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prev];
    });
  }
  function handleRestart() {
    setGameTurns([])
  }
  return (
    <main>
      <div id='game-container'>
        <ol id="players" className='highlight-player'>
          <Player name="Player1" symbol="X" isActive={activePlayer==="X"}/>
          <Player name="Player2" symbol="O" isActive={activePlayer==="O"}/>
        </ol>
        {(winner||hasDraw) && <GameOver onRestart={handleRestart} winner={winner} />}
        <GameBoard handleSquare={hadleActivePlayer}  board={gameBoard}/>
      </div>
        <Log logs={gameTurns} />
    </main>

    /* <main>
       <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>

      </div>
    </main> */
  );
}

export default App;
