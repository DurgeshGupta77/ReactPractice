import React from "react";

const UseStateObject = () => {
    const [person, setPerson] = React.useState({
        name: 'Durgesh',
        age: 22,
        message: 'Hey, I am Durgesh',
    })

    const ChangeMessage = () => {
        if (person.message === 'Hey, I am Durgesh') {
            setPerson({ ...person, message: '& I am learning React' })
        } else {
            setPerson({ ...person, message: 'Hey, I am Durgesh' })
        }
        // usePerson({ ...person, message: '& I am learning React' });
    }

    return (
        <React.Fragment>
            <h1>Object UseState Example</h1>
            <h2>{person.name}</h2>
            <h3>{person.age}</h3>
            <h4>{person.message}</h4>
            <button onClick={() => ChangeMessage()}>Change Message</button>
            <hr style={{ width: '99%', height: '5px', backgroundColor: 'red' }} />
        </React.Fragment>
    );
};

export default UseStateObject;