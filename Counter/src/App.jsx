import { useState, useEffect } from "react"
function Counter() {
  const [count, setCount] = useState(0);
  const [pcount, setPcount] = useState(0);
  const [ncount, setNcount] = useState(0);
  const [message, setMessage] = useState('');
  const handlePClick = () => {
    setPcount(pcount + 1);
    console.log(`Positive clicked`);
  }
  const handleNClick = () => {
    if (ncount > 0) {
      setNcount(ncount - 1);
    } else {
      setMessage("count can't go below 0");
    }
  }
  setTimeout(() => {
    setCount(count + 1);
  }, 1000);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [count]);
      return (
        <>
          <p>This is the normal count.</p>
      <div>
        {count}
      </div>
      <p>This is the negative count.</p>
      <div>
        {pcount}
      </div>
      <button onClick={handlePClick}>
        PositiveButton
      </button>
      <p>This is the positive count.</p>
      <div>
        {ncount}
      </div>
      <button onClick={handleNClick}>
        NegativeButton
      </button>
      <div>
        Message here: {message}.
      </div>
    </>
  )
}

function App() {

  return (
    <Counter />
  )
}

export default App
