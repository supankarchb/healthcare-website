import React, { useEffect, useState } from 'react';
import Doctorssdata from './Doctorssdata';

const Doctorsdata = () => {
    const[productss, setproductss] =useState([]);
    useEffect(()=>{
        fetch('fakessdata.JSON')
        .then(res=> res.json())
        .then(data=> setproductss(data));
    },[])
    return (
        <div>
             <div className="row bg-light">
               <div className="col-md-12">
                   <div className="bg-warning m-3"><h2>Specialist Doctors Info</h2></div>
           <div className="row p-3 my-2">
            {
                productss.map(products => <Doctorssdata key={products.key}  products={products}>
                   
                </Doctorssdata>)
            }
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default Doctorsdata;