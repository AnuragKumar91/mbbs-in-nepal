import React from 'react'
import "./Sponsor.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Collegelogo from "../../assets/IIMT-University.jpg"
const Sponsor = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <>
    <section id="sec-sponsor">
        <div className="container">
        <h4 id="spon-head">Top University & Colleges  in  Nepal</h4>

            <div className="row">
               
            <Carousel responsive={responsive} >
                <div className="item">
                <div className="col-lg-3">
                  
                        <img src={Collegelogo} alt=""  id="spon-img"/>
                  
                </div>
                </div>
                <div className="item">
                <div className="col-lg-3">
                   
                        <img src={Collegelogo} alt=""  id="spon-img" />
                    </div>
                
                </div>
                <div className="item">
                <div className="col-lg-3">
                   
                        <img src={Collegelogo} alt=""   id="spon-img"/>
                    
                </div>
                </div>
                <div className="item">
                <div className="col-lg-3">
                    
                        <img src={Collegelogo} alt=""   id="spon-img"/>
                   
                </div>
                </div>
                <div className="item">
                <div className="col-lg-3">
                   
                        <img src={Collegelogo} alt=""   id="spon-img"/>
                   
                </div>
                </div>
                <div className="item">
                <div className="col-lg-3">
                   
                        <img src={Collegelogo} alt=""   id="spon-img"/>
                   
                </div>
                </div>
                </Carousel>

              
            </div>
        </div>
    </section>
    <div className="mt-5">
      <hr />
    </div>
    </>
  )
}

export default Sponsor