import React from 'react'
import CourseCard from '../CourseCard'
import "./Course.css"
import CardioIcon from "../../assets/cardio-icon.png"

const Course = () => {
  return (
    <>
    <section id="section-course">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 " id="course"> <h4>Know More About Subject</h4></div>
                <div className="row"  >
                <CourseCard icon={CardioIcon} name="Cardiology" para="Explore the field of cardiology and its significance in the medical world."/>
                <CourseCard icon={CardioIcon} name="Cardiology" para="Explore the field of cardiology and its significance in the medical world."/>

                <CourseCard icon={CardioIcon} name="Cardiology" para="Explore the field of cardiology and its significance in the medical world."/>

                <CourseCard icon={CardioIcon} name="Cardiology" para="Explore the field of cardiology and its significance in the medical world."/>

                </div>
               
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Course