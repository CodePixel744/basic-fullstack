import { useState } from 'react'
import './App.css'

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [gaverage, setgAverage] = useState(0.0);
  const [baverage, setbAverage] = useState(0.0);
  const [naverage, setnAverage] = useState(0.0);
  const gClick = () => {
    setGood(good + 1);
    setTotal(total + 1);
    console.log(`The value of good is ${good}.`);
    const ngood = good + 1;
    const ntotal = total + 1;
    console.log(`The value of ntotal is ${ntotal}.`);
    console.log(`The value of ngood is ${ngood}.`);
    console.log(`The value of total is ${total}.`);
    console.log(`The value in gClick is ${good / total}.`);
    setgAverage(ngood / 3);
  }
  const nClick = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
    const nneutral = neutral + 1;
    const ntotal = total + 1;
    console.log(`The value in gClick is ${neutral / total}`);
    setbAverage(nneutral / 3);
  }
  const bClick = () => {
    setBad(bad + 1);
    setTotal(total + 1);
    const nbad = bad + 1;
    const ntotal = total + 1;
    console.log(`The value in gClick is ${bad / total}`);
    setnAverage(nbad / 3);
  }
  return (
    <div className="wrapper">
      <div className="buttons">
        <button onClick={gClick}>GOOD</button>
        <button onClick={nClick}>NEUTRAL</button>
        <button onClick={bClick}>BAD</button>
      </div>

      <div className="spans">
        <div>The value of good is: {good}</div>
        <div>The value of neutral is:{neutral}</div>
        <div>The value of bad is:{bad}</div>
      </div>
      <div>
        The value of total is {total}.
      </div>
      <div className="averages">
        The value of good average is {gaverage}.
        The value of bad average is {baverage}.
        The value of neutral average is {naverage}.
      </div>
    </div>
  )
}

export default App
