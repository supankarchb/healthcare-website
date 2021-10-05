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
            <h1 className="p-3"><b>Our Achievement</b></h1>
            <p className="p-3 m-2 bg-secondary text-white rounded-pill">ABC Coaching Center are renowned in Dhaka City.Many student got chances from our coaching.WE got many prices in coaching section.Recorded students may got chance from us.Our have a reputed caching in the cityFrom the NLP Practitioner and Coach to Train The Trainer, our online ICF training programs are fully interactive and self-paced, so you can work on them whenever you want. Our Certified Team Transformation Coach Programs equips the leaders and professionals with the right tools and skills to drive the change on organizational-level through coaching.</p>
            <Data></Data>
            <Footer></Footer>
        </div>
    );
};

export default Homes;