import CNotes from './CNotes';
import { useState, useEffect } from 'react';
import axios from 'axios';
/* eslint-disable react/prop-types */
import './Render.css';

const Render = ({ notes }) => {
    const [noteList, setNotes] = useState(notes);
    const [newNote, setNewNote] = useState("a new note ");
    const [showAll, setShowAll] = useState(true);

    useEffect(() => {
        setNotes(notes);
    }, [notes]);

    const handleNoteChange = (event) => {
        setNewNote(event.target.value);
    };

    const notesToShow = showAll ? noteList : noteList.filter(note => note.important);

    const toggleShowImportant = () => {
        setShowAll(!showAll);
    };

    const toggleIndividual = (id) => {
        const updatedNotes = noteList.map(note => note.id === id ? { ...note, important: !note.important } : note);
        setNotes(updatedNotes);
    }

    const addNote = (event) => {
        event.preventDefault();
        const noteObject = {
            id: Date.now().toString(),
            /*id depends on the length of array at that instant  */
            content: newNote,
            important: false
        }
        const promise = axios.post(`http://localhost:3001/notes`, noteObject)
        promise.then(response => {
            console.log(response);
            /**when we get something from the post we should update the state at the frontend. */
            setNotes(noteList.concat(response.data));
            setNewNote("");
        })
        promise.catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="render-wrapper">
            <div className="heading">
            <h1>NOTES</h1>
            </div>
            <button onClick={toggleShowImportant}>
                show {showAll ? 'important' : 'all'}
            </button>
            {notesToShow.map((elem) => (
                <CNotes key={elem.id} noteObject={elem} setImportance={() => toggleIndividual(elem.id)} />
            ))}
            <form onSubmit={addNote}>
                <input type="text" value={newNote} onChange={handleNoteChange} />
                <button type="submit" className='submitter'>SAVE</button>
            </form>
        </div>
    );
};

export default Render;