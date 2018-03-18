import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Product from './Product';
import AddProduct from './AddProduct';

/* Main Component */
class Main extends Component {

    constructor() {

        super();

        this.state = {
            products: [],
            currentProduct: null
        }
    }

    componentDidMount() {
        async function getProducts()  {
            try {
                const response = await axios.get('/api/products');
                return response.data;
            } catch (error) {
                console.log(error);
            }
        }

        getProducts()
            .then(data => {
                this.setState({products: data})
            });
    }

    renderProducts() {
        return this.state.products.map(product => {
            return (
                <li onClick={
                    () =>this.handleClick(product)} key={product.id} >
                    { product.title }
                </li>
            );
        })
    }

    handleClick(product) {
        //handleClick is used to set the state
        this.setState({currentProduct:product});

    }

    render() {
        return (
            <div>
                <div style={{display: 'inline-block'}}>
                    <h3>All Products</h3>
                    <ul>
                        { this.renderProducts() }
                    </ul>
                </div>
                <Product product={this.state.currentProduct} />
                <AddProduct onAdd={this.handleAddProduct} />
            </div>
        );
    }
}

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));

}