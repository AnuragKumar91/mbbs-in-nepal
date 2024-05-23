import React, { useState } from 'react'
import Modal from './Modal';
import BImg from "../assets/bams-logo.webp"
import { Link } from 'react-router-dom';
const CollegeCard = (props) => {
   const [showModal, setShowModal] = useState(false);

    const handleApplyNowClick = () => {
      setShowModal(true);
    };
  return (
   <>
   <div class="col-sm-12 col-md-6 col-lg-3" id="top-mbb-con">
  <div class="post-item card">
    <div class="post__img">
      <Link href="#!">
        <img class="colls__css" src={props.Img} alt="MS Ramaiah Dental College and Hospital" id="college-image" />
      </Link>
      <img src={BImg} alt="" id="college-logo" />
    </div>
    <div class="post__body">
      <div class="post__meta-cat">
        <Link href="#!" class="open-login-popup">Admission Open</Link>
      </div>
      <h4 class="post__title open-login-popup">
        <Link href="#!">{props.collegeTitle}</Link>
      </h4>
      <div class="post__meta">
        <span class="post__meta-date">● 5 years (Full Time)</span> <br />
        <span class="post__meta-date">● Estd : {props.year}</span> <br />
        <span class="post__meta-date">● Type of University : Private</span><br />
        <span class="post__meta-date">● Location : {props.location}</span>
        <div class="d-flex mt-4 justify-content-center justify-content-lg-between w-100" id="button-card">
          <button class="btn btn-primary " onClick={handleApplyNowClick}>Apply Now</button>
          <button class="btn btn-danger  mr-2">Read More</button>
        </div>
        {showModal && <Modal closeModal={() => setShowModal(false)} />}
      </div>
    </div>
  </div>
</div>

               {/* <div class="col-sm-12 col-md-6 col-lg-3">
                  <div class="post-item card ">
                     <div class="post__img">
                        <a href="#!">
                           <img class="colls__css" src={MediImg1} alt="MR Ambedkar dental college Bangalore"/>
                        </a>
                     </div>
                     <div class="post__body">
                        <div class="post__meta-cat">
                           <a href="#!" class="open-login-popup">Admission Open</a>
                        </div>
                        <h4 class="post__title open-login-popup"><a href="#!">BMS College of Engineering </a>
                        </h4>
                        <div class="post__meta">
                           <span class="post__meta-date">● 4 years (Full Time)</span> <br/>
                           <span class="post__meta-date">● Estd : 1946</span> <br/>
                           <span class="post__meta-date">● Type of University : Private</span><br/>
                         
                           <span class="post__meta-date">● Location : Karnataka </span>
                           <span class="post__meta-date"> <button class="btn btn-primary" href="#!">Appy Now</button> </span>
                        </div>

                     </div>
                  </div>
               </div>
               <div class="col-sm-12 col-md-6 col-lg-3">
                  <div class="post-item card ">
                     <div class="post__img">
                        <a href="#!">
                           <img class="colls__css" src={MediImg1} alt="KLE-Vishwanath-Katti-Institute-of-Dental-Sciences-Belgaum"/>
                        </a>
                     </div>
                     <div class="post__body">
                        <div class="post__meta-cat">
                           <a href="#!" class="open-login-popup">Admission Open</a>
                        </div>
                        <h4 class="post__title open-login-popup"><a href="#!">PES University</a>
                        </h4>
                        <div class="post__meta">
                           <span class="post__meta-date">● 4 years (Full Time)</span> <br/>
                           <span class="post__meta-date">● Estd : 1988</span> <br/>
                           <span class="post__meta-date">● Type of University : Private</span><br/>
                           <span class="post__meta-date">● Location : Karnataka </span>
                           <span class="post__meta-date"> <button class="btn btn-primary" href="#!">Appy Now</button> </span>
                        </div>

                     </div>
                  </div>
               </div>
               <div class="col-sm-12 col-md-6 col-lg-3">
                  <div class="post-item card ">
                     <div class="post__img">
                        <a href="#!">
                           <img class="colls__css" src={MediImg1} alt="kempegowda-institute-of-medical-sciences-kims-bangalore"/>
                        </a>
                     </div>
                     <div class="post__body">
                        <div class="post__meta-cat">
                           <a href="#!" class="open-login-popup">Admission Open</a>
                        </div>
                        <h4 class="post__title open-login-popup"><a href="#!">Ramaiah Institute of Technology</a>
                        </h4>
                        <div class="post__meta">
                           <span class="post__meta-date">● Recog : MCI</span> <br/>
                           <span class="post__meta-date">● Estd : 1962</span> <br/>
                           <span class="post__meta-date">● Type of University : Private</span><br/>
                           <span class="post__meta-date">● Location : Karnataka </span>
                           <span class="post__meta-date"> <button class="btn btn-primary" href="#!">Appy Now</button> </span>
                        </div>

                     </div>
                  </div>
               </div>
               <div class="col-sm-12 col-md-6 col-lg-3">
                  <div class="post-item card ">
                     <div class="post__img">
                        <a href="#!">
                           <img class="colls__css" src={MediImg1} alt="RGUHS Courses Admission Fees Ranking"/>
                        </a>
                     </div>
                     <div class="post__body">
                        <div class="post__meta-cat">
                           <a href="#!" class="open-login-popup">Admission Open</a>
                        </div>
                        <h4 class="post__title open-login-popup"><a href="#!">Banglore Dayanand Sagar Institute of Technology </a>
                        </h4>
                        <div class="post__meta">
                           <span class="post__meta-date">● Recog : MCI, UGC</span> <br/>
                           <span class="post__meta-date">● Estd : 1980</span> <br/>
                           <span class="post__meta-date">● Type : State University</span><br/>
                           <span class="post__meta-date">● Location : Karnataka </span>
                           <span class="post__meta-date"> <button class="btn btn-primary" href="#!">Appy Now</button> </span>
                        </div>

                     </div>
                  </div>
               </div>
               <div class="col-sm-12 col-md-6 col-lg-3">
                  <div class="post-item card ">
                     <div class="post__img">
                        <a href="#!">
                           <img class="colls__css" src={MediImg1} alt="Main Entrance View of KGF First Grade College Kolar_Campus-View"/>
                        </a>
                     </div>
                     <div class="post__body">
                        <div class="post__meta-cat">
                           <a href="#!" class="open-login-popup">Admission Open</a>
                        </div>
                        <h4 class="post__title open-login-popup"><a href="#!">B.M.S Institute of Technology </a>
                        </h4>
                        <div class="post__meta">
                           <span class="post__meta-date">● Grade : NAAC</span> <br/>
                           <span class="post__meta-date">● Estd : 2002</span> <br/>
                           <span class="post__meta-date">● Type of University : Government</span><br/>
                           <span class="post__meta-date">● Location : Karnataka </span>
                           <span class="post__meta-date"> <button class="btn btn-primary" href="#!">Appy Now</button> </span>
                        </div>

                     </div>
                  </div>
               </div>
               <div class="col-sm-12 col-md-6 col-lg-3">
                  <div class="post-item card ">
                     <div class="post__img">
                        <a href="#!">
                           <img class="colls__css" src={MediImg1} alt="Subbaiah-Institute-of-Medical-Sciences-Shimoga1"/>
                        </a>
                     </div>
                     <div class="post__body">
                        <div class="post__meta-cat">
                           <a href="#!" class="open-login-popup">Admission Open</a>
                        </div>
                        <h4 class="post__title open-login-popup"><a href="#!"> Banglore Institute of Technology  </a>
                        </h4>
                        <div class="post__meta">
                           <span class="post__meta-date">● Approved : (MCI)</span> <br/>
                           <span class="post__meta-date">● Estd : 1979 </span> <br/>
                           <span class="post__meta-date">● Type of University : Private</span><br/>
                           <span class="post__meta-date">● Location : Karnataka </span>
                           <span class="post__meta-date"> <button class="btn btn-primary" href="#!">Appy Now</button> </span>
                        </div>

                     </div>
                  </div>
               </div>
               <div class="col-sm-12 col-md-6 col-lg-3">
                  <div class="post-item card ">
                     <div class="post__img">
                        <a href="#!">
                           <img class="colls__css"src={MediImg1} alt="The Oxford Dental College And Hospital"/>
                        </a>
                     </div>
                     <div class="post__body">
                        <div class="post__meta-cat">
                           <a href="#!" class="open-login-popup">Admission Open</a>
                        </div>
                        <h4 class="post__title open-login-popup"><a href="#!">R.V Institute of Technology </a>
                        </h4>
                        <div class="post__meta">
                           <span class="post__meta-date">● Approved : DCI</span> <br/>
                           <span class="post__meta-date">● Estd : 1963 </span> <br/>
                           <span class="post__meta-date">● Type of University : Private</span><br/>
                           <span class="post__meta-date">● Location : Karnataka </span>
                           <span class="post__meta-date"> <button class="btn btn-primary" href="#!">Appy Now</button> </span>
                        </div>

                     </div>
                  </div>
               </div> */}
   
   </>
  )
}

export default CollegeCard