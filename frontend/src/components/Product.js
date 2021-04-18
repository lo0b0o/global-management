import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


// const productsInForm = products.map(product => {
//     return {id: product._id,
//         name: product.name,
//         price: product.price,
//         countInStock: product.countInStock}
// })


const Product = ({products}) => {


    const columns = [{dataField: '_id', text: 'Product ID'},
        {dataField: 'name', text: 'Product Name'},
        {dataField: 'description', text: 'Description',hidden:true},
        {dataField: 'price', text: 'Product Price'},
        {dataField: 'image', text: 'Image',hidden: true},
        {dataField: 'nation', text: 'Nation'},
        {dataField: 'countInStock', text: 'Count In Stock'}];
    return (
        <>
            <BootstrapTable keyField='_id' data={products} columns={columns}/>
        </>
)

    // return (
    //     <>
    //         <BootstrapTable data={products} insertRow={true} search={true} >
    //             <TableHeaderColumn isKey dataField='_id'>Product ID</TableHeaderColumn>
    //             <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
    //             <TableHeaderColumn dataField='description' hidden = 'true'>Description</TableHeaderColumn>
    //             <TableHeaderColumn dataField='price' searchable={false}>Product Price</TableHeaderColumn>
    //             <TableHeaderColumn dataField='image' hidden = 'true' searchable={false}>Image</TableHeaderColumn>
    //             <TableHeaderColumn dataField='nation' searchable={false}>Nation</TableHeaderColumn>
    //             <TableHeaderColumn dataField='countInStock' searchable={false} filter={ {
    //                 type: 'NumberFilter',
    //                 delay: 1000,
    //                 numberComparators: ['<=','>=']
    //             } }>Count In Stock</TableHeaderColumn>
    //             <TableHeaderColumn dataField='SellerId' hidden = 'true' searchable={false}>Seller ID</TableHeaderColumn>
    //         </BootstrapTable>
    //     </>
    // );
}


export default Product;