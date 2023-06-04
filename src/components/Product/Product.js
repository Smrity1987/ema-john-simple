import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const product = (props) => {
    const { img, name, seller, price, stock,key } = props.product;
  
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="name-section">
                <h4 className="product-name"><Link to={"/product/"+ key}>{name}</Link></h4>
                <p><small>by : {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                {props.showAddCart && <button className='button'onClick={()=>props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>}
            </div>
        </div>
    );
};

export default product;