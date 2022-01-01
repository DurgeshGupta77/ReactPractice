import React, { useState, useCallback, useMemo } from "react";
import { UseFetch } from '../9-CustomHooks/1-customHooks'

const url = 'https://course-api.com/javascript-store-products';

const calculateMostExpensive = (data) => {
    return data.reduce((total, item) => {
        const price = item.fields.price
        if (price >= total) {
            total = price
        }
        return total;
    }, 0) / 100

}

const PerformanceOptimization = () => {
    const { products } = UseFetch(url);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState(0);

    const addToCart = useCallback(() => {
        setCart(cart + 1);
    }, [cart]);

    const mostExpensive = useMemo(() => calculateMostExpensive(products), [products]);

    return <>
        <h1>Count: {count}</h1>
        <button onClick={() => {
            setCount(count + 1);
        }}> Click Me </button>

        <h1>Cart: {cart}</h1>

        <h1>Most Expensive: ${mostExpensive}</h1>

        <BigList products={products} addToCart={addToCart} />
    </>
}

const BigList = React.memo(({ products, addToCart }) => {
    return (
        <section>
            {products.map((product) => {
                return <SingleProduct key={product.id} {...product} addToCart={addToCart} />
            })}
        </section>
    );
});

const SingleProduct = ({ fields, addToCart }) => {
    let { name, price } = fields;
    price = price / 100;
    const image = fields.image[0].url;

    return <article>
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <h5>{price}</h5>
        <button onClick={addToCart}>Add to Cart</button>
    </article>
}

export default PerformanceOptimization;