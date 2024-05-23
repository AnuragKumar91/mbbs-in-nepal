import React from 'react'
import MediImg2 from "../../assets/medi-2.jpeg"
import "./Topmbbs.css"
import CollegeCard from '../CollegeCard'
import { Link } from 'react-router-dom'
const TopMbbs = () => {
  return (
    <>
   <section class="services-layout2 services-carousel ">

         <div class="container">
            <div class="row">
               <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              
               </div>
            </div>
            <div class="row">
               
            <h4 className="h-coll  text-md-start">Top MBBS College in Nepal</h4>
      <div className="  col-md-12 d-flex justify-content-md-end justify-content-center mt-5 mt-md-0" >
        <Link className="btn btn-dark " to="">View All MBBS College List</Link>
      </div>
               <CollegeCard Img ={MediImg2} collegeTitle="Kathmandu Medical College" year="1997" location="Kathmandu,Nepal"/>
               <CollegeCard  Img ={MediImg2} collegeTitle="Lumbini Medical College" year="2009" location="Tansen ,Nepal"/>
               <CollegeCard  Img ={MediImg2} collegeTitle="National Medical College" year="2001" location="Birgunj, Nepa"/>
               <CollegeCard  Img ={MediImg2} collegeTitle="Manipal College of Medical Sciences" year="1994
" location=" Pokhara, Nepal"/>
               <CollegeCard  Img ={MediImg2} collegeTitle="Nepal Army Institute of Health Sciences" year="1925" location="Kathmandu ,Nepal"/>
               <CollegeCard  Img ={MediImg2} collegeTitle="Lumbini Medical College" year="2009" location="Tansen ,Nepal"/>
               <CollegeCard  Img ={MediImg2} collegeTitle="Lumbini Medical College" year="2009" location="Tansen ,Nepal"/>
               <CollegeCard  Img ={MediImg2} collegeTitle="Lumbini Medical College" year="2009" location="Tansen ,Nepal"/>
              
            </div>
            <div class="row">
               {/* <div class="col-md-12">
                  <center><Link class="btn btn-primary" href="college-list.php"> View All  MBBS  College List </Link></center>
               </div> */}
               <div className="col-md-12 " style={{ display: 'flex',justifyContent: 'center' }}>
               <Link className="btn btn-dark " to="">View All MBBS College List</Link>
               </div>
               <div className="mt-4">
               <hr />
               </div>
               
                
            </div>
         </div>
      </section>
    </>
  )
}

export default TopMbbs