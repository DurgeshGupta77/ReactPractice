import { useState, useEffect, useCallback } from "react";

export const UseFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState();

    const fetchData = useCallback(async () => {
        console.log("Durgesh");
        const response = await fetch(url);
        const products = await response.json();
        console.log("The products is" + products)
        setProducts(products);
        setIsLoading(false);
    }, [url]);

    useEffect(() => {
        fetchData()
    }, [url, fetchData]);

    console.log("The products are " + products);

    return { isLoading, products };
}
