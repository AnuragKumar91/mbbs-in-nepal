import React, { useState } from 'react'
import BannerSection from '../BannerSection'
import "./Collegelist.css"
import {collegelist} from '../../constant'
import collegeImg from "../../assets/mbbs_nepal-3.jpg"
import EnquiryForm from './EnquiryForm'
import Pie from './Pie'
import NirfImg from "../../assets/nirf.jpg"
import FaqPage from './FaqPage'
import Sponsor from "../Layout/Sponsor"
import Subscribe from "../Layout/Subscribe"

const FilterSection = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="filter-card">
      <h5 onClick={toggleDropdown} className="dropdown-header">
        {title} <span className={`dropdown-icon ${isOpen ? 'open' : ''}`}>▼</span>
      </h5>
      {isOpen && (
        <ul className="filter-list">
          {options.map((option, index) => (
            <li key={index}>
              <label>
                <input type="radio" name={title} value={option} />
                {option}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
const Collegelist = () => {
  
  const filters = {
    Stream: ['MBBS', 'BDS', 'BAMS', 'BPharm'],
    Degree: ['Bachelor', 'Master', 'Doctorate'],
    State: ['Bagmati', 'Gandaki', 'Lumbini', 'Karnali', 'Sudurpaschim'],
    City: ['Kathmandu', 'Pokhara', 'Biratnagar', 'Lalitpur', 'Bhaktapur'],
    StudyMode: ['Full-time', 'Part-time', 'Distance'],
    Specialization: ['General Medicine', 'Surgery', 'Pediatrics', 'Obstetrics and Gynecology', 'Psychiatry'],
    InstituteType: ['Public', 'Private'],
    ExamMode: ['Online', 'Offline'],
    Hostel: ['Boys Hostel', 'Girls Hostel']
  };

  return (
   <>
   <BannerSection title=" MBBS List of College in nepal" name=" MBBS List of College in Nepal"/>
   

   {/* <div className="container-fluid" id="sec-college">
    <div className="row">
        <div className="col-lg-6" id="college-card">
            <p className="college-para"> <strong>Top 10 Medical Colleges in Nepal:</strong> Many students have been drawn to this study area since they were young. The best choice for Indian students is to study MBBS in Nepal. We know how close Nepal is to India and how friendly the two nations are. Students can easily study MBBS in Nepal. Because of this, Nepal has long been the top choice for medical aspirants. In Nepal, enrolling in medical school is possible without paying tuition or taking an entrance exam. Medical colleges in Nepal provide MBBS programmes for far less money than those in India.

.</p>
            <ul id="colleg-list">
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>

            </ul>
        </div>
        <div className="col-lg-6">
             <img src={collegeImg} alt="" /> 
        </div>
    </div>
</div> */}

{/* <div class="table-container">
  <h4 >List of Top MBBS Colleges in Nepal</h4>
  <table class="mbbs-colleges-table">
    <thead>
      <tr>
        <th>College Name</th>
        <th>Total Seats</th>
        <th>Cut-off 2023</th>
        <th>Average Fee (INR)</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
{collegelist.map(college=>(
    <tr key={college.name}>
     <td>{college.name}</td>
                <td>{college.totalseat}</td>
                <td>{college.Cutoff2023}</td>
                <td>{college.fee}</td>
                <td><button className="btn btn-primary">Apply Now</button></td>
    </tr>
))}
      
      
    </tbody>
  </table>
</div> */}


{/* <div className="elementor-widget-container">
  <h2 className="elementor-heading-title elementor-size-default">Eligibility For MBBS in Nepal</h2>
</div> */}



{/* <div className="elementor-element elementor-element-7debf48 elementor-widget elementor-widget-text-editor" data-id="7debf48" data-element_type="widget" data-widget_type="text-editor.default">
  <div className="elementor-widget-container">
    <table style={{ width: "100%" }}>
      <tbody>
        <tr>
          <td>Completed 17 years of age, and Completed 10+2 years of education or Intermediate of Science or equivalent, with English, Biology, Physics and Chemistry as main subjects and he/she must have passed in all the subjects mentioned above, securing not less than 50% of marks in the subjects mentioned above put together and also obtain an aggregate of 50% overall.</td>
        </tr>
        <tr>
          <td>Completed B.Sc. degree recognized by the university with one of the following subjects viz. Physics, Chemistry, Biology and at least one other prescribed science subject of study up to the ancillary level and he/she should have scored not less than aggregate of 50% marks; provided that such candidate shall have passed the earlier qualifying examination (10+2 or an equivalent examination) with the subjects Physics, Chemistry, Biology and English.</td>
        </tr>
        <tr>
          <td>Candidate should be qualified under NEET-UG</td>
        </tr>
        <tr>
          <td>The students must be studied in English medium or at least they had English as a subject.</td>
        </tr>
        <tr>
          <td>Valid Indian passport</td>
        </tr>
        <tr>
          <td>Valid NMC certificate.</td>
        </tr>
        <tr>
          <td>You are not qualified MBBS in Nepal without NEET. You can also participate in Nepal Medical Entrance exam.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div> */}

{/* 
<EnquiryForm/> */}


{/* <div className="quick-fact"> 
   <h4>Quicks Fact About MBBS College in Nepal</h4>
   <div className="table-responsive">
  <table className="table table-bordered align-middle">
    <tbody>
      <tr>
        <td style={{ background: "#fff3cd", borderBottom: "1px solid #c7d1db" }}><strong>Total Medical College</strong></td>
        <td>21</td>
      </tr>
      <tr>
        <td style={{ background: "#fff3cd", borderBottom: "1px solid #c7d1db" }}><strong>College Type</strong></td>
        <td>Govt &amp; Private Both</td>
      </tr>
      <tr>
        <td style={{ background: "#fff3cd", borderBottom: "1px solid #c7d1db" }}><strong>Degree Awarded</strong></td>
        <td>MBBS</td>
      </tr>
      <tr>
        <td style={{ background: "#fff3cd", borderBottom: "1px solid #c7d1db" }}><strong>Duration</strong></td>
        <td>4.5 Yrs + 1 Yr of Internship</td>
      </tr>
      <tr>
        <td style={{ background: "#fff3cd", borderBottom: "1px solid #c7d1db" }}><strong>Eligibility Criteria</strong></td>
        <td>Current Year NEET Qualified of GEN Category, PCB 50% or Above</td>
      </tr>
      <tr>
        <td style={{ background: "#fff3cd", borderBottom: "1px solid #c7d1db" }}><strong>Total MBBS Seats</strong></td>
        <td>1800</td>
      </tr>
      <tr>
        <td style={{ background: "#fff3cd", borderBottom: "1px solid #c7d1db" }}><strong>Seats for Foreign Students</strong></td>
        <td>540</td>
      </tr>
      <tr>
        <td style={{ background: "#fff3cd", borderBottom: "1px solid #c7d1db" }}><strong>Indian Students</strong></td>
        <td>2300 ( Across All years)</td>
      </tr>
      <tr>
        <td style={{ background: "#fff3cd", borderBottom: "1px solid #c7d1db" }}><strong>Total Budegt for MBBS</strong></td>
        <td>55-60 Lacs</td>
      </tr>
      <tr>
        <td style={{ background: "#fff3cd", borderBottom: "1px solid #c7d1db" }}><strong>Licensing Exam for Indian Students</strong></td>
        <td>Permitted</td>
      </tr>
      <tr>
        <td style={{ background: "#fff3cd", borderBottom: "1px solid #c7d1db" }}><strong>Meeting NMC Criteria</strong></td>
        <td>Yes</td>
      </tr>
      <tr>
        <td style={{ background: "#fff3cd", borderBottom: "1px solid #c7d1db" }}><strong>Total Subjects in MBBS</strong></td>
        <td>19</td>
      </tr>
      <tr>
        <td style={{ background: "#fff3cd", borderBottom: "1px solid #c7d1db" }}><strong>Medical college Recognition</strong></td>
        <td>NMC/ECFMG/WHO/ GMC UK</td>
      </tr>
      <tr>
        <td style={{ background: "#fff3cd", borderBottom: "1px solid #c7d1db" }}><strong>Study Pattern</strong></td>
        <td>
          1st Year -Pre Clinical<br />
          2 Year -Para Clinical<br />
          3-4.5 Year -Clinical
        </td>
      </tr>
      <tr>
        <td style={{ background: "#fff3cd", borderBottom: "1px solid #c7d1db" }}><strong>Session Starts</strong></td>
        <td>December</td>
      </tr>
    </tbody>
  </table>
</div>

</div>
   */}
  
{/* <Pie/> */}

{/* <div className="container">
<h4>Top MBBS Colleges in India with NIRF Ranking 2023 </h4>
  <div className="row">
   
    <img src={NirfImg} alt=""  id="nirf-img"/>
  </div>
</div> */}


{/* <section id="faq-sec">
<FaqPage/>
</section> */}

{/* <Sponsor/>
<Subscribe/> */}
 <section className='mt-5'>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            {Object.keys(filters).map((filterKey) => (
              <FilterSection key={filterKey} title={filterKey} options={filters[filterKey]} />
            ))}
          </div>
          <div className="col-md-9">
            <div className="college-card">
              <div className="card-image">
                <img src="https://via.placeholder.com/150" alt="College Logo" />
              </div>
              <div className="card-content">
                <h5>College Name</h5>
                <p>Rating: 4.5/5 (100 reviews)</p>
                <p>Mode: Full-time</p>
                <p>Fees: Rs. 50,000 - 2,00,000 per year</p>
                <p>Average Package: Rs. 4,00,000 per year</p>
                <button className="btn btn-primary">Exam</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
   </>
  )
}

export default Collegelist