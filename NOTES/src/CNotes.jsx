/* eslint-disable react/prop-types */
import './CNotes.css'
import { useState } from 'react';

const CNotes = ({ noteObject }) => {
    const [important, setImportant] = useState(noteObject.important);

    const toggleImportance = () => {
        noteObject.important = !noteObject.important;
        setImportant(noteObject.important);
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