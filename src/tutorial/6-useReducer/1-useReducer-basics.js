import React, { useState } from "react";
import Modal from "./Modal";
import { data } from '../../data';

//Used useState to do it
const BasicUseReducer = () => {
    //For our Form
    const [name, setName] = useState('');
    const [people, setPeople] = useState(data);
    const [modal, setModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            setPeople([...people, { id: new Date().getTime().toString(), name }]);
            setModal(true);
            setName('');
        }
        else {
            setModal(true);
        }
    }

    return <React.Fragment>
        <h1>Basics of UseReducer</h1>
        {modal && <Modal />}
        <form onSubmit={handleSubmit}>
            <div>
                <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} />
            </div>
            <button type="submit">Add Data</button>
        </form>
        {people.map((person) => {
            return <div key={person.id}>
                <h1>{person.name}</h1>
            </div>
        })}
    </React.Fragment>
}

export default BasicUseReducer;

//In bigger app it is not better to use useState