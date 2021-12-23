import React, { useEffect } from "react";

const FetchData = () => {
    const url = 'https://api.github.com/users';

    //We set a state but the default value is empty array bcz we will get the array from url and set users to that array
    const [users, setUsers] = React.useState([]);


    useEffect(() => {
        getData();
    }, []);

    //Since we are passing setUsers it will re render causing useEffect to re render causing getData to be recalled causing infinite loop
    //So, we used the default parameter of useEffect to [] list, that way useEffect will be rendered only once
    const getData = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
    };

    return <React.Fragment>
        <h1 style={{ textAlign: 'center', marginBottom: '100px' }}>Github Repos of Users</h1>
        <ul style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', marginRight: '20px' }}>
            {users.map((user) => {
                const { id, login, avatar_url, html_url } = user;
                return (
                    <li key={id} style={{ listStyle: 'none', display: 'flex', padding: '50px', border: '1px solid #808080', backgroundColor: '#FFFFA7', borderRadius: '10px', margin: '5px 5px' }}>
                        <img src={avatar_url} alt={login} style={{ borderRadius: '50%', width: '100px', height: '100px', paddingRight: '30px' }}></img>
                        <div>
                            <h4 style={{ textTransform: 'capitalize' }}>{login}</h4>
                            <a href={html_url} target={'_blank'} style={{ textDecoration: 'none', color: '#808080' }}>Profile</a>
                        </div>
                    </li>
                );
            })}
        </ul>
    </React.Fragment>
};

export default FetchData;