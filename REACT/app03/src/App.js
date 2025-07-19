import { useState } from "react";
import Morning from "./Morning";
import Night from "./Night";
import Login from "./Login";
import ApiEX from "./ApiEX";
// import Card from "./Card"; // not needed directly
// import SCard from "./SCard"; // not needed directly

const App = () => {
  const [time, setTime] = useState(0);

  const handleTime = (e) => {
    setTime(Number(e.target.value)); // convert to number
  };

  return (
    <>
      {/* <Login /> */}
      <ApiEX />

      {/* Time-based conditional rendering */}
      {/* 
      <input type="text" placeholder="Enter time" onChange={handleTime} />
      {time === 0 ? " " : time <= 12 ? <Morning /> : <Night />} 
      */}
    </>
  );
};

export default App;
