import React from 'react';
import products from "../products";
import orders from "../orders";
import Order from "../components/Order";

const OrderScreen = () => {
    return (
        <div>
            <Order products={products} orders={orders}/>
            order management
        </div>
    );
}


export default OrderScreen;