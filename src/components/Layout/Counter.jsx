import React, { useEffect, useState } from 'react'
import "./Counter.css"
import Md from "../../assets/md.jpg"
const Counter = () => {
    const[college,setCollege]=useState(0)
    const[location,setLocation]=useState(0)
    const[student,setStudent]=useState(0)
    const[admission,setAdmission]=useState(0)
  
    useEffect(() => {
        const intervalId = setInterval(() => {
          // Increment counters until they reach 100
          setCollege((prevCount) =>
            prevCount < 60 ? prevCount + 1 : prevCount
          );
          setLocation((prevCount) =>
            prevCount < 100 ? prevCount + 1 : prevCount
          );
          setStudent((prevCount) =>
            prevCount < 1500 ? prevCount + 10 : prevCount
          );
          setAdmission((prevCount) =>
            prevCount < 2500 ? prevCount + 10 : prevCount
           );
        }, 10); // Interval time in milliseconds
    
        // Clear interval on component unmount and when counters reach 100
        return () => clearInterval(intervalId);
      }, []);
    
  return (
    <>
    <section class="experience sc-bg-left" id="sec-counter">
      <div class="container">
         <div class="row align-items-center">
            <div class="col-lg-7 col-md-12 pr-lg-5">
               <div class="sc-title-two sc-title-two-white sc-border-left w-100 mb-6">
                  <h4 class="cl-white">MBBS In Nepal</h4>
                  <h2 class="cl-white">Lorem ipsum dolor sit amet.</h2>
               </div>
               <div class="exp-detail">
                  <p class="cl-white">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolorem itaque molestiae unde maiores dignissimos sit minima odio. A, voluptatem.                  </p>
                  <div class="exp-list-wrap text-center mt-3">
                     <div class="row">
                        <div class="col-lg-6 col-md-6">
                           <div class="value-pin p-3">
                              <span class="countfect cl-white" data-num="999">{student}</span>
                              <p class="cl-lgreen">Happy Student</p>
                           </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                           <div class="value-pin p-3">
                              <span class="countfect cl-white" data-num="330">{college}</span>
                              <p class="cl-lgreen">Top  MBBS  College in Nepal</p>
                           </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                           <div class="value-pin p-3">
                              <span class="countfect cl-white" data-num="260">{admission}</span>
                              <p class="cl-lgreen">Admission 2024-2025</p>
                           </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                           <div class="value-pin p-3">
                              <span class="countfect cl-white" data-num="6">{location}</span>
                              <p class="cl-lgreen">Our Branches</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-lg-5 col-md-12">
               <div class="exp-img-wrap">
                  <img src={Md} alt=""  id="count-img"/>
               </div>
            </div>
         </div>
      </div>
   </section>
   <div className="mt-5">
      <hr />
   </div>
    </>
  )
}

export default Counter