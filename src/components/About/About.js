import React from 'react';
import "./About.css";
import banner from '../../images/national-cancer-institute-701-FJcjLAQ-unsplash.jpg'
import Home from '../Home';
import Footer from '../Footer/Footer';

const About = () => {
    return (
       
       <div>
           <Home> </Home>
         <div className="about-section mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="about-image container">
                        <img className="w-75" src={banner} alt=""/>
                    </div>

                </div>
                    <div className="col-md-6">

                    <h3>About Us</h3>
                    <p className="p-4">Enjoy a full Health Check from the comfort of your home.A customized health check tailored around your needs that includes 20 lab tests and one video consultation with a Praava Family Doctor.World-Renowned Experts. Nationally Ranked Care. Services: Cancer Care, Children's Hospital, Heart & Vascular, Neurosurgery.Any time any one can get this services.This services can safe anyone life.Our every patients have take the equal all kind of servies from us.Our 24/7 hours ambulance services make the new evalunitionary change in our overall services.Medicines are chemicals or compounds used to cure, halt, or prevent disease; ease symptoms; or help in the diagnosis of illnesses. Advances in medicines have enabled doctors to cure many diseases and save lives.</p>



                    </div>
            </div>
          
        </div>
        <Footer> </Footer>
       </div>
    );
};

export default About;