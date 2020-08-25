import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    return (
        <div className="products">   
            <div>
         <img src={props.product.img} alt=""/>        
            </div>
            <div className="products_name">
            <h4>{props.product.name}</h4>
            <br/>
            <p><small>by :{props.product.seller}</small></p>
             <p>${props.product.price}</p>
             
             <p><small>Only {props.product.stock} left in stock - Order Soon</small></p>
             <button onClick={ ()=> props.handleAddProduct(props.product)} className="main_button"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
           
            
        </div>
    );
};

export default Product;