import React, { useState } from "react";

//The code will be same as controlled input but in this case we will refactor the code a little
const MultipleInput = () => {
    const [person, setPerson] = useState({ firstName: '', email: '', age: '' });
    const [people, setPeople] = useState([]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setPerson({ ...person, [name]: value });
    }

    const handleForm = (e) => {
        e.preventDefault();
        if (person.firstName && person.email && person.age) {
            const newPerson = { ...person, id: new Date().getTime().toString() };
            setPeople([...people, newPerson]);
            setPerson({ firstName: '', email: '', age: '' });
        }
        else {
            alert("Please Add Data to Proceed!");
        }
    }

    return <React.Fragment>
        <article style={{ marginBottom: '50px' }}>
            <form className="form" onSubmit={handleForm} style={{ backgroundColor: 'whitesmoke', width: '90%', height: '350px', marginLeft: '50px', marginTop: '50px' }}>
                <div className="controlled-form" style={{ paddingLeft: '200px', paddingTop: '50px' }}>
                    <label htmlFor="firstName" style={{ marginRight: '10px', fontWeight: 'bold', fontFamily: 'Times New Roman', fontSize: '18px' }}> Name: </label>
                    {/* Using the attribute value we have connected state to input */}
                    {/* Using the e.target.value we received the value that we get after typing and set to first name state */}
                    {/* If we do not do that nothing will be typed because setFirstName is '' */}
                    <input style={{ width: '80%', height: '20px' }} type="text" id="firstName" name="firstName" value={person.firstName} onChange={handleChange} />
                </div>

                <div className="controlled-form" style={{ paddingLeft: '200px', paddingTop: '50px' }}>
                    <label htmlFor="email" style={{ marginRight: '10px', fontWeight: 'bold', fontFamily: 'Times New Roman', fontSize: '18px' }}> Email: </label>
                    <input style={{ width: '80%', height: '20px' }} type="text" id="email" name="email" value={person.email} onChange={handleChange} />
                </div>

                <div className="controlled-form" style={{ paddingLeft: '200px', paddingTop: '50px' }}>
                    <label htmlFor="age" style={{ marginRight: '10px', fontWeight: 'bold', fontFamily: 'Times New Roman', fontSize: '18px' }}> Age: </label>
                    <input style={{ width: '80%', height: '20px' }} type="text" id="age" name="age" value={person.age} onChange={handleChange} />
                </div>
                <button type="submit" style={{ marginLeft: '45%', marginTop: '50px', backgroundColor: 'black', border: 'none', color: 'white', padding: '15px 32px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px' }}>Add Person</button>
            </form>
        </article>
        <article>
            {people.map((person) => {
                const { id, email, firstName } = person;
                return <div key={id} style={{ display: 'flex', backgroundColor: 'wheat', width: '80%', padding: '10px', justifyContent: 'space-between', marginLeft: '80px', marginRight: '120px', marginBottom: '20px' }}>
                    <h2 style={{ marginLeft: '10px' }}>{firstName}</h2>
                    <h3>{email}</h3>
                </div>
            })}
        </article>
    </React.Fragment>
}

export default MultipleInput;