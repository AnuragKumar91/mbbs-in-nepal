import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./BannerSection.css"



const BannerSection = (props) => {
  return (
  <>
   <div
        className="it-breadcrumb-area it-breadcrumb-bg"
        style={{ backgroundImage: `url(${props.img})` }}
      >
        <div className="container">
          <div className="row ">
            <div className="col-md-12">
              <div className="it-breadcrumb-content z-index-3 text-center">
                <div className="it-breadcrumb-title-box">
                  <h3 className="it-breadcrumb-title">{props.title}</h3>
                </div>
                <div className="it-breadcrumb-list-wrap">
                  <div className="it-breadcrumb-list">
                    <span>
                      <Link>Home</Link>
                    </span>
                    <span className="dvdr">/</span>
                    <span>{props.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default BannerSection