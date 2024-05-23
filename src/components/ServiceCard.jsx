import React from 'react'

const ServiceCard = (props) => {
  return (
    <>
     <div className="col-lg-3 sm-6">
                        <div className="card" id="ser-card">
                            <h2 id="ser-head">{props.heading}</h2>
                            <p>{props.para}</p>
                            <button class="btn btn-primary">Apply Now</button>
                        </div>
                    </div>
    </>
  )
}

export default ServiceCard