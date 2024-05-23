import React from "react";
import "./Service.css";
import CareerIcon from "../../assets/career-icon.png";
import UniversityIcon from "../../assets/university-icon.png";
import AdmissionIcon from "../../assets/admissiob-icon.png";
import VirtualImg from "../../assets/vitual-icon.png";
import RankImg from "../../assets/rank-icon.jpg";
const Service = () => {
  return (
    <>
      {/* <section class="bgimg" id="sec-service">
        <div class="container com-sp">
          <div class="row">
            <div class="cor about-sp">
              <div class="ed-about-tit">
                <div class="con-title">
                  <h2>
                    {" "}
                    <span> What we Provide</span>
                  </h2>
                  <p>
                    As we have promised to maintain all-round grooming as you
                    stay with us, so have a look.
                  </p>
                </div>
              </div>
              <div class="ed-about-sec1">
                <div class="ed-advan">
                  <ul>
                    <li>
                      <div class="ed-ad-img">
                        <img src={CareerIcon} alt="icon" />
                      </div>
                      <div class="ed-ad-dec">
                        <h4>Career Counseling</h4>
                        <p>
                          We aim to provide you an excellent study environment
                          at Imagine, for your proper grooming and development.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="ed-ad-img">
                        <img src={UniversityIcon} alt="icon" />
                      </div>
                      <div class="ed-ad-dec">
                        <h4>University Selection</h4>
                        <p>
                          Don't Worry our education may be world-class but our
                          food is Indian and home-like. You get proper
                          Nutrition.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="ed-ad-img">
                        <img src={AdmissionIcon} alt="icon" />
                      </div>
                      <div class="ed-ad-dec">
                        <h4>Admission Guidance</h4>
                        <p>
                          The MCI coaching that we provide is the best because
                          it brings out the best Doctor in You. You learn
                          better.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="ed-ad-img">
                        <img src={VirtualImg} alt="icon" />
                      </div>
                      <div class="ed-ad-dec">
                        <h4>Virtual Counselling</h4>
                        <p>
                          The English coaching classes that we take up at our
                          institute helps you write and read properly in
                          English.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="ed-ad-img">
                        <img src={RankImg} alt="icon" />
                      </div>
                      <div class="ed-ad-dec">
                        <h4>Give Rank Predictor</h4>
                        <p>
                          There is nothing called ragging at our institute, we
                          only encourage friendship and love for each other.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="ed-ad-img">
                        <img src={RankImg} alt="icon" />
                      </div>
                      <div class="ed-ad-dec">
                        <h4>Experience </h4>
                        <p>
                          We have a very experienced faculty at our institute
                          and you get the right guidance from them to study.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

<section class="section-big main-color mt-5">
   <div class="container">

      <div class="row">
         <div class="col-md-12 pb-20 "> 
            <h2 class="section-title mb-10 mt-5"><span> What we Provide </span></h2>
           {/* <p class="section-sub-title">
               We are a passionate digital design agency that specializes in beautiful and easy-to- <br/>
               use digital design &amp; web development services.
            </p> */}
            <div class="exp-separator center-separator">
               <div class="exp-separator-inner">
               </div>
            </div>

         </div>
      </div>

       <div class="row">
         <div class="col-md-4">
            <ul class="i-list medium">
               <li class="i-list-item">
               <img src={CareerIcon} alt="icon" className="icon" />
                  <div class="icon-content">
                     <h4 class="title">Career Counseling</h4>
                     <p class="sub-title">
                        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                        consequat vitae, eleifend ac, enim ante, dapibus in.
                     </p>
                  </div>
                  <div class="iconlist-timeline"></div>
               </li>
               <li class="i-list-item">
               <img src={UniversityIcon} alt="icon" className="icon" />

                  <div class="icon-content">
                  <h4 className="title">University Selection</h4>
                     <p>
                        Aenean vulputate tellus. Aenean leo ligula, porttitor eu,
                        consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.
                     </p>
                  </div>
                  <div class="iconlist-timeline"></div>
               </li>
               <li class="i-list-item">
               <img src={AdmissionIcon} alt="icon" className="icon" />

                  <div class="icon-content">
                  <h4 className="title">Admission Guidance</h4>
                     <p>
                        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                        consequat, eleifend ac, enim lorem ante, dapibus in.
                     </p>
                  </div>
               </li>
            </ul>
         </div>
         <div class="col-md-4">
            <ul class="i-list medium">
               <li class="i-list-item">
               <img src={VirtualImg} alt="icon" className="icon" />
                  <div class="icon-content">
                  <h4 className="title">Virtual Counselling</h4>
                     <p class="sub-title">
                        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                        consequat vitae, eleifend Aliquam lorem ante, dapibus in.
                     </p>
                  </div>
                  <div class="iconlist-timeline"></div>
               </li>
               <li class="i-list-item">
               <img src={RankImg} alt="icon" className="icon"/>
                  <div class="icon-content">
                  <h4 className="title">Give Rank Predictor</h4>
                     <p>
                        Aenean eleifend tellus. Aenean leo ligula, porttitor eu
                        consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.
                     </p>
                  </div>
                  <div class="iconlist-timeline"></div>
               </li>
               <li class="i-list-item">
               <img src={RankImg} alt="icon"  className="icon"/>
                  <div class="icon-content">
                  <h4 className="title">Experience </h4>
                     <p>
                        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                        consequat vitae, eleifend enim lorem ante, dapibus in.
                     </p>
                  </div>
               </li>
            </ul>
         </div>
         <div class="col-md-4">
            <ul class="i-list medium">
               <li class="i-list-item">
               <img src={RankImg} alt="icon"  className="icon"/>
                  <div class="icon-content">
                  
                  <h4 className="title">MBBS  Guidance</h4>
                     <p class="sub-title">
                        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                        consequat vitae, eleifend ac, enim. Aliquam lorem ante.
                     </p>
                  </div>
                  <div class="iconlist-timeline"></div>
               </li>
               <li class="i-list-item">
               <img src={RankImg} alt="icon"  className="icon"/>
                  <div class="icon-content">
                     <h4 class="title">Recent Update About MBBS </h4>
                     <p>
                        Aenean vulputate eleifend tellus ligula, porttitor eu,
                        consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.
                     </p>
                  </div>
                  <div class="iconlist-timeline"></div>
               </li>
               <li class="i-list-item">
               <img src={RankImg} alt="icon"  className="icon"/>
                  <div class="icon-content">
                    <h4 className="title">Answer Key</h4>
                     <p>
                        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                        consequat vitae, eleifend ac lorem ante, dapibus in.
                     </p>
                  </div>
               </li>
            </ul>
         </div>
      </div> 
   </div>
</section>

<div>
  <hr />
</div>

    </>
  );
};

export default Service;
