import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from '../../data';
import { reducer } from './reducer';

//Now we will use reducer to do the same task
const UsingReducer = () => {

    const defaultState = {
        people: data,
        isModalOpen: false,
        modalContent: '',
    };

    //For our Form
    const [name, setName] = useState('');

    const [state, dispatch] = useReducer(reducer, defaultState);
    // const [people, setPeople] = useState(data);
    // const [modal, setModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            const newData = { id: new Date().getTime().toString(), name };
            dispatch({ type: 'ADD_ITEM', payload: newData })
            setName('');
        }
        else {
            dispatch({ type: 'RANDOM' })
        }
    }

    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL' })
    }

    return <React.Fragment>

        {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
        <form onSubmit={handleSubmit} style={{ backgroundColor: 'whitesmoke', width: '90%', height: '300px', marginLeft: '50px', marginBottom: '50px' }}>
            <h1 style={{ textAlign: 'center' }}>Basics of UseReducer</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <input style={{ height: '20px', marginRight: '30px', marginTop: '50px' }} type='text' value={name} onChange={(e) => { setName(e.target.value) }} />
                <button style={{ marginTop: '50px' }} type="submit">Add Data</button>
            </div>

        </form>
        {state.people.map((person) => {
            return <div key={person.id} style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'whitesmoke', width: '80%', marginBottom: '15px', marginLeft: '7%' }}>
                <h1 style={{ marginLeft: '20px' }}>{person.name}</h1>
                <button style={{ display: 'inline-block', borderRadius: '4px', backgroundColor: '#f4511e', border: 'none', color: '#FFF', textAlign: 'center', fontSize: '28px', cursor: 'pointer', width: '80px' }} onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: person.id })}>X</button>
            </div>
        })}
    </React.Fragment>
}

export default UsingReducer;

//In bigger app it is not better to use useReducer