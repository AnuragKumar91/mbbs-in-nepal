import React from 'react'
import "./Mbbs.css"
import StudyIcon from "../../assets/stu-icon.png"
import EligiIcon from "../../assets/eligi-icon.png"
import PrepIcon from "../../assets/prerp-icon.png"
import BenfeIcon from  "../../assets/bene-icon.png" 
import StudyCard from '../StudyCard'
const MbbsCard = () => {
  return (
   <>
   <section id="sec-mbbs">
    
    <div className="container">
    <h4 className="mb-3">Feature  of MBBS Admission  in Nepal</h4>
        <div className="row" id="card-container">
            {/* <div className="col-lg-3">
                <div className="card"  id="mbbs-card">
                    <img src={StudyIcon} alt=""  className="icon__css"/>
                    <h2 id="mbbs-head">Study in Top MBBS College in Nepal </h2>
                    <p className="mbbs-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aspernatur totam amet iure similique eaque aperiam libero necessitatibus tempora incidunt!</p>
                     <button className="btn btn-primary">Read More</button>
                </div>
            </div> */}


            <StudyCard icon={StudyIcon} heading="Study in Top MBBS College in Nepal" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aspernatur totam amet iure similique eaque aperiam libero necessitatibus tempora incidunt!"/>
            <StudyCard icon={EligiIcon} heading="Eligibilty Criteria to Study MBBS in Nepal " description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aspernatur totam amet iure similique eaque aperiam libero necessitatibus tempora incidunt!"/>
            <StudyCard icon={BenfeIcon} heading="Benefits of Study MBBS in Nepal" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aspernatur totam amet iure similique eaque aperiam libero necessitatibus tempora incidunt!"/>
            <StudyCard icon={PrepIcon} heading="Preparation Tips of MBBS in Nepal " description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aspernatur totam amet iure similique eaque aperiam libero necessitatibus tempora incidunt!"/>

            {/* <div className="col-lg-3">
                <div className="card"  id="mbbs-card">
                <img src={EligiIcon} alt=""  className="icon__css"/>
                    <h2 id="mbbs-head">Eligibilty Criteria to Study MBBS in Neapl </h2>
                    <p className="mbbs-para"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aspernatur totam amet iure similique eaque aperiam libero necessitatibus tempora incidunt!</p>
                    <button className="btn btn-primary">Read More</button>
                </div>
            </div>
            <div className="col-lg-3" >
                <div className="card" id="mbbs-card">
                <img src={BenfeIcon}alt=""  className="icon__css"/>
                    <h2 id="mbbs-head" >Benefits of Study MBBS in Nepal</h2>
                    <p className="mbbs-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aspernatur totam amet iure similique eaque aperiam libero necessitatibus tempora incidunt!</p>
                    <button className="btn btn-primary">Read More</button>
                </div>
            </div>

            <div className="col-lg-3">
                <div className="card"  id="mbbs-card">
                <img src={PrepIcon} alt="" className="icon__css" />
                    <h2 id="mbbs-head">Preparation Tips of MBBS in Nepal </h2>
                    <p className="mbbs-para">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aspernatur totam amet iure similique eaque aperiam libero necessitatibus tempora incidunt!</p>
                    <button className="btn btn-primary">Read More</button>
                </div>
            </div> */}
        </div>
    </div>
   </section>
   
   </>
  )
}

export default MbbsCard