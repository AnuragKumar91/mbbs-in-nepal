import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterBg from "../../assets/bg-1-1.jpg"
import { faFacebook, faXTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Enquiry from '../Form/Enquiry';

import "./Footer.css"
import Logo from "../../assets/lo.jpg"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {


  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  const openEnquiryModal=(e)=>{
    setShowEnquiryModal(true)
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <>

{/* <footer>
        <div
          className="it-footer-area it-footer-bg black-bg pt-120 pb-70"
          style={{ backgroundImage: `url(${FooterBg})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-50">
                <div className="it-footer-widget footer-col-1">
                  <div className="it-footer-logo pb-25">
                    <Link >
                      <img src={Logo} alt="Logo" id="logo"/>
                    </Link>
                  </div>
                  <div className="it-footer-text pb-5">
                    <p>
                      Interdum velit laoreet id donec ultrices <br />
                      tincidunt arcu. Tincidunt tortor aliquam nulla facilisi
                      cras fermentum odio eu.
                    </p>
                  </div>
                  <div className="it-footer-social">
                  <Link to="#" class="social-icon"><FontAwesomeIcon icon={faFacebook} /></Link>
          <Link to="#" class="social-icon"><FontAwesomeIcon icon={faXTwitter} /></Link>
          <Link to="#" class="social-icon"><FontAwesomeIcon icon={faInstagram} /></Link>
          <Link to="#" class="social-icon"><FontAwesomeIcon icon={faLinkedin} /></Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50">
                <div className="it-footer-widget footer-col-2">
                  <h4 className="it-footer-title">our services:</h4>
                  <div className="it-footer-list">
                    <ul>
                      <li>
                        <Link onClick={scrollToTop}>
                        <FontAwesomeIcon icon={faArrowRight} />   Service 1
                        </Link>
                      </li>
                      <li>
                        <Link onClick={scrollToTop}>
                          <FontAwesomeIcon icon={faArrowRight} />          Service 2
                        </Link>
                      </li>
                      <li>
                        <Link onClick={scrollToTop}>
                          <FontAwesomeIcon icon={faArrowRight} />          
                          Service 3
                        </Link>
                      </li>
                      <li>
                        <Link onClick={scrollToTop}>
                          <FontAwesomeIcon icon={faArrowRight} />         Service 4
                        </Link>
                      </li>
                      <li>
                        <Link onClick={scrollToTop}>
                          <FontAwesomeIcon icon={faArrowRight} />         Service 5
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 mb-50">
                <div className="it-footer-widget footer-col-3">
                  <h4 className="it-footer-title">quick links:</h4>
                  <div className="it-footer-list">
                    <ul>
                      <li>
                        <Link onClick={scrollToTop}>
                          <FontAwesomeIcon icon={faArrowRight} />         Link 1
                        </Link>
                      </li>
                      <li>
                        <Link onClick={scrollToTop}>
                          <FontAwesomeIcon icon={faArrowRight} />       Link 2
                        
                        </Link>
                      </li>
                      <li>
                        <Link onClick={scrollToTop}>
                          <FontAwesomeIcon icon={faArrowRight} />          
                          Link 3
                        </Link>
                      </li>
                      <li>
                        <Link onClick={scrollToTop}>
                          <FontAwesomeIcon icon={faArrowRight} />          Link 4
                        </Link>
                      </li>
                      <li>
                        <Link onClick={scrollToTop}>
                          <FontAwesomeIcon icon={faArrowRight} />       Link 5
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50">
                <div className="it-footer-widget footer-col-4">
                  <h4 className="it-footer-title">Gallery</h4>
                  <div className="it-footer-gallery-box">
                    <div className="row gx-5">
                      <div className="col-md-4 col-4">
                        <div className="it-footer-thumb mb-10">
                          <img src="" alt="FooterImg1" />
                        </div>
                      </div>
                      <div className="col-md-4 col-4">
                        <div className="it-footer-thumb mb-10">
                          <img src="" alt="FooterImg2" />
                        </div>
                      </div>
                      <div className="col-md-4 col-4 mb-10">
                        <div className="it-footer-thumb">
                          <img src="" alt="FooterImg3" />
                        </div>
                      </div>
                      <div className="col-md-4 col-4">
                        <div className="it-footer-thumb">
                          <img src=" "alt="FooterImg4" />
                        </div>
                      </div>
                      <div className="col-md-4 col-4">
                        <div className="it-footer-thumb">
                          <img src="" alt="FooterImg5" />
                        </div>
                      </div>
                      <div className="col-md-4 col-4">
                        <div className="it-footer-thumb">
                          <img src="" alt="FooterImg6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-copyright-area it-copyright-height">
          <div className="container">
            <div className="row">
              <div
                className="col-12 wow itfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div className="it-copyright-text text-center">
                  <p>
                    Copyright © 2024 <Link to="/" onClick={scrollToTop}>MBBS in Nepal</Link> || All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> */}

<footer class="bg-dark text-light" id="foo-head">
        <div class="container">
            <div class="f-items default-padding">
                <div class="row">
                    <div class="col-lg-4 col-md-6 item">
                        <div class="f-item about">
                            {/* <img src={Logo} alt="Logo" id="logo"/> */}
                            <p>
                                Required honoured trifling eat pleasure man relation. Assurance yet bed was improving furniture man. Distrusts delighted 
                            </p>
                            <div class="address">
                                <ul>
                                    <li>
                                        <div class="icon">
                                       <i class="fas fa-envelope"></i>

                                        </div>
                                        <div class="info">
                                            <h5>Email:</h5>
                                            <Link to="mailto:admission.providers@gmail.com">  <span>admission.providers@gmail.com</span></Link>
                                          
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                        <i class="fas fa-phone"></i>
                                        </div>
                                        <div class="info">
                                            <h5>Phone:</h5>
                                            <Link to="tel:+91:94733 35050">   <span >94733 35050</span></Link>
                                         
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="single-item col-lg-2 col-6 item">
                        <div class="f-item link">
                            <h4 class="widget-title">Service</h4>
                            <ul>
                                <li>
                                    <Link href="#">Service 1</Link>
                                </li>
                                <li>
                                    <Link href="#">Service 2</Link>
                                </li>
                                <li>
                                    <Link href="#">Service 3</Link>
                                </li>
                                <li>
                                    <Link href="#">Service 4</Link>
                                </li>
                                <li>
                                    <Link href="#">Service 5</Link>
                                </li>
                                {/* <li>
                                    <a href="#">X-ray</a>
                                </li> */}
                            </ul>
                        </div>
                    </div>

                    <div class="single-item col-lg-2 col-6 item">
                        <div class="f-item link">
                            <h4 class="widget-title">Usefull Links</h4>
                            <ul>
                                <li>
                                    <Link href="#">About Nepal</Link>
                                </li>
                                <li>
                                    <Link href="#">Course</Link>
                                </li>
                                <li>
                                    <Link href="#">Blog</Link>
                                </li>
                                <li>
                                    <Link href="#">College</Link>
                                </li>
                                {/* <li>
                                    <a href="#">About Us</a>
                                </li> */}
                                <li>
                                    <Link href="#">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="single-item col-lg-4 col-md-6 item">
                        <div class="f-item branches">
                            <div class="branches">
                                <ul>
                                    <li>
                                        <strong>Patna Branches:</strong> 
                                        <span id="foo-span"> M-2/6, 2nd floor, above addiction gym, near metro showroom, boring road, Patna, India, Bihar <br/> <Link to="tel:94733 35050">Phone: 94733 35050</Link></span>
                                    </li>
                                    {/* <li>
                                        <strong>Central Branches:</strong> 
                                        <span id="foo-span">2001 Kia Magentis, Prior Lake, Minnesota <br/> Phone: 651-379-4698</span>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row align-center">
                    <div class="col-lg-6 text-md-left text-center">
                        <p>Copyright &copy;  2024. Designed by <Link to="https://www.shishtechnology.com/" target="_blank" style={{color:"white"}}>Shish Technology</Link></p>
                    </div>
                    <div class="col-lg-6 text-md-left text-center text-right social">
                        <ul>
                            <li>
                            <Link href="#"  style={{color:"white"}}><FontAwesomeIcon icon={faFacebook} /> Facebook</Link>

                            </li>
                            <li>
                                <Link href="#"  style={{color:"white"}}><FontAwesomeIcon icon={faXTwitter} /> Twitter</Link>
                            </li>
                            <li>
                                <Link href="#"  style={{color:"white"}}><FontAwesomeIcon icon={faYoutube} /> Youtube</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div className="fixed">
        <button className="btn btn-info" onClick={openEnquiryModal} >
          Enquiry Now
        </button>
      </div>
      {showEnquiryModal && <Enquiry onClose={() => setShowEnquiryModal(false)} />}
      
      
    
    </>
  )
}

export default Footer