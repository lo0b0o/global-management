import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'


// const productsInForm = products.map(product => {
//     return {id: product._id,
//         name: product.name,
//         price: product.price,
//         countInStock: product.countInStock}
// })


const Product = ({products}) => {
    // const formKey = ["_id","name",]
    // const productsInForm = products[formKey]
    // const productsInForm = products.map(product => ({
    //     id: product._id,
    //     name: product.name,
    //     price: product.price,
    //     countInStock: product.countInStock,
    //     nation: product.nation,
    // }))

    const onAfterInsertRow = row => {
        let newRowStr = '';

        for (const prop in row) {
            newRowStr += prop + ': ' + row[prop] + ' \n';
        }
        alert('The new row is:\n ' + newRowStr);
    }

    const options = {
        afterInsertRow: onAfterInsertRow   // A hook for after insert rows
    };

    return (
        <div>
            <BootstrapTable data={products} insertRow={true} search={true}>
                <TableHeaderColumn isKey dataField='_id'>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField='description' hidden = 'true'>Description</TableHeaderColumn>
                <TableHeaderColumn dataField='price' searchable={false}>Product Price</TableHeaderColumn>
                <TableHeaderColumn dataField='image' hidden = 'true' searchable={false}>Image</TableHeaderColumn>
                <TableHeaderColumn dataField='nation' searchable={false}>Nation</TableHeaderColumn>
                <TableHeaderColumn dataField='countInStock' searchable={false} filter={ {
                    type: 'NumberFilter',
                    delay: 1000,
                    numberComparators: ['<=','>=']
                } }>Count In Stock</TableHeaderColumn>
                <TableHeaderColumn dataField='SellerId' hidden = 'true' searchable={false}>Seller ID</TableHeaderColumn>
            </BootstrapTable>,
        </div>
    );
}


export default Product;