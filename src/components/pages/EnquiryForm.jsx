import React from 'react'
import TopImg from "../../assets/top-10.jpeg"
const EnquiryForm = () => {
  return (
    <>
    <section>
       
    <div className="container-fluid" id="sec-en">
   
    <div className="row">
        
         <div className="col-lg-6" id="en-form">
         <h4 style={{textAlign:"center"}}>Enquiry Now</h4>
         <div className="mb-3">
    <input type="name" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Enter your name"/>

  <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Enter your email"/>
  <input type="number" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Enter your number"/>

</div>
<div className="mb-3">
  
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
  <button className="btn btn-danger mb-3  mt-4" >Submit</button>
</div>
         </div>
         <div className="col-lg-6">
            <img src={TopImg} alt="" id="form-img" />
         </div>
    </div>
      
        </div>
    </section>
   
 
   
    
    
    </>
  )
}

export default EnquiryForm