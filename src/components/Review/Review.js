import React from 'react';
import "./Review.css"
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Reviewitem from '../ReviewItem/Reviewitem';
import Cart from '../Cart/Cart';
import { clearLocalShoppingCart } from '../../utilities/databaseManager';
import happy from "../../images/giphy.gif"

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlace,setOrderPlace]=useState(false);

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    const handlePlaceOrder=()=>{
        setCart([]);
        setOrderPlace(true);
        clearLocalShoppingCart();
    }

    let giphy;
    if(orderPlace){
       giphy= <img src={happy} alt="" />
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        const cartproduct = productKey.map(keys => {
            const product = fakeData.find(pd => pd.key === keys)
            product.qua = savedCart[keys]
            return product;
        });
        setCart(cartproduct);
    }, [])


    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    cart.map(pd => <Reviewitem product={pd} removeProduct={removeProduct} key={pd.key}></Reviewitem>)
                }
                {giphy}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className="button" onClick={handlePlaceOrder}>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;