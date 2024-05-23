import React from 'react'
import "./Study.css"
const Study = () => {

  return (
    <>
       <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h4 className="mb-4">Why Study MBBS in Nepal</h4>
            <ul className="list-group mb-4">
              <li className="list-group-item"> <strong>Affordable Fees:</strong> The cost of studying MBBS in Nepal is relatively low compared to other countries. The tuition fees range from 50,000 to 60 lakhs, which is a significant reduction from the fees charged by medical colleges in India.</li>
              <li className="list-group-item"> <strong>Easy Admission Process:</strong> The admission process for MBBS in Nepal is straightforward and direct. Indian students can apply for admission through the NEET exam, and the admission process is usually completed within 90 days.</li>
              <li className="list-group-item"> <strong>Quality Education:</strong> Nepal has a well-established medical education system, with many medical colleges recognized by the Medical Council of India (MCI) and the World Health Organization (WHO).</li>
              <li className="list-group-item"> <strong>Cultural Experience:</strong> Nepal offers a unique cultural experience for Indian students, with a diverse culture, traditions, and natural beauty that enhances their educational journey.</li>
              <li className="list-group-item"> <strong>Cultural Experience:</strong> Nepal offers a unique cultural experience for Indian students, with a diverse culture, traditions, and natural beauty that enhances their educational journey.</li>

            </ul>
          </div>
          <div class="col-lg-4">
              <div class="enquiry-form p-4">
                  <h4 class="mb-4" id="form-head">Know About MBBS Course In Nepal</h4>
                  <form>
                      <div class="form-group">
                          <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
                      </div>
                      <div class="form-group">
                          <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
                      </div>
                      <div class="form-group">
                          <input type="number" class="form-control" id="number" placeholder="Enter your number"/>
                      </div>
                      <div class="form-group">
                          <textarea class="form-control" id="message" rows="5" placeholder="Message"></textarea>
                      </div>
                      <button type="submit" class="btn btn-info w-50" id="form-details">Submit Details</button>
                  </form>
              </div>
          </div>
        </div>
      </div>
    </section>
    <hr />
    </>
 

  )
}

export default Study
