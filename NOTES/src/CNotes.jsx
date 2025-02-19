/* eslint-disable react/prop-types */
import './CNotes.css'
import { useState } from 'react';

const CNotes = ({ noteObject }) => {
    const [important, setImportant] = useState(noteObject.important);

    const toggleImportance = async () => {
        const updatedNote = { ...noteObject, important: !noteObject.important };
        const response = await fetch(`http://localhost:3001/notes/${noteObject.id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedNote),
            headers: {
            'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            setImportant(updatedNote.important);
            noteObject.important = updatedNote.important;
        }
        else {
            console.error(`Error has occured.`);
        }
    }

    return (
        <div className="cnotes-wrapper">
            <h2>{noteObject.id}</h2>
            <div className="cnotes-iwrapper">
                <h3>{noteObject.content}</h3>
                <h4>{important.toString()}</h4>
                <button onClick={toggleImportance}>{important ? `make it unimportant` : `make it important`}</button>
            </div>
        </div>
    )
}

export default CNotes;