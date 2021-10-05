import React from 'react';
import Contracts from './Contracts';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';

const Contract = () => {
    return (
        <div>
            <Header/>
            <Home/>
            <Contracts></Contracts>
            <Footer></Footer>
        </div>
    );
};

export default Contract;