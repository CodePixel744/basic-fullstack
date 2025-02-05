/* eslint-disable react/prop-types */
import './CNotes.css'

const CNotes = ({ noteObject }) => {
    return (
        <div className="cnotes-wrapper">
            <h2>{noteObject.id}</h2>
            <div className="cnotes-iwrapper">
                <h3>{noteObject.content}</h3>
                <h4>{noteObject.important}</h4>
            </div>
        </div>
    )
}

export default CNotes;