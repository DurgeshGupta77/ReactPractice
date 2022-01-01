import React, { useState } from "react";
import { data } from '../../data'

//Here to transfer the deleteItem function to the bottom of the Prop Tree we had to pass it as prop to multiple functions and this is an
//headache

//To avoid the prop drilling, we can use Context API

const PropDrilling = () => {
    const [people, setPeople] = useState(data);

    const deleteItem = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id)
        })
    }

    return <React.Fragment>
        <h1>Prop Drilling Hell</h1>
        <List people={people} deleteItem={deleteItem} />
    </React.Fragment>
}

const List = ({ people, deleteItem }) => {
    return <>
        {people.map((person) => {
            return <SinglePeople key={person.id} {...person} deleteItem={deleteItem} />
        })}
    </>
}

const SinglePeople = ({ id, name, deleteItem }) => {
    return <div>
        <h4>{name}</h4>
        <button onClick={() => deleteItem(id)}>Delete Item</button>
    </div>
}

export default PropDrilling;