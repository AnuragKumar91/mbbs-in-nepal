import React from 'react';

const StudyCard=(props)=>{
 return(
    <>
     <div className="col-lg-3">
                <div className="card"  id="mbbs-card">
                    <img src={props.icon} alt=""  className="icon__css"/>
                    <h2 id="mbbs-head">{props.heading} </h2>
                    <p className="mbbs-para">{props.description}</p>
                     <button className=" btn btn-info w-100">Read More</button>
                </div>
            </div>
    
    </>
 )
}

export default StudyCard;