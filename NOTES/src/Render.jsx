import CNotes from './CNotes';
import { useState, useEffect } from 'react';
/* eslint-disable react/prop-types */
import './Render.css';

const Render = ({ notes }) => {
    const [noteList, setNotes] = useState(notes);
    const [newNote, setNewNote] = useState("a new note ");
    const [showAll, setShowAll] = useState(true);

    useEffect(() => {
        setNotes(notes);
    }, [notes]);

    const addNote = (event) => {
        event.preventDefault();
        if (newNote.trim() === '') return;

        const noteObject = {
            content: newNote,
            important: Math.random() < 0.5,
            id: String(noteList.length + 1)
        };
        setNotes(noteList.concat(noteObject));
        setNewNote('');
    };

    const handleNoteChange = (event) => {
        setNewNote(event.target.value);
    };

    const notesToShow = showAll ? noteList : noteList.filter(note => note.important);

    const toggleShowImportant = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="render-wrapper">
            <h1>NOTES</h1>
            <button onClick={toggleShowImportant}>
                show {showAll ? 'important' : 'all'}
            </button>
            {notesToShow.map((elem) => (
                <CNotes key={elem.id} noteObject={elem} />
            ))}
            <form onSubmit={addNote}>
                <input type="text" value={newNote} onChange={handleNoteChange} />
                <button type="submit">SAVE</button>
            </form>
        </div>
    );
};

export default Render;