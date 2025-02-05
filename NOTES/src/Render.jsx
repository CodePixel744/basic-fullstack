import CNotes from './CNotes';
/* eslint-disable react/prop-types */
import './Render.css';

const Render = ({ notes }) => {
    return (
        <>
            <div className="render-wrapper">
                <h1>NOTES</h1>
                {
                    notes.map((elem) => {
                        return (
                            <CNotes key={elem.id} noteObject={elem} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Render;