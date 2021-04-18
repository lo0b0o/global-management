import React from 'react';
import products from "../products";
import Product from "../components/Product";

const ProductScreen = () => {
    return (
        <div>
            <Product products={products}/>
        </div>
    );
}


export default ProductScreen;