import React, { useEffect, useState } from 'react';

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturn = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState('Default User');

    const getData = async () => {
        await fetch(url)
            .then((response) => {
                if (response.status >= 200 && response.status <= 299) {
                    return response.json();
                }
                else {
                    setIsLoading(false);
                    setIsError(true);
                    throw new Error(response.statusText);
                }
            })
            .then((data) => {
                const { login } = data;
                setData(login);
                setTimeout(() => {
                    setIsLoading(false);
                }, 2000)
            })
            .catch((error) => {
                setIsError(true);
                setIsLoading(false);
            })
    };

    useEffect(() => {
        getData();
    }, [])

    if (isLoading) {
        return <div>
            <h1>Loading........</h1>
        </div>
    }

    if (isError) {
        return <div>
            <h1>Oops! Some Error occoured Please try again later...</h1>
        </div>
    }

    return <React.Fragment>
        <h1>{data}</h1>
    </React.Fragment>
}

export default MultipleReturn;