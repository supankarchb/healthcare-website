import React, { useEffect, useState } from 'react';
import Services from './Services';

const Products = () => {
    const[products, setproducts] =useState([]);
    useEffect(()=>{
        fetch('fakedata.JSON')
        .then(res=> res.json())
        .then(data=> setproducts(data));
    },[])
    return (
        <div>
             <div className="row bg-light">
               <div className="col-md-12">
           <div className="row p-3 my-3"> <h2><b>Our All Courses</b></h2>
            {
                products.map(product => <Services key={product.key}  product={product}>
                   
                </Services>)
            }
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default Products;