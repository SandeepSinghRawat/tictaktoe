import './App.css';
import GameBoard from './Components/GameBoard';
import Player from './Components/Player';

function App() {
  return (
    <main>
      <div id='game-container'>
        <ol id="players">
          <Player name="Player1" symbol="X" />
          <Player name="Player2" symbol="O"/>
        </ol>
        <GameBoard />
      </div>
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
