import React, { useEffect, useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager"
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [product, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        const sameProduct = cart.find(pd => pd.key === product.key);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.qua + 1;
            sameProduct.qua = count;
            const others = cart.filter(pd => pd.key != product.key);
            newCart = [...others, sameProduct];
        }
        else {
            product.qua = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        const cartProduct = productKey.map(pdKey => {
            const product = fakeData.find(pd => pd.key === pdKey)
            product.qua = savedCart[pdKey];
            return product;
        })
        setCart(cartProduct);
    }, [])


    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        product.map(product => <Product handleAddProduct={handleAddProduct}
                            showAddCart={true} product={product} key={product.key}></Product>)
                    }
                </div>
                <div className="cart">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className='button'>Review Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;