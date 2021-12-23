import React from "react";

const CleanUpFunction = () => {
    let windowsArr = [window.innerWidth, window.innerHeight]
    const [size, setSize] = React.useState(windowsArr);

    const calculateSize = () => {
        setSize([windowsArr] = [window.innerWidth, window.innerHeight]);
    }

    React.useEffect(() => {
        window.addEventListener('resize', calculateSize);
        //Clean Up function
        return () => {
            window.removeEventListener('resize', calculateSize);
        };
    }
    );

    return <React.Fragment>
        <h1>Windows Size Calculator</h1>
        <h2>{size[0]} px X {size[1]} px</h2>
        <hr style={{ width: '99%', height: '5px', backgroundColor: 'red' }} />
    </React.Fragment>
};

export default CleanUpFunction;