import React from "react";

const UseStateCounter = () => {

    const [value, setValue] = React.useState(0);

    const resetValue = () => {
        setValue(0);
    }

    const increaseValue = () => {
        setTimeout(() => {
            //Here when we use value + 1, after clicking on 3 times if the value is 0, then it will be 1 bcz it does not record prev state
            //So using prevState + 1 we record the prev state and display 
            setValue((prevState) => prevState + 1);
        }, 2000);
    };

    return <React.Fragment>
        <section>
            <h1>Hey, I am UseStateCounter</h1>
            <h2>{value}</h2>
            <button onClick={() => { setValue(value + 1) }}>Increase</button>
            <button onClick={() => {
                if (value === 0) {
                    setValue(0)
                }
                else {
                    setValue(value - 1)
                }
            }}>Decrease</button>
            <button onClick={() => resetValue()}>Reset</button>
            <hr style={{ width: '99%', height: '5px', backgroundColor: 'red' }} />
        </section>

        {/* In this section we will only increase after 2 seconds delay, i.e. setTimeOut */}
        <section style={{ marginTop: '100px' }}>
            <h1>Hey, I am Complex UseStateCounter</h1>
            <h2>{value}</h2>
            <button onClick={() => { increaseValue() }}>Increase</button>
            <hr style={{ width: '99%', height: '5px', backgroundColor: 'red' }} />
        </section>
    </React.Fragment>
};

export default UseStateCounter;