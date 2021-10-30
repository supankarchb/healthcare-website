import React from 'react';
import Carousels from './Carousels/Carousels';
import Data from './Data';
import Footer from './Footer/Footer';
import Home from './Home';

const Homes = () => {
    return (
        <div>
            <Home></Home>
            <Carousels/>
            <Data></Data>
         <Footer></Footer>
        </div>
    );
};

export default Homes;