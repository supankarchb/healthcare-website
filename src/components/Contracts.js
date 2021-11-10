import React from 'react';
import Footer from './Footer/Footer';
import Home from './Home';
const Contracts = () => {
    return (
        <div>
            <Home/>
             <div class="row p-5 m-3">
                       
                        <div class="col col-m-1-1 col-l-1-1 col-1-1">
                            <div class="column text-center"> 
                                <h1>Where to <strong class="text-danger">find us.</strong></h1>
                                
                               <h6>Email, call, or do it the old fashioned way and drop in. We’d love to talk.</h6>
                                <div class="contact-details">
                                    <i class="fa fa-envelope-o fa-lg"></i>
                                   info@TOTAL HEALTH CARE.com.au/
                                    <i href="#" class="fa fa-phone fa-lg"></i>0171 225 335
                                    <span>
                                        <span class="address"><i class="fa fa-map-marker fa-lg"></i>
                                            <span >10/10 Market St</span>,
                                            <span >Dhaka City</span>
                                            <span >Dhanmondi</span>
                                            <span >1200</span>
                                        </span>
                                    </span>
                                </div>
                                <p>
                                © TOTAL HEALTH CARE 2021. All Rights Reserved | TOTAL HEALTH CARE 123456789  | Terms & Conditions of Coaching | Privacy Policy | Support 
                                </p>
                        </div> 
                    </div>
                </div>
                <Footer></Footer>
        </div>
    );
};

export default Contracts;