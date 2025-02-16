/* eslint-disable react/prop-types */
import './CNotes.css'

const CNotes = ({ noteObject, setImportance }) => {
    const toggleImportance = () => {
        console.log(noteObject.important);
        setImportance({ ...noteObject, important: !noteObject.important });
    }
    return (
        <div className="cnotes-wrapper">
            <h2>{noteObject.id}</h2>
            <div className="cnotes-iwrapper">
                <h3>{noteObject.content}</h3>
                <h4>{noteObject.important}</h4>
                <button onClick={toggleImportance}>{noteObject.important ? `make it unimportant` : `make it important`}</button>
            </div>
        </div>
    )
}

export default CNotes;