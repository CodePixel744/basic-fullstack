import { useState } from "react"


function App() {
  const [clicks, setClicks] = useState({ left: 0, right: 0 });
  const handleLeftClick = () => {
    const newClicks = { left: clicks.left + 1, right: clicks.right };
    setClicks(newClicks);
  }
  const handleRightClick = () => {
    const newClicks = { left: clicks.left, right: clicks.right + 1 };
    setClicks(newClicks);
  }
  return (
    <div>
      {clicks.left}
      <button onClick={() => handleLeftClick()}>LEFT</button>
      {clicks.right}
      <button onClick={() => handleRightClick()}>RIGHT</button>
    </div>
  )
}

export default App
