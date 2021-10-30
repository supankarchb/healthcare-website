import React from 'react';
import Footer from '../Footer/Footer';
import Home from '../Home';
import Doctorsdata from './Doctorsdata';

const ShowingDoctorsData = () => {
    return (
        <div>
            <Home/>

            <Doctorsdata/>
           

            <Footer/>
            
        </div>
    );
};

export default ShowingDoctorsData;