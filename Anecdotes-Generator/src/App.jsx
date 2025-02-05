import { useState } from 'react'
import './App.css'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const length = anecdotes.length;
  const randomNumber = Math.floor(Math.random() * length);
  console.log(randomNumber);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const generateRandom = () => {
    setSelected(randomNumber);
  }
  const copy = [...votes];
  const voteAdder = (index) => {
    const newVotes = [...votes];
    newVotes[index]++;
    setVotes(newVotes);
  }
  function viewCopy(copy) {
    console.log(copy);
  }
  const maxOfAll = (copy) => {
    let maxi = copy[0];
    for (let i = 0; i < copy.length; ++i) {
      maxi = Math.max(maxi, copy[i]);
    }
    console.log(`the value of maxi is ${maxi}.`);
    return maxi;
  }
  const gettingIndex = (val) => {
    console.log(`the value of index is ${copy.indexOf(val)}.`);
    return copy.indexOf(val);
  }
  /**useEffects are used when doing api calls,setSelected things and dom manipulation. */
  return (
    <>
      <div className="wrapper">
        <h2>ANECDOTE GENERATOR</h2>
        <div>
          {anecdotes[selected]}
        </div>
        <button onClick={generateRandom} className='first'>NEXT ANECDOTE</button>
        <button onClick={() => voteAdder(selected)} className='second'>VOTE</button>
        <div className='list'>
          {
            copy.map((elem, index) => {
              return <ul key={index}>{elem}</ul>
            })
          }
        </div>
        <button onClick={() => viewCopy(copy)} className='third'>view copy vector</button>
        <div className='fourth'>
          MOST VOTED: {anecdotes[gettingIndex(maxOfAll(copy))]}
        </div>
      </div>
    </>
  )
}

export default App