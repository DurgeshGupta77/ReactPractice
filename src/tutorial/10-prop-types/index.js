import React from "react";
import Product from "./Product";
import { useCustomHook } from '../9-CustomHooks/1-customHooks';

const url = 'https://course-api.com/react-prop-types-example';
const Index = () => {
    const { products } = useCustomHook(url);
    return <React.Fragment>
        <h1 style={{ textAlign: 'center', marginBottom: '60px' }}>Prop Types</h1>
        <section>
            {products.map((product) => {
                return <Product key={product.id} {...product} />;
            })}
        </section>
    </React.Fragment>
}

export default Index;