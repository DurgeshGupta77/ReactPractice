import React, { useState, useContext } from "react";
import { data } from '../../data'

//Now we will refactor the code of Prop Drilling using Context API
//Context API is the upgraded version that deals with Prop Drilling

const PeopleContext = React.createContext();

const ContextAPI = () => {
    const [people, setPeople] = useState(data);

    const deleteItem = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id)
        })
    }

    return <PeopleContext.Provider value={{ deleteItem, people }}>
        <h1>Context API</h1>
        <List />
    </PeopleContext.Provider>
}

const List = () => {
    //You can choose to not destructure like this
    const mainData = useContext(PeopleContext);
    return <>
        {mainData.people.map((person) => {
            return <SinglePeople key={person.id} {...person} />
        })}
    </>
}

const SinglePeople = ({ id, name }) => {
    const { deleteItem } = useContext(PeopleContext);
    console.log(data);
    return <div>
        <h4>{name}</h4>
        <button onClick={() => deleteItem(id)}>Delete Item</button>
    </div>
}

export default ContextAPI;