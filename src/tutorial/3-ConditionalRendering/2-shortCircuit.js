import React, { useState } from "react";

const ShortCircuit = () => {
    const [text, setText] = useState(''); //Here the var text is falsy because it is a empty string
    const firstNumber = text || "Hello World"; //In this case it must return "Hello World" because text is falsy
    const secondNumber = text && "Hello World"; //In this case it must return text because text is falsy

    const [isError, setIsError] = useState(false);

    return <React.Fragment>
        <h1>{firstNumber}</h1>
        <h2>{"Value : " + secondNumber}</h2>

        {/* By Using the above logic, we can render a text which gives "Anonymous User" if the text variable is falsy */}
        <h1 style={{ color: 'red' }}>{text || "Anonymous User"}</h1>

        {/* Similarly, we can render a Welcome Message if text is truthy by using && operator */}
        {text && <h1 style={{ color: 'red' }}>Welcome {text}</h1>}

        {/* Similarly when the text is empty render other message by using ! operator
            The && operator in short-circuit evaluation is used to Show/Hide Component
        */}
        {!text && <h1 style={{ color: 'red' }}>Hey, Anonymous User...Mind Sparing some time to Sign In</h1>}

        {/* Let's Create a button which changes the state value of isError */}
        <button onClick={() => setIsError(!isError)}>Toggle Error</button>

        {/* So if we have error as true display some text */}
        {isError && <h1 style={{ color: 'rosybrown' }}>Error</h1>}

        {/* Now using Ternary Operator to do the same thing */}
        {isError ? <p>There is Error</p> : <div>
            <pre>"No Error... Happy Coding  😊"</pre>
        </div>}
    </React.Fragment>
};

export default ShortCircuit;