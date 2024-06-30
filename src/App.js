import { useState } from 'react';
import './App.css';
import GameBoard from './Components/GameBoard';
import Player from './Components/Player';
import Log from './Components/Log';

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  // function handleTurns(turnData) {
  //   setGameTurns((prev)=> {
  //     return [...prev, turnData];
  //   });
  // }
  function hadleActivePlayer(row, col) {
    setGameTurns((prev)=> {
      return [...prev, {player: activePlayer, row, col}];
    })
    setActivePlayer((prev)=> prev === "X" ? "O" : "X");
  }
  return (
    <main>
      <div id='game-container'>
        <ol id="players" className='highlight-player'>
          <Player name="Player1" symbol="X" isActive={activePlayer==="X"}/>
          <Player name="Player2" symbol="O" isActive={activePlayer==="O"}/>
        </ol>
        <GameBoard handleSquare={hadleActivePlayer}  activePlayerSymbol={activePlayer}/>
      </div>
        <Log log={gameTurns} />
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
