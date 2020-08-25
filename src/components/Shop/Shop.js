import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    const first10 = fakeData.slice(0,10)
    const[products, setProducts] = useState(first10);
    const [cart,setCart] = useState([]);


    const handleAddProduct= (pd)=> {
        const newCart = [...cart, pd];
        setCart(newCart)
    }
    
    return (
        <div className="shop_container">
        <div className="product_container">
  
        {
        products.map(product => <Product
            handleAddProduct = {handleAddProduct}
             product={product}
             ></Product>)
        }
      
        </div>
            <div className="cart_container">
               <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;