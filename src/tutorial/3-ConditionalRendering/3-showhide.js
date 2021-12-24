import React, { useState, useEffect } from "react";

const ShowHide = () => {
    const [show, setShow] = useState(false);

    return <React.Fragment>
        <button onClick={() => setShow(!show)}>
            Show/Hide
        </button>
        {show && <Items />}
    </React.Fragment>
};

const Items = () => {
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth)
    };


    useEffect(() => {
        window.addEventListener('resize', checkSize)

        return () => {
            window.removeEventListener('resize', checkSize)
        }
    }, []);

    return <React.Fragment>
        <h1>Window Size:</h1>
        <h2>Size: {size}</h2>
    </React.Fragment>
}

export default ShowHide;