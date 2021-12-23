import React, { useState, useEffect } from "react";

const UseEffectBasic = () => {
    const [value, setValue] = useState(0);

    //The second parameter, i.e. the list of dependencies ensures that the useEffect is only rendered when the value changes
    useEffect(() => {
        if (value > 0) {
            console.log("rendering useEffect");
            document.title = `New Value (${value})`;
        }
    }, [value]);

    //When we run this code useEffect is only run once because the second parameter which is the list of dependencies is empty
    // useEffect(() => {
    //     console.log("run useEffect");
    //     if (value > 0) {
    //         document.title = `New Value (${value})`;
    //     }
    // }, []);

    return <React.Fragment>
        <h1>Learning Use Effect</h1>
        <h2>{value}</h2>
        <button className="btn" onClick={() => {
            setValue(value + 1)
        }}>Click Me</button>
        <hr style={{ width: '99%', height: '5px', backgroundColor: 'red' }} />
    </React.Fragment>
};

export default UseEffectBasic;