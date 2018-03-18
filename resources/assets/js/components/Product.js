import React, { Component } from 'react';

const Product = ({product}) => {

    const divStyle = {
        float: 'right',
    }

    if(!product) {
        return(<div style={divStyle}>  Product Doesnt exist </div>);
    }

    return(
        <div style={divStyle}>
            <h2> {product.title} </h2>
            <p> {product.description} </p>
            <h3> Status {product.availability ? 'Available' : 'Out of stock'} </h3>
            <h3> Price : {product.price} </h3>
        </div>
    )
}

export default Product ;