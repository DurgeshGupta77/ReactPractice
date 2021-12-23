import React from "react";
import { data } from "../../data";

const UseStateArray = () => {
    const [people, setPeople] = React.useState(data);

    const clickBTNHandler = () => {
        setPeople([]);
    };

    const removeItem = (id) => {
        // let newPeople = people.filter((person) => person.id !== id);
        // setPeople(newPeople);

        //Using Functional Approach
        setPeople((oldPeople) => {
            let newPeople = oldPeople.filter((person) => person.id !== id);
            return newPeople;
        });
    };

    return <React.Fragment>
        <h1>UseStateArray</h1>
        {
            people.map((person) => {
                const { id, name } = person;
                return <div key={id} className="item" style={{ display: 'flex' }}>
                    <div>
                        <h3>{name}</h3>
                    </div>
                    <div>
                        <button className="btn" onClick={() => removeItem(id)}>X</button>
                    </div>
                </div>
            })
        }
        <button onClick={() => clickBTNHandler()}>Clear All Items</button>
        <hr style={{ width: '99%', height: '5px', backgroundColor: 'red' }} />
    </React.Fragment>
}

export default UseStateArray;