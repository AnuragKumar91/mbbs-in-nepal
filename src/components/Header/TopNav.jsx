import React, { useEffect, useState } from 'react'
import { faFacebook, faXTwitter, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FaLongArrowAltUp, FaWhatsapp } from "react-icons/fa";
import Modal from "../Modal"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faPhone} from "@fortawesome/free-solid-svg-icons";
import "./Header.css"
import { Link } from 'react-router-dom';
import Enquiry from '../Form/Enquiry';
const TopNav = () => {


  

  const [showModal, setShowModal] = useState(false);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  
    const handleApplyNowClick = (e) => {
      setShowModal(true);
     
    };

    const openEnquiryModal=(e)=>{
      setShowEnquiryModal(true)
    }
    
  const ScrollIcons = () => {
    const [showIcons, setShowIcons] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 20) {
          setShowIcons(true);
        } else {
          setShowIcons(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    const openWhatsApp = () => {
      const phoneNumber = "9473335050";
      const message =
        "Hello! I am interested in admission. Can you please provide me with more information?";
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappURL, "_blank");
    };
  
    // Add scroll event listener to show/hide icons
  
    return (
      <div className={`icons-container ${showIcons ? "show-icons" : ""}`}>
        {/* Scroll to top icon */}
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaLongArrowAltUp
            className="atf-scrollup-icon"
            id="scroll-icon"
            // style={{ color: "white" }}
          />
          
        </div>
  
        {/* WhatsApp icon */}
        
        <div className="whatsapp-icon" onClick={openWhatsApp}>
          <FaWhatsapp id="what-icon" />
        </div>
       
      </div>
    );
  };
  const openWhatsApp = () => {
    const phoneNumber = "9473335050";
    const message =
      "Hello! I am interested in admission. Can you please provide me with more information?";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };
  return (
   <>
   <section>

   <ScrollIcons />
    <div className="whatsapp-icon-left" onClick={openWhatsApp}>
   <FontAwesomeIcon icon={faWhatsapp}  id="whatsapp-left" />
   </div>
   
   {/* <nav className="top-nav">
  <div className="container ">
    <div className="row">
      


    <div className="col-md-6 col-sm-12 left-side">
    <span className="d-block d-md-inline">
        <FontAwesomeIcon icon={faEnvelope} id="top-icon" />
        <Link to="mailto:admission.providers@gmail.com" id="top-btn">admission.providers@gmail.com</Link>
      </span>
      <span className="d-block d-md-inline mt-2 mt-md-0">
        <FontAwesomeIcon icon={faPhone} id="top-icon" />
        <Link to="tel:+91-94733 35050" id="top-btn">+91-94733 35050</Link>
      </span>
   <div className="row no-gutters">
    <div className="col-sm-7 text-center no-padding">
   
    </div>
    <div className="col-sm-5 text-center no-padding">
     
    </div>
  </div>
</div>
      <div className="col-md-6 col-sm-12 right-side">
       
        <div className="social-icons d-flex justify-content-md-end  justify-content-center mt-2 mt-md-0 ">
          <Link to="#" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></Link>
          <Link to="#" className="social-icon"><FontAwesomeIcon icon={faXTwitter} /></Link>
          <Link to="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></Link>
          <Link to="#" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></Link>
        </div>
      </div>  
    </div>
  </div>
  {showModal && <Modal closeModal={() => setShowModal(false)} />}

  {showEnquiryModal && <Enquiry onClose={() => setShowEnquiryModal(false)} />}
</nav> */}
{/* <nav className="top-nav">
  <div className="right-side">
    <span className="contact-item">
      <FontAwesomeIcon icon={faEnvelope} className="top-icon" />
      <Link to="mailto:admission.providers@gmail.com" className="top-btn">admission.providers@gmail.com</Link>
    </span>
    <span className="contact-item">
      <FontAwesomeIcon icon={faPhone} className="top-icon" />
      <Link to="tel:+91-94733 35050" className="top-btn">+91-94733 35050</Link>
    </span>
  </div>
  </nav> */}
{/* <div className="topnav">
      <div className="contact-info-container">
        <div className="curly-border left-border"></div>
        <div className="contact-info">
          <FontAwesomeIcon icon={faEnvelope} />
          <Link to="mailto:admission.providers@gmail.com">admission.providers@gmail.com</Link>
          <FontAwesomeIcon icon={faPhone} />
          <Link to="tel:+91-94733 35050">+91-94733 35050 </Link>
        </div>
        <div className="curly-border right-border"></div>
      </div>
    </div> */}

{/* <div className="tel" id="teli">
<FontAwesomeIcon icon={faEnvelope} />
          <Link to="mailto:admission.providers@gmail.com">admission.providers@gmail.com</Link>
          <FontAwesomeIcon icon={faPhone} />
          <Link to="tel:+91-94733 35050">+91-94733 35050 </Link>



</div> */}

<div className="curl">
<div className="teli">
<FontAwesomeIcon icon={faEnvelope}  />
          <Link to="mailto:admission.providers@gmail.com" id="admision">admission.providers@gmail.com</Link>
          
          <FontAwesomeIcon icon={faPhone}  id="admisson-icon"/>
          <Link to="tel:+91-94733 35050"id="admision">+91-94733 35050 </Link>
</div>
</div>

   </section>
   
   </>
  )
}

export default TopNav