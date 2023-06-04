import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, prd) => total + prd.price*prd.qua, 0);
    const calTotal=totalPrice.toFixed(2);
    
    let shipping = 0;
    if (totalPrice > 35){ 
        shipping = 0;
    }
    else if (totalPrice > 15) {
        shipping = 4.99;
    }
    else if (totalPrice > 0) {
        shipping = 12.99;
    }
    const tax=(totalPrice/10).toFixed(2);
    const grandTotal=(totalPrice + shipping +Number(tax)).toFixed(2);
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered : {cart.length}</p>
            <p>Product Price : {calTotal}</p>
            <p>Shipping cost : {shipping}</p>
            <p>Tax + VAT : {tax}</p>
            <p>Total Price   : {grandTotal}</p>
            {
                props.children
            }
        </div>
    );
};

export default Cart;