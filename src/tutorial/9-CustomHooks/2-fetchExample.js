import React from "react";
import { UseFetch } from "./1-customHooks";

const Example = () => {
    const url = 'https://course-api.com/javascript-store-products';

    const { isLoading, products } = UseFetch(url);
    console.log(products);

    return <React.Fragment>
        <h1>{isLoading ? "Loading...." : "Data"}</h1>
    </React.Fragment>
}

export default Example;