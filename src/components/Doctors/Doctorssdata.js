import React from 'react';

const Doctorssdata = (props) => {
    const{name,totalVideos,enrollfree,img,country} = props.products;
    const productStyles={
        padding:'10px',
        borderRadius:'10px',
        gridGap:'10px'
    }
    const imgStyles={
        textAlign:'center',
    display: 'block',
    justifyContent:'center',
    alignItems:'center',
    margin: 'auto',
    width: '270px',
    height:'250px'
        
    }
    return (
        <div className="col-md-6 g-5" style={productStyles}>

        <div className="card-md-2 p-2">
        <div className="col">
          <div className="card">
            <img src={img} className="card-img-top " style={imgStyles} alt="..."/>
            <div className="card-body">
              <h4 className="card-text"><b>{name}</b> </h4>
              <p className="card-text"><small>{totalVideos}</small></p>
              <p className="card-text">{country}</p>

              <p className="card-text"><small><b>Appointment fee : $ {enrollfree}</b></small></p>
              <button className="border rounded-pill btn btn-danger text-white">APPOINTMENT</button>
            </div>
          </div>
        </div>
        </div>
       </div>
    );
};

export default Doctorssdata;