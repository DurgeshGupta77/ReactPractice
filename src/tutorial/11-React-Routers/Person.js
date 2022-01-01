import React, { useEffect, useState } from "react";
import { data } from "../../data";
import { Link, useParams } from "react-router-dom";


const Person = () => {
    const [name, setName] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const newPerson = data.find((person) => person.id === parseInt(id));
        setName(newPerson.name)
    }, [id]);
    return <>
        <h1>{name}</h1>
        <Link to='/people'>Go to People Page</Link>
    </>
}

export default Person;