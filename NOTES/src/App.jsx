import Render from './Render';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const promise1 = axios.get(`http://localhost:3001/notes`);
    console.log(promise1);
    promise1.then(response => console.log(response));
    promise1.then(response => {
      const notesfromResponse = response.data;
      console.log(notesfromResponse);
      setNotes(notesfromResponse);
    })
  }, [])
  return (
    <Render notes={notes} />
  )
}

export default App
