
import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  }
  const decrement = () => {
    setCounter(counter - 1);
  }
  return (
    <>
      <div className="wrapper">
        <div className="counter">{counter}</div>
        <button onClick={increment}>INCREMENT</button>
        <button onClick={decrement}>DECREMENT</button>
      </div>
    </>
  )
}

export default App
