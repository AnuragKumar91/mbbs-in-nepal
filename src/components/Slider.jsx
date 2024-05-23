import React from 'react'
import "./Slider.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
const Slider = () => {
  
  return (
  <>
  <div className="icon-bar">
          <Link to="#" className="social-icon facebook"><FontAwesomeIcon icon={faFacebook}  /></Link>
          <Link to="#" className="social-icon twitter"><FontAwesomeIcon icon={faXTwitter} /></Link>
          <Link to="#" className="social-icon instagram"><FontAwesomeIcon icon={faInstagram} /></Link>
          <Link to="#" className="social-icon linkedin"><FontAwesomeIcon icon={faLinkedin} /></Link>
        </div>
  </>
  )
}

export default Slider