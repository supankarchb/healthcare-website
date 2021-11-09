import React from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Home from '../Home';

const Details = () => {

    const {serviceId} = useParams();
    return (
        <div>
            <Home/>
            <p>{serviceId}</p>
            <Footer/>
        </div>
    );
};

export default Details;