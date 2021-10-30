import React, { useEffect, useState } from 'react';
import ShowData from './ShowData';

const Data = () => {
    const[products, setProduct] =useState([]);
    useEffect(()=>{
        fetch('fakesdata.JSON')
        .then(res=> res.json())
        .then(data=>setProduct(data));
    },[])
    return (
        <div>
              <div className="row bg-light">
               <div className="col-md-12">
                   <div className="bg-warning mt-5"> <h1><b>Services</b></h1></div>
           <div className="row">
            {
                products.map(product => <ShowData key={product.key}  product={product}>
                   
                </ShowData>)
            }
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default Data;