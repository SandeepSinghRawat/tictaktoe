// import { useState } from "react"; 

function Log(props) {
  // const [log, setLog] = useState([]);
  const logData =  props.log.map((data) => {
    return <li>{data.value}</li>;
  });
  return (
    <ol id="log">
      {logData}    
    </ol>
  );
}

export default Log;