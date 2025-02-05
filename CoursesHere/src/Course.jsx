import { useEffect, useState } from "react";
import './App.css';

/* eslint-disable react/prop-types */
const Course = ({ course }) => {
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let count = 0;
        let arr = course.parts;
        for (let i = 0; i < arr.length; ++i) {
            count += arr[i].exercises;
        }
        setTotal(count);
    }, [course.parts])
    return (
        <div className="wrapper">
            <p className="para">{course.name}</p>
            <ul>
                {
                    course.parts.map((elem) => {
                        return (
                            <li key={elem.id}>
                                {elem.name} {elem.exercises}
                            </li>
                        )
                    })
                }
            </ul>
            <p>The total exercises are: {total}</p>
        </div>
    )
}

export default Course;
/*always forgetting return statement in map method.*/