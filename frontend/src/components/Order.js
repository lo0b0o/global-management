import React from 'react';
// import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import BootstrapTable from "react-bootstrap-table-next"
import filterFactory, { textFilter,numberFilter,Comparator } from 'react-bootstrap-table2-filter';



const Order = ({products, orders}) => {
    orders.map(order => {
        const product = products.filter(product => (product['_id'] === order['productId']))
        // const product0=product[0]
        // console.log(1,product0.price)
        // console.log(2,order.num)
        order['price'] = (product[0]['price'] * order['num']).toFixed(2)
    })
    const columns = [{dataField: '_id', text: 'Order ID'},
        {dataField: 'customerId', text: 'Customer ID',filter:textFilter()},
        {dataField: 'productId', text: 'Product ID',filter:textFilter()},
        {dataField: 'num', text: 'Number'},
        {dataField: 'nation', text: 'Nation'},
        {
            dataField: 'price', text: 'Total Price', sort: true   ,sortFunc: (a, b, order, dataField, rowA, rowB) => {
                if (order === 'asc') {
                    return b - a;
                }
                return a - b; // desc
            },
            filter: numberFilter({
                comparator: [Comparator.GE,Comparator.LE],
                defaultValue: { comparator: Comparator.GE }
            })}
        ];
    return (
        <>
            <BootstrapTable bootstrap4 keyField='_id' data={orders} columns={columns} filter={ filterFactory() }/>

        </>
    )
    // return (
    //     <>
    //         <BootstrapTable data={orders} insertRow={true} search={true} pagination>
    //             <TableHeaderColumn isKey dataField='_id' >
    //                 Order ID
    //             </TableHeaderColumn>
    //             <TableHeaderColumn dataField='customerId' filter={{type: 'TextFilter', delay: 1000}}>
    //                 Customer Id
    //             </TableHeaderColumn>
    //             <TableHeaderColumn dataField='productId' filter={{type: 'TextFilter', delay: 1000}}>
    //                 Product Id
    //             </TableHeaderColumn>
    //             <TableHeaderColumn dataField='num' searchable={false}>Number</TableHeaderColumn>
    //             <TableHeaderColumn dataField='nation' searchable={false}>Nation</TableHeaderColumn>
    //             <TableHeaderColumn dataField='price' searchable={false}  sort='true'>Total Price</TableHeaderColumn>
    //
    //         </BootstrapTable>
    //     </>
    // );
}


export default Order;