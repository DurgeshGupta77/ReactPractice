import React, { useEffect, useRef } from "react";

const BasicsUseRef = () => {
    const inputRefContainer = useRef(null);
    const divRefContainer = useRef(null);

    const handleForm = (e) => {
        e.preventDefault();
        console.log(inputRefContainer.current.value);
        console.log(divRefContainer.current);
    }

    //One cool thing we can do with useRef and useEffect is we can focus on any input once the page is rendered
    //In useEffect we do not need to give any dependency or second parameter because useRef do not re renders the page
    useEffect(() => {
        inputRefContainer.current.focus();
    });

    return <React.Fragment>
        <h1>Use Ref Tutorial</h1>
        <form onSubmit={handleForm}>
            <input type='text' ref={inputRefContainer}></input>
            <button type="submit">Submit</button>
        </form>
        <div ref={divRefContainer}>
            <h1>Hello World!</h1>
        </div>
    </React.Fragment>
};

export default BasicsUseRef;