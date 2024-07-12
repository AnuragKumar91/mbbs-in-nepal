import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./StudentReview.css"
import PersonIcon from "../../assets/Anurag.jpeg"
import Icon from "../../assets/person.png"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const StudentReview = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
   <>



      {/* <section className="team-section py-1 mt-10" id="sec-review">
        <div class="container " id="top-head">
        <h4 class="text-center">Student Review</h4>
        <div class="row justify-content-center py-2">
        <Carousel responsive={responsive}>
        <div class="item ">
                <div class="col-lg-6">
                  <div class="cards border-0  pt-5 my-5 position-relative">
                    <div class="cards-body p-4">
                      <div class="member-profile position-absolute w-100 text-center">
                        <img
                          class="rounded-circle mx-auto d-inline-block shadow-sm"
                          src={PersonIcon}
                          alt=""
                          id="top-img"
                        />
                      </div>
                      <div class="cards-text pt-1">
                        <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                          Jean Torres
                        </h5>
                        <div class="mb-3 text-center">Student</div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Vivamus eget
                          eros vestibulum, accumsan ante viverra, condimentum
                          tellus.{" "}
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="col-lg-6">
                  <div class="cards border-0  pt-5 my-5 position-relative">
                    <div class="cards-body p-4">
                      <div class="member-profile position-absolute w-100 text-center">
                        <img
                          class="rounded-circle mx-auto d-inline-block shadow-sm"
                          src={PersonIcon}
                          alt=""
                          id="top-img"
                        />
                      </div>
                      <div class="cards-text pt-1">
                        <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                          Jean Torres
                        </h5>
                        <div class="mb-3 text-center">Student</div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Vivamus eget
                          eros vestibulum, accumsan ante viverra, condimentum
                          tellus.{" "}
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="col-lg-6">
                  <div class="cards border-0  pt-5 my-5 position-relative">
                    <div class="cards-body p-4">
                      <div class="member-profile position-absolute w-100 text-center">
                        <img
                          class="rounded-circle mx-auto d-inline-block shadow-sm"
                          src={PersonIcon}
                          alt=""
                          id="top-img"
                        />
                      </div>
                      <div class="cards-text pt-1">
                        <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                          Jean Torres
                        </h5>
                        <div class="mb-3 text-center">Student</div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Vivamus eget
                          eros vestibulum, accumsan ante viverra, condimentum
                          tellus.{" "}
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="col-lg-6">
                  <div class="cards border-0  pt-5 my-5 position-relative">
                    <div class="cards-body p-4">
                      <div class="member-profile position-absolute w-100 text-center">
                        <img
                          class="rounded-circle mx-auto d-inline-block shadow-sm"
                          src={PersonIcon}
                          alt=""
                          id="top-img"
                        />
                      </div>
                      <div class="cards-text pt-1">
                        <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                          Jean Torres
                        </h5>
                        <div class="mb-3 text-center">Student</div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Vivamus eget
                          eros vestibulum, accumsan ante viverra, condimentum
                          tellus.{" "}
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="col-lg-6">
                  <div class="cards border-0  pt-5 my-5 position-relative">
                    <div class="cards-body p-4">
                      <div class="member-profile position-absolute w-100 text-center">
                        <img
                          class="rounded-circle mx-auto d-inline-block shadow-sm"
                          src={PersonIcon}
                          alt=""
                          id="top-img"
                        />
                      </div>
                      <div class="cards-text pt-1">
                        <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                          Jean Torres
                        </h5>
                        <div class="mb-3 text-center">Student</div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Vivamus eget
                          eros vestibulum, accumsan ante viverra, condimentum
                          tellus.{" "}
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="col-lg-6">
                  <div class="cards border-0  pt-5 my-5 position-relative">
                    <div class="cards-body p-4">
                      <div class="member-profile position-absolute w-100 text-center">
                        <img
                          class="rounded-circle mx-auto d-inline-block shadow-sm"
                          src={PersonIcon}
                          alt=""
                          id="top-img"
                        />
                      </div>
                      <div class="cards-text pt-1">
                        <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                          Jean Torres
                        </h5>
                        <div class="mb-3 text-center">Student</div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Vivamus eget
                          eros vestibulum, accumsan ante viverra, condimentum
                          tellus.{" "}
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="col-lg-6">
                  <div class="cards border-0  pt-5 my-5 position-relative">
                    <div class="cards-body p-4">
                      <div class="member-profile position-absolute w-100 text-center">
                        <img
                          class="rounded-circle mx-auto d-inline-block shadow-sm"
                          src={PersonIcon}
                          alt=""
                        />
                      </div>
                      <div class="cards-text pt-1">
                        <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                          Jean Torres
                        </h5>
                        <div class="mb-3 text-center">Marketing</div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Vivamus eget
                          eros vestibulum, accumsan ante viverra, condimentum
                          tellus.{" "}
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="col-lg-6">
                  <div class="cards border-0  pt-5 my-5 position-relative">
                    <div class="cards-body p-4">
                      <div class="member-profile position-absolute w-100 text-center">
                        <img
                          class="rounded-circle mx-auto d-inline-block shadow-sm"
                          src={PersonIcon}
                          alt=""
                        />
                      </div>
                      <div class="cards-text pt-1">
                        <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                          Jean Torres
                        </h5>
                        <div class="mb-3 text-center">Marketing</div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Vivamus eget
                          eros vestibulum, accumsan ante viverra, condimentum
                          tellus.{" "}
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="col-lg-6">
                  <div class="cards border-0  pt-5 my-5 position-relative">
                    <div class="cards-body p-4">
                      <div class="member-profile position-absolute w-100 text-center">
                        <img
                          class="rounded-circle mx-auto d-inline-block shadow-sm"
                          src={PersonIcon}
                          alt=""
                        />
                      </div>
                      <div class="cards-text pt-1">
                        <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                          Jean Torres
                        </h5>
                        <div class="mb-3 text-center">Marketing</div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Vivamus eget
                          eros vestibulum, accumsan ante viverra, condimentum
                          tellus.{" "}
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
</Carousel>;
        </div>
        </div>
   
      </section> */}
 
       <section  className="team-section py-1 mt-10" id="sec-review">
       <div className="container">
       <div className="row">
       <div className="col-lg-8">
      <div class="row justify-content-center py-2">
        <Carousel responsive={responsive}>
        {/* <div class="item ">
                <div class=" col-lg-6">
                  <div class="cards border-0  pt-5 my-5 position-relative">
                    <div class="cards-body p-4">
                      <div class="member-profile position-absolute w-100 text-center">
                        <img
                          class="rounded-circle mx-auto d-inline-block shadow-sm"
                          src={PersonIcon}
                          alt=""
                          id="top-img"
                        />
                      </div>
                      <div class="cards-text pt-1">
                        <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                          Jean Torres
                        </h5>
                        <div class="mb-3 text-center">Student</div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Vivamus eget
                          eros vestibulum, accumsan ante viverra, condimentum
                          tellus.{" "}
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="col-lg-6">
                  <div class="cards border-0  pt-5 my-5 position-relative">
                    <div class="cards-body p-4">
                      <div class="member-profile position-absolute w-100 text-center">
                        <img
                          class="rounded-circle mx-auto d-inline-block shadow-sm"
                          src={PersonIcon}
                          alt=""
                          id="top-img"
                        />
                      </div>
                      <div class="cards-text pt-1">
                        <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                          Jean Torres
                        </h5>
                        <div class="mb-3 text-center">Student</div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Vivamus eget
                          eros vestibulum, accumsan ante viverra, condimentum
                          tellus.{" "}
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div> */}
            <div className="item">
            <div class="row member-content">
				<div class="col-sm-3 col-sm-offset-1 member-thumb  fade-right in">
					<img class="img-responsive img-center img-thumbnail img-circle" src={Icon} alt=""/>
					<h4>Anurag Kumar</h4>
					<p class="title">Software Developer  </p>
				</div>
				<div class="col-sm-7">
					<div class="details">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						<ul class="social-content">
							<Link to="#" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></Link>
          <Link to="#" className="social-icon"><FontAwesomeIcon icon={faXTwitter} /></Link>
          <Link to="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></Link>
          <Link to="#" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></Link>
						</ul>
					</div>
				</div>
			</div>
            </div>
            <div className="item">
            <div class="row member-content">
				<div class="col-sm-3 col-sm-offset-1 member-thumb  fade-right in">
					<img class="img-responsive img-center img-thumbnail img-circle" src={PersonIcon} alt=""/>
					<h4>Anurag Kumar</h4>
					<p class="title">Software Developer &amp; </p>
				</div>
				<div class="col-sm-7">
					<div class="details">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						<ul class="social-content">
							<Link to="#" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></Link>
          <Link to="#" className="social-icon"><FontAwesomeIcon icon={faXTwitter} /></Link>
          <Link to="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></Link>
          <Link to="#" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></Link>
						</ul>
					</div>
				</div>
			</div>
            </div>
            <div className="item">
            <div class="row member-content">
				<div class="col-sm-3 col-sm-offset-1 member-thumb  fade-right in">
					<img class="img-responsive img-center img-thumbnail img-circle" src={PersonIcon} alt=""/>
					<h4>Anurag Kumar</h4>
					<p class="title">Software Developer &amp; </p>
				</div>
				<div class="col-sm-7">
					<div class="details">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						<ul class="social-content">
							<Link to="#" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></Link>
          <Link to="#" className="social-icon"><FontAwesomeIcon icon={faXTwitter} /></Link>
          <Link to="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></Link>
          <Link to="#" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></Link>
						</ul>
					</div>
				</div>
			</div>
            </div>
            <div className="item">
            <div class="row member-content">
				<div class="col-sm-3 col-sm-offset-1 member-thumb  fade-right in">
					<img class="img-responsive img-center img-thumbnail img-circle" src={PersonIcon} alt=""/>
					<h4>Anurag Kumar</h4>
					<p class="title">Software Developer &amp; </p>
				</div>
				<div class="col-sm-7">
					<div class="details">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						<ul class="social-content">
						<Link to="#" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></Link>
          <Link to="#" className="social-icon"><FontAwesomeIcon icon={faXTwitter} /></Link>
          <Link to="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></Link>
          <Link to="#" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></Link>
						</ul>
					</div>
				</div>
			</div>
            </div>
            <div className="item">
            <div class="row member-content">
				<div class="col-sm-3 col-sm-offset-1 member-thumb  fade-right in">
					<img class="img-responsive img-center img-thumbnail img-circle" src={PersonIcon} alt=""/>
					<h4>Anurag Kumar</h4>
					<p class="title">Software Developer &amp; </p>
				</div>
				<div class="col-sm-7">
					<div class="details">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						<ul class="social-content">
							<Link to="#" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></Link>
          <Link to="#" className="social-icon"><FontAwesomeIcon icon={faXTwitter} /></Link>
          <Link to="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></Link>
          <Link to="#" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></Link>
						</ul>
					</div>
				</div>
			</div>
            </div>


              {/* <div class="item">
                <div class="col-lg-6">
                  <div class="cards border-0  pt-5 my-5 position-relative">
                    <div class="cards-body p-4">
                      <div class="member-profile position-absolute w-100 text-center">
                        <img
                          class="rounded-circle mx-auto d-inline-block shadow-sm"
                          src={PersonIcon}
                          alt=""
                          id="top-img"
                        />
                      </div>
                      <div class="cards-text pt-1">
                        <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                          Jean Torres
                        </h5>
                        <div class="mb-3 text-center">Student</div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Vivamus eget
                          eros vestibulum, accumsan ante viverra, condimentum
                          tellus.{" "}
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="col-lg-6">
                  <div class="cards border-0  pt-5 my-5 position-relative">
                    <div class="cards-body p-4">
                      <div class="member-profile position-absolute w-100 text-center">
                        <img
                          class="rounded-circle mx-auto d-inline-block shadow-sm"
                          src={PersonIcon}
                          alt=""
                          id="top-img"
                        />
                      </div>
                      <div class="cards-text pt-1">
                        <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                          Jean Torres
                        </h5>
                        <div class="mb-3 text-center">Student</div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Vivamus eget
                          eros vestibulum, accumsan ante viverra, condimentum
                          tellus.{" "}
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="col-lg-6">
                  <div class="cards border-0  pt-5 my-5 position-relative">
                    <div class="cards-body p-4">
                      <div class="member-profile position-absolute w-100 text-center">
                        <img
                          class="rounded-circle mx-auto d-inline-block shadow-sm"
                          src={PersonIcon}
                          alt=""
                          id="top-img"
                        />
                      </div>
                      <div class="cards-text pt-1">
                        <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                          Jean Torres
                        </h5>
                        <div class="mb-3 text-center">Student</div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Vivamus eget
                          eros vestibulum, accumsan ante viverra, condimentum
                          tellus.{" "}
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="col-lg-6">
                  <div class="cards border-0  pt-5 my-5 position-relative">
                    <div class="cards-body p-4">
                      <div class="member-profile position-absolute w-100 text-center">
                        <img
                          class="rounded-circle mx-auto d-inline-block shadow-sm"
                          src={PersonIcon}
                          alt=""
                          id="top-img"
                        />
                      </div>
                      <div class="cards-text pt-1">
                        <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                          Jean Torres
                        </h5>
                        <div class="mb-3 text-center">Student</div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Vivamus eget
                          eros vestibulum, accumsan ante viverra, condimentum
                          tellus.{" "}
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="col-lg-6">
                  <div class="cards border-0  pt-5 my-5 position-relative">
                    <div class="cards-body p-4">
                      <div class="member-profile position-absolute w-100 text-center">
                        <img
                          class="rounded-circle mx-auto d-inline-block shadow-sm"
                          src={PersonIcon}
                          alt=""
                        />
                      </div>
                      <div class="cards-text pt-1">
                        <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                          Jean Torres
                        </h5>
                        <div class="mb-3 text-center">Marketing</div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Vivamus eget
                          eros vestibulum, accumsan ante viverra, condimentum
                          tellus.{" "}
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="col-lg-6">
                  <div class="cards border-0  pt-5 my-5 position-relative">
                    <div class="cards-body p-4">
                      <div class="member-profile position-absolute w-100 text-center">
                        <img
                          class="rounded-circle mx-auto d-inline-block shadow-sm"
                          src={PersonIcon}
                          alt=""
                        />
                      </div>
                      <div class="cards-text pt-1">
                        <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                          Jean Torres
                        </h5>
                        <div class="mb-3 text-center">Marketing</div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Vivamus eget
                          eros vestibulum, accumsan ante viverra, condimentum
                          tellus.{" "}
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="col-lg-6">
                  <div class="cards border-0  pt-5 my-5 position-relative">
                    <div class="cards-body p-4">
                      <div class="member-profile position-absolute w-100 text-center">
                        <img
                          class="rounded-circle mx-auto d-inline-block shadow-sm"
                          src={PersonIcon}
                          alt=""
                        />
                      </div>
                      <div class="cards-text pt-1">
                        <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                          Jean Torres
                        </h5>
                        <div class="mb-3 text-center">Marketing</div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Vivamus eget
                          eros vestibulum, accumsan ante viverra, condimentum
                          tellus.{" "}
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div> */}
</Carousel>
        </div>
       </div>
       <div className="col-lg-4">
          <div className="enquiry-form p-4">
         
            <h2 className="mb-4">Enquiry Now</h2>
            {/* Your enquiry form JSX goes here */}
            <form>
              <div className="form-group">
               
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" id="email"  placeholder="Enter your email"/>
              </div>
              <div className="form-group">
                <input type="number" className="form-control" id="number" placeholder="Enter your number" />
              </div>
              
              <div className="form-group">
            
                <textarea className="form-control" id="message" rows="5" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
          </div>
       </div>
       </div>
       </section>
       <hr />
   </>
  )
}

export default StudentReview