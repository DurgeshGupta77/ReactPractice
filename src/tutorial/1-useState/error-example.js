import React, { useState } from 'react';

const ErrorExample = () => {
    //Here we have used array destructuring because our useState method has a value and a method with a default value "My name is Durgesh"
    const [text, setText] = useState("My name is Durgesh");

    const handleChanges = () => {
        if (text === "My name is Durgesh") {
            setText("And I am learning React");
        }
        else {
            setText("My name is Durgesh");
        }
    };

    return (
        <React.Fragment>
            <h1>{text}</h1>
            <button className='btn' onClick={handleChanges}>
                Change Text
            </button>
            <hr style={{ width: '99%', height: '5px', backgroundColor: 'red' }} />
        </React.Fragment>
    );
}

export default ErrorExample;