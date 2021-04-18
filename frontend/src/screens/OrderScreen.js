import React from 'react';
import products from "../products";
import orders from "../orders";
import Order from "../components/Order";

const OrderScreen = () => {
    return (
        <>
            <Order products={products} orders={orders}/>
        </>
    );
}


export default OrderScreen;