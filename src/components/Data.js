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
           <div className="row p-3 my-3"> <h2><b>Our Courses</b></h2>
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