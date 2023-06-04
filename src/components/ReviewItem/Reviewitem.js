import React from 'react';

const Reviewitem = (props) => {
    const {name ,qua,price,seller,key}=props.product;
    const bodyStyle={
        borderBottom:"1px solid lightgray",
        marginBottom:"10px",
        paddingBottom:"10px",
        marginLeft:"200px"
    }
    return (
        <div style={bodyStyle}>
            <h4 className='product-name'>{name}</h4>
            <h5 style={{color:'red'}}>$ {price}</h5>
            <small>Sold by : {seller}</small>
            <p>Quantity : {props.product.qua}</p>
            <button onClick={()=>props.removeProduct(key)} className="button">Remove Item</button>
        </div>
    );
};

export default Reviewitem;