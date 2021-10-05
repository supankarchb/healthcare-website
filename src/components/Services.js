import React from 'react';

const Services = (props) => {
    const{name,totalVideos,enrollfree,img} = props.product;
    const productStyle={
        border: '3px solid goldenrod',
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
        <div className="col-md-4" style={productStyle}>

        <div className="card-md-2 p-2">
        <div className="col">
          <div className="card">
            <img src={img} className="card-img-top " style={imgStyle} alt="..."/>
            <div className="card-body">
              <h6 className="card-text"><b>Course Name :</b> {name}</h6>
              <p className="card-text"><small><b>Total Videos : {totalVideos}</b></small></p>
              <p className="card-text"><small><b>Enroll fee : $ {enrollfree}</b></small></p>
              <button className="border border-dark btn btn-danger text-white">Enroll</button>
            </div>
          </div>
        </div>
        </div>
       </div>
    );
};

export default Services;