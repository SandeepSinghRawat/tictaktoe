// import { useState } from "react"; 

function Log(props) {
  // const [log, setLog] = useState([]);
  const logData =  props.logs.map((log) => {
    return <li key={`${log.square.row}${log.square.col}`}>{log.player} selected {log.square.row}, {log.square.col}</li>;
  });
  return (
    <ol id="log">
      {logData}    
    </ol>
  );
}

export default Log;