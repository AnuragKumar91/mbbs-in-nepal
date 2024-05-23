import React from 'react'
import SliderImg1 from "../../assets/slider.jpg"
import SliderImg2 from "../../assets/slider1.jpeg"
import "./Banner.css"
const Banner = () => {
  return (
   <>
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={SliderImg2} class="d-block w-100" alt="..." id="banner-img"/>
    </div>
     <div class="carousel-item" data-bs-interval="2000">
      <img src={SliderImg2} class="d-block w-100" alt="..." id="banner-img"/>
    </div>
    <div class="carousel-item">
      <img src={SliderImg2} class="d-block w-100" alt="..." id="banner-img"/>
    </div> 
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

  {/* Form over slider images */}
   {/* <form className="position-absolute top-50 end-0 translate-middle slider-form" style={{ zIndex: 100 }} >
    <h3 className="mb-3 slider-heading">Enquiry Form</h3>

        <div className="mb-3">
         
          <input type="text" className="form-control" id="name" name="name"  placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          
          <input type="email" className="form-control" id="email"  name="name"  placeholder="Enter your email"/>
        </div>
        <div className="mb-3">
          <input type="tel" className="form-control" id="phone" name="name"  placeholder="Enter your number" />
        </div>
        <div className="mb-3">
          
          <input type="number" className="form-control" id="passingYear"  name="name"  placeholder="Enter your passing year.."/>
        </div>
        <button type="submit" className="btn btn-primary form-control">Submit</button>
      </form>  */}
</div>



  

   </>
  )
}

export default Banner