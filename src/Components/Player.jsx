import { useState } from "react";

function Player(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");

  function handleEditing() {
    setIsEditing((prev) => !prev);
  }
  function handleChange(event) {
    // setIsEditing(true);
    setName((name)=> event.target.value);
  }
  let show;
  if(isEditing) {
    show = <input className="player-name" type="text" placeholder="Enter Name" value={name} onChange={handleChange} />;
  } else {
    show = <span className="player-name">{name ? name : props.name}</span>;
  }

  return (
    <li>
      <span className="player">
        {show}
        <span className= "player-symbol">{props.symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  ) 
  
};
export default Player;

// const[name, setName] = useState("");
  // const [isEditing, setIsEditing] = useState(false);
  // function handleEditing(event) {
  //   setIsEditing((prevEditing) => !prevEditing);
  // };
  // function handleChange(event) {
  //   setName(event.target.value);
  //   // setIsEditing(true);
  // }
  // let show;
  // if (!isEditing) {
  //   show = <span className="player-name">{name ? name : "Player 1"}</span>;
  // } else {
  //   show = <input className="player-name" type="text" placeholder="Enter Name" value={name} onChange={handleChange}/>;
  // }
  
  // return (
  //   <li>
  //     <span className="player">
  //       {show}
  //       <span className= "player-symbol">{props.symbol ? props.symbol : "X"}</span>
  //     </span>
  //     <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
  //   </li>)