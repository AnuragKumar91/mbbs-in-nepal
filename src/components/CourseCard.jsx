import React from 'react'

const CourseCard = (props) => {
  return (
<>
  <div className="col-lg-3">
  <div className="card" id="mbbs-card">
          <img src={props.icon} alt="" className="icon__css"/>
          <h2 id="mbbs-hea" className="course-name">{props.name}</h2>
          <p className="mbbs-para">{props.para}</p>
          <button className="btn btn-primary">Read More</button>
        </div>
  </div>

</>  )
}

export default CourseCard