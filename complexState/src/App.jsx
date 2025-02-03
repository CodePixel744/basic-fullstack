import { useState } from "react"


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
      <button onClick={handleLeftClick}>LEFT</button>
      {clicks.right}
      <button onClick={handleRightClick}>RIGHT</button>
      <div>
        {allClicks.map((click, index) => (
          <span key={index}>{click}</span>
        ))}
      </div>
      <p>
        Total count is {total}.
      </p>
    </div>
  )
}

export default App
