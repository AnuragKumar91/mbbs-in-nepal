import React from 'react'
import BannerSection from '../BannerSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faClock, faLocationCrosshairs, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import "./Contact.css"
import { faFacebookF, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import Subscribe from '../Layout/Subscribe.jsx'


const Contact = () => {
  return (
   <>
   <BannerSection 
              title="Contact us"
              name="Contact us"/>


              
        <div className="it-contact__area pt-120 pb-120">
          <div className="container">
            <div className="it-contact__wrap fix z-index-3 p-relative">
             
              <div className="row align-items-end">
                <div className="col-lg-7">
                  <div className="it-contact__right-box">
                    <div className="it-contact__section-box pb-20">
                      <h4 className="it-contact__title pb-15">Get in Touch</h4>
                      <p>
                        Suspendisse ultrice gravida dictum fusce placerat <br />
                        ultricies integer{" "}
                      </p>
                    </div>
                    <div className="it-contact__content mb-55">
                      <ul>
                        <li>
                          <div className="it-contact__list d-flex align-items-start">
                            <div className="it-contact__icon">
                              <span>
                              <FontAwesomeIcon icon={faLocationCrosshairs} />
                              </span>
                            </div>
                            <div className="it-contact__text">
                              <span>Our Address</span>
                              <Link>
                                1564 Goosetown Drive <br />
                                Matthews, NC 28105
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="it-contact__list d-flex align-items-start">
                            <div className="it-contact__icon">
                              <span>
                              <FontAwesomeIcon icon={faClock} />
                              </span>
                            </div>
                            <div className="it-contact__text">
                              <span>Hours of Operation</span>
                              <Link>Mon - Fri: 9.00am to 5.00pm</Link>
                              <span>[2nd sat Holiday]</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="it-contact__list d-flex align-items-start">
                            <div className="it-contact__icon">
                              <span>
                              <FontAwesomeIcon icon={faPhone} />
                              </span>
                            </div>
                            <div className="it-contact__text">
                              <span>contact</span>
                              <Link to="tel:+91 9117213714">+91 9117213714</Link>
                              <Link to="mailto:xyz@gmail.com">
                                <span
                                  className="__cf_email__"
                                  data-cfemail="8ffcfaffffe0fdfbf6e0facfe6e1e9e0a1ece0e2"
                                >
                                  xyz@gmail.com
                                </span>
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="it-contact__bottom-box d-flex align-items-center justify-content-between">
                      {/* <div className="it-contact__scrool smooth">
                        <Link>
                          <i className="fa-solid fa-arrow-down"></i>Customer
                          Care
                        </Link>
                      </div> */}
                      <div className="it-footer-social">
                        <Link>
                          {" "}
                          <FontAwesomeIcon icon={faFacebookF} />
                        </Link>
                        <Link>
                        <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link>
                          {" "}
                          <FontAwesomeIcon icon={faLinkedin} />
                        </Link>
                        <Link>
                          {" "}
                          <FontAwesomeIcon icon={faXTwitter} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                 <div className="col-lg-5">
                  <div className="it-contact__form-box">
                    <form action="#">
                      <div className="row">
                        <div className="col-lg-12 mb-25">
                          <div className="it-contact-input-box">
                            <label>Name*</label>
                            <input type="text" placeholder="Name"   id="con-in"/>
                          </div>
                        </div>
                        <div className="col-12 mb-25">
                          <div className="it-contact-input-box">
                            <label>Email Address*</label>
                            <input type="email" placeholder="Email" id="con-in" />
                          </div>
                        </div>
                        <div className="col-12 mb-25">
                          <div className="it-contact-input-box">
                            <label>Phone*</label>
                            <input type="text" placeholder="Phone"   id="con-in"/>
                          </div>
                        </div>
                        <div className="col-12 mb-25">
                          <div className="it-contact-input-box">
                            <label>Subject*</label>
                            <input type="text" placeholder="Subject"  id="con-in"/>
                          </div>
                        </div>
                        <div className="col-12 mb-25">
                          <div className="it-contact-textarea-box">
                            <label>Message</label>
                            <textarea placeholder="Message" id="co-tex"></textarea >
                          </div>
                        </div>
                      </div>
                    </form>
                    <button type="submit" className="btn btn-primary">
                      <span>
                        Send Message
                        
                        {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                      </span>
                    </button>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
        <section id="sec-map">
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593955.6139239655!2d84.13015055000001!3d28.397454999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995e8c77d2e68cf%3A0x34a29abcd0cc86de!2sNepal!5e0!3m2!1sen!2sin!4v1715664456477!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: '0' }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe> 
        </section>
      


  <Subscribe />

  </>
  )
}

export default Contact