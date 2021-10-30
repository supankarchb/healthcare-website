import React from 'react';

const ShowData = (props) => {
    const{name,totalVideos,img} = props.product;
    const productStyle={
        padding:'10px',
        borderRadius:'10px',
        gridGap:'10px',
        
    }
    const imgStyle={
        textAlign:'center',
    display: 'block',
    justifyContent:'center',
    alignItems:'center',
    margin: 'auto',
    width: '250px',
    height:'200px'}
        
    return (
        <div className="col-md-6 g-5" style={productStyle}>

        <div className="card-md-2 p-2">
        <div className="col">
          <div className="card">
            <img src={img} className="card-img-top " style={imgStyle} alt="..."/>
            <div className="card-body">
              <h2 className="card-text"><b>{name}</b></h2>
              <p className="card-text">{totalVideos}</p>
              <button className="border border-dark btn btn-primary text-white">Details</button>
            </div>
          </div>
        </div>
        </div>
       </div>
    );
};

export default ShowData;