import React from 'react'
import "./Subscribe.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Subscribe = () => {
  return (
   <>
   
   
   {/* <div className="it-newsletter-area it-newsletter-height fix p-relative theme-bg">
      
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="it-newsletter-left">
                <h4 className="it-section-title text-white pb-20">
                 Subscribe for the Latest Update
                </h4>
                <span>
                  Best  MBBS Consultancy  in Nepal 
                </span>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="it-newsletter-right  text-end">
                <input type="text" placeholder="Enter your email:" />
                <button className="btn btn-primary"  id="sub-btn"type="submit">
                  <span className="sub">subscribe now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      







      {/* <section class="subscribe-area pb-50 pt-70">
<div class="container">
	<div class="row">

					<div class="col-md-4">
						<div class="subscribe-text mb-15">
							<span>JOIN OUR NEWSLETTER</span>
							<h2>subscribe newsletter</h2>
						</div>
					</div>
					<div class="col-md-8">
						<div class="subscribe-wrapper subscribe2-wrapper mb-15">
							<div class="subscribe-form">
								<form action="#">
									<input placeholder="enter your email address" type="email"/>
									<button>subscribe <i class="fas fa-long-arrow-alt-right"></i></button>
								</form>
							</div>
						</div>
					</div>
				</div>

</div>
</section> */}

<section id="section-sub">
  <div className="container">
    <div className="row">
      <div className="col-lg-12" id="subs">
       
        <div className="row">
          <div className="col-lg-6 ">
            <h4 id="subs-head">     <FontAwesomeIcon icon={faEnvelope}  />        Subscribe to our News Letter
</h4>

          </div>
          <div className="col-lg-6" id="subs-input">
  <div className="input-group">
    <input type="password" className="form-control" id="inputPassword2 syb" placeholder="Enter your email"/>
    <div className="input-group-append">
      <button type="submit" className="btn btn-info">Subscribe Now</button>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  </div>
</section>
   </>
  )
}

export default Subscribe