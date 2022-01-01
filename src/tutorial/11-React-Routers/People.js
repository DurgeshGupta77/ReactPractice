import React, { useState } from "react";
import { data } from "../../data";
import { Link } from "react-router-dom";

const People = () => {
    const [people, setPeople] = useState(data);
    return <>
        <h1>This is People</h1>
        {people.map((person) => {
            return <div key={person.id}>
                <h4>{person.name}</h4>
                <Link to={`/person/${person.id}`}>
                    Learn More...
                </Link>
            </div>
        })}
    </>
}

export default People;