import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from "../Product/Product"

const Productdetail = () => {
    const {productKey}=useParams();
    const detail=fakeData.find(pd=>pd.key===productKey)
    // console.log(detail)
    return (
        <div>
            <Product showAddCart={false} product={detail}></Product>
        </div>
    );
};

export default Productdetail;