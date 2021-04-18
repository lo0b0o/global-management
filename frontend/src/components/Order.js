import React from 'react';


const Order = ({products,orders}) => {
    orders.map(order=>{
        const product = products.filter(product=>(product['_id']===order['productId']))
        console.log(product)
        order['price']= Number(product['price'])*Number(order['num'])
    })
    console.log(1,orders)
    return (
        <div>

        </div>
    );
}


export default Order;