import { useState } from "react"

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the button.
      </div>
    )
  }
  return (
    <div>
      button press history: {
        props.allClicks.map((clicks, index) => {
          <span>{clicks}</span>
        })
      }
    </div>
  )
}


const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
}

const ResetButton = ({ setTotal, setAllClicks, setClicks }) => {
  const handleReset = () => {
    setTotal(0);
    setAllClicks([]);
    setClicks({ left: 0, right: 0 });
  }
  return (
    <button onClick={handleReset}>RESET</button>
  )
}

function App() {
  const [clicks, setClicks] = useState({ left: 0, right: 0 });
  const [allClicks, setAllClicks] = useState([]);
  const [total, setTotal] = useState(0);
  const handleLeftClick = () => {
    const newClicks = { ...clicks, left: clicks.left + 1 };
    const updatedLeft = clicks.left + 1;
    setClicks(newClicks);
    /**use .concat instead of .push in React */
    setAllClicks(allClicks.concat('L'));
    setTotal(updatedLeft + clicks.right);
  }
  const handleRightClick = () => {
    const newClicks = { ...clicks, right: clicks.right + 1 };
    const updatedRight = clicks.right + 1;
    setClicks(newClicks);
    setAllClicks(allClicks.concat('R'));
    /*because state updates are taking asynchronously. */
    /**so we used the updated state using new variable. */
    setTotal(clicks.left + updatedRight);
  }
  return (
    <div>
      {clicks.left}
      <Button onClick={handleLeftClick} text='LEFT' />
      {clicks.right}
      <Button onClick={handleRightClick} text='RIGHT' />
      <div>
        {allClicks.map((click, index) => (
          <span key={index}>{click}</span>
        ))}
      </div>
      <History allClicks={allClicks} />
      <p>
      <ResetButton setTotal={setTotal} setAllClicks={setAllClicks} setClicks={setClicks} />
      </p>
    </div>
  )
}

export default App
