import React from 'react';
import products from "../products";
import Product from "../components/Product";
import {Container} from "react-bootstrap";

const ProductScreen = () => {
    return (
        <Container>
            <Product products={products}/>
        </Container>
    );
}


export default ProductScreen;