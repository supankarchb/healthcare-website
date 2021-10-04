import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//     faYoutube,
//     faFacebook,
//     faTwitter,
//     faInstagram
//   } from "@fortawesome/free-brands-svg-icons";
const Contracts = () => {

    // const element = <FontAwesomeIcon icon={faFacebook} />

    return (
        <div>
             <div class="row">
                        
                        <div class="col col-m-1-1 col-l-1-1 col-1-1">
                            <div class="column text-center"> 
                                <h1>Where to <strong class="text-danger">find us.</strong></h1>
                                <div class="d-flex align-items-center justify-content-center">
                                   <a href="www.facebook.com"><i class="p-3 bg-light" ></i></a>
                                   <a> <i class="p-3 bg-light text-danger"></i></a>
                                   <a><i class="p-3 bg-light text-info"></i></a>
                                    <a ><i class=" p-3 bg-light text-danger"></i></a>
                                </div>
                               <h6>Email, call, or do it the old fashioned way and drop in. We’d love to talk.</h6>
                                <div class="contact-details">
                                    <i class="fa fa-envelope-o fa-lg"></i>
                                    <a href="#">info@Hondadigital.com.au</a>
                                    <i href="#" class="fa fa-phone fa-lg"></i> <a href="#">0171 225 335</a>
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
                                © Honda CBR Pvt Ltd. 2021. All Rights Reserved | Honda 123456789  | <a>Terms & Conditions of Trade</a> | <a >Privacy Policy</a> | <a>Support</a>
                                </p>
                        </div> 
                    </div>
                </div>
            
        </div>
    );
};

export default Contracts;