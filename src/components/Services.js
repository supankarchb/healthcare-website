import React from 'react';

const Services = (props) => {
    const{name,totalVideos,enrollfree,img} = props.product;
    const productStyle={
        padding:'10px',
        borderRadius:'10px',
        gridGap:'10px'
    }
    const imgStyle={
        textAlign:'center',
    display: 'block',
    justifyContent:'center',
    alignItems:'center',
    margin: 'auto',
    width: '250px',
    height:'200px'
        
    }
    return (
        <div className="col-md-6 g-5" style={productStyle}>

        <div className="card-md-2 p-2">
        <div className="col">
          <div className="card">
            <img src={img} className="card-img-top " style={imgStyle} alt="..."/>
            <div className="card-body">
              <h6 className="card-text"><b>Service Name :</b> {name}</h6>
              <p className="card-text"><small><b>Service fee : $ {enrollfree}</b></small></p>
              <button className="border rounded-pill border-dark btn btn-primary text-white">more</button>
            </div>
          </div>
        </div>
        </div>
       </div>
    );
};

export default Services;