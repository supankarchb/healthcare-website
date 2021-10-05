import React from 'react';
import Data from './Data';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';

const Homes = () => {
    return (
        <div>
            <Header/>
            <Home></Home>
            <Data></Data>
            <Footer></Footer>
        </div>
    );
};

export default Homes;