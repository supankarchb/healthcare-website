import React from 'react';
import Carousels from './Carousels/Carousels';
import Data from './Data';
import banners from '../../src/images/national-cancer-institute-oCLuFi9GYNA-unsplash.jpg'
import reviewer1 from '../../src/images/jd-chow-gutlccGLXKI-unsplash.jpg'
import reviewer2 from '../../src/images/yerling-villalobos-r-hssyiKimQ-unsplash.jpg'
import reviewer3 from '../../src/images/repentand-seekchristjesus-pMhS-1SzOEc-unsplash.jpg'

import Footer from './Footer/Footer';
import Home from './Home';

const Homes = () => {
    return (
        <div>
            <Home></Home>
            <Carousels/>
            <Data></Data>
            <section class="container m-5">

                {/* Frequently asked question section */}
                    <h1 class="text-center">Frequently Asked <span>Question</span></h1>
                <div class="d-flex flex-column flex-md-row align-items-center justify-content-between" >
                    <div class="col-lg-6 p-4">
                        <img class="img-fluid" src={banners} alt=""/>
                    </div>
                    <div class="col-lg-6">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item border-1 mb-3">
                              <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Why MRI is most important?
                                </button>
                              </h2>
                              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                  <p>Magnetic resonance imaging (MRI) is a medical imaging technique that uses a magnetic field and computer-generated radio waves to create detailed images of the organs and tissues in your body. Most MRI machines are large, tube-shaped magnets.</p>
                                </div>
                              </div>
                            </div>
                            <div class="accordion-item mb-3">
                              <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Why X-ray is most important?
                                </button>
                              </h2>
                              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>X-rays are a type of radiation called electromagnetic waves. X-ray imaging creates pictures of the inside of your body. The images show the parts of your body in different shades of black and white.</p>
                                </div>
                              </div>
                            </div>
                            <div class="accordion-item border-1 mb-3">
                                <h2 class="accordion-header" id="headingTwo">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                  Why dental care is most important?
                                  </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                  <div class="accordion-body">
                                    <p>Good dental or oral care is important to maintaining healthy teeth, gums and tongue. Oral problems, including bad breath, dry mouth, canker or cold sores.</p>
                                  </div>
                                </div>
                              </div>
                            <div class="accordion-item">
                              <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Why Eye care is most important?
                              </button>
                              </h2>
                              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider. </p>
                                </div>
                              </div>
                            </div>
                          </div>
                    </div>
                </div>



                {/* Patient reviews section */}

                <h1 class="text-center mt-3">Patients <span>Review</span></h1>
    
    <div class="row row-cols-1 row-cols-md-3 my-5">
        <div class="col">
          <div class="card h-100 border-1">
            <img src={reviewer1} class="card-img-top w-100 p-5" alt="..."/>
            <div class="card-body">
              <p class="card-text text-center">Excellent services there have.I am totally pleased about their services.Go again for any treatment</p>
            </div>
          </div>
        </div>

        <div class="col">
            <div class="card h-100 border-1">
              <img src={reviewer2} class="card-img-top w-100 p-5" alt="..."/>
              <div class="card-body">
                <p class="card-text text-center">Totally surprised about their services.There have special MRI,X-ray,Dental care,Eye care,Special dialysis services.</p>
              </div>
            </div>
        </div>
            <div class="col">
                <div class="card h-100 border-1">
                  <img src={reviewer3} class="card-img-top w-100 p-5" alt="..."/>
                  <div class="card-body">
                    <p class="card-text text-center">Excellent services there have.I am totally pleased about their services.Go again for any treatment.</p>
                  </div>
                </div>
      </div>
      </div>

                </section>

         <Footer></Footer>
        </div>
    );
};

export default Homes;