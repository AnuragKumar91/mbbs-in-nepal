import React, { useRef } from "react";
import NepalImg from "../../assets/ban-index.jpg";
import Horn from "../../assets/megaphone.png";
import AdvIcon from "../../assets/like.png";
import "./About.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const About = () => {

  return (
    <>
      <section id="about-sec">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-12">
       <h2 id="about-head">About MBBS in Nepal</h2>
        </div> */}
            <div className="col-lg-6">
              <h4 class="admi__css">About MBBS </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus rerum quis ipsum laborum omnis! Sequi qui hic at saepe
                dicta, doloribus voluptas! Consectetur accusamus voluptatum
                perferendis deleniti quis qui exercitationem. Rerum molestiae
                asperiores similique corrupti repudiandae est ullam odit rem!
              </p>
               <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
                placeat magni doloribus maiores asperiores pariatur facilis
                consectetur velit corrupti voluptate quod fuga aut, laboriosam
                ab. Quos excepturi corporis esse tempora!
              </p> 
              <ul id="about-ul">
                <li id="about-id">
                  <h6>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} /> ADMISSION IN TOP 10
                    ENGINEERING/MEDICAL COLLEGE
                  </h6>
                </li>
                <li id="about-id">
                  <h6>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} /> PERFECT
                    ENGINEERING/MEDICAL COLLEGE FOR YOUR CAREER PATH
                  </h6>
                </li>
              </ul>
               <div class="">
                <Link to="tel:+91-94733 35050" class="btn btn-success">
                  Call :+91-947 333 5050
                </Link>
                <Link
                  class="btn btn-info"
                  id="about-btn"
                  href="#!"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  Apply Now
                </Link>
              </div> 
            </div>
            {/* <div className="col-lg-3">
              <div class="about-exp border bg__stye p-3 border-light-c text-center ">
                <img class="mb-3 advatnage__css " src={AdvIcon} />
                <h3>Advantages of MBBS</h3>
                <p class="text-dark">
                  Following MBBS, candidates will have the chance to serve in
                  prestigious government agencies and hospitals. This government
                  employment cost as much as a doctor's wage. After graduating
                  from MBBS,
                </p>
                <br />
                <a class="smII--byh" href="#!">
                  READ MORE
                </a>
              </div>
            </div> */}
           
             <div className="col-lg-6">

         <img src={NepalImg} alt=""  id="mbbs-photo"/>
        </div> 
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
