function Player(props) {
  
  return (
    <li>
      <span className="player">
        <span className="player-name">{props.name ? props.name : "Player 1"}</span>
        <span className= "player-symbol">{props.symbol ? props.symbol : "X"}</span>
      </span>
      <button>{props.name ? "Edit" : "Save"}</button>
    </li>)
};
export default Player;