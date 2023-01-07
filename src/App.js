import { useState } from "react";
import Taufik from "./Taufik";
function App() {
  let [frist, setfrist] = useState(0);
  let [color, setcolor] = useState();
  let HandleClick = (e) => {
    setfrist(frist + 1);
    console.log(frist);
  };

  return (
    <>
      <h1 style={h1}>{frist}</h1>
      <button style={btn} onClick={HandleClick}>
        Click me
      </button>

      {/* no9thing fancy  */}
      <Taufik />
    </>
  );
}
let h1 = {
  fontSize: "100px",
  textAlign: "center",
  marginTop: "20px",
};
let btn = {
  marginLeft: "920px",
};
export default App;
