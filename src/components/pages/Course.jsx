import React from 'react'
import {Link} from "react-router-dom"
import About from '../Layout/About'
import "./Course.css"
import Img from "../../assets/img-mbb.jpg"
import BannerSection from '../BannerSection'
import Subscribe from "../Layout/Subscribe"

const Course = () => {


   const handleMessageButtonClick = () => {
      // Replace 'your_message_here' with your desired message
      const message = encodeURIComponent('Hello! I want to Know more About MBBS');
  
      // Replace 'your_phone_number_here' with your phone number including country code
      const phoneNumber = '+91 9117213714';
      
      // Construct the WhatsApp URL
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  
      // Open WhatsApp in a new tab/window with the predefined message
      window.open(whatsappUrl, '_blank');
    };
  return (
   <>
   <BannerSection title="MBBS Course" name="MBBS Course"/>
   <About/>
   <div className="container" id="course-sec">
    <div className="row">
        <div className="col-lg-6">
        <h2><b>Why Study MBBS in Nepal?</b></h2>
        <p>It is generally every student's keen exception to seek admission for the higher studies in a
                            good college for the medical studies. Nowadays, an ever-increasing number of students will
                            seek after MBBS in the medical colleges of
                            Nepal. Nepal's medical colleges are beating out everyone else in students' inclination
                           
                            
                             </p>
                        <ul id="why-list">
                            <li> One of the real benefits of considering MBBS in Nepal is the expense factor. You will
                                track down that education expense is less when contrasted with a portion of India's
                                private medical schools. </li>
                            <li> You will find numerous medical colleges in Nepal perceived by MCI and worldwide bodies
                                like WHO. </li>
                            <li> The Medium of teaching in medical colleges in Nepal is English. So Indian students
                                won't have an issue in studying in the medical colleges of Nepal. </li>
                            <li> The nature of medical schooling in Nepal is excellent, and the Universities in this
                                nation have a fantastic foundation.</li>

                        </ul>

        </div>
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
    </div>
   </div>
   
<div className="container" id="course-sec">
    <div className="row">
        <div className="col-lg-6">

        <h2>MBBS in Nepal at a Glance</h2>
                  <table class="table table-bordered table-striped">
                     <tbody>
                        <tr>
                           <td><strong>Intake</strong></td>
                           <td>September</td>
                        </tr>
                        <tr>
                           <td><strong>Minimum Percentage Required</strong></td>
                           <td>60% in PCB</td>
                        </tr>
                        <tr>
                           <td><strong>NEET Requirement</strong></td>
                           <td>Yes With Qualifying Marks</td>
                        </tr>
                        <tr>
                           <td><strong>Entrance Exam</strong></td>
                           <td>Yes</td>
                        </tr>
                        <tr>
                           <td><strong>Processing Time</strong></td>
                           <td>90 Days</td>
                        </tr>
                        <tr>
                           <td><strong>Total Fees</strong></td>
                           <td>50 - 60 Lacs</td>
                        </tr>
                        <tr>
                           <td><strong>Living Cost in Nepal</strong></td>
                           <td>100 USD Per Month</td>
                        </tr>
                        <tr>
                           <td><strong>Duration</strong></td>
                           <td>6 Years</td>
                        </tr>
                        <tr>
                           <td><strong>Medium of Instruction</strong></td>
                           <td>English</td>
                        </tr>
                        <tr>
                           <td><strong>Top MBBS Universities in Nepal</strong></td>
                           <td>All Government &amp; Private University</td>
                        </tr>
                        <tr>
                           <td><strong>Recognition</strong></td>
                           <td>NMC and WHO Approved</td>
                        </tr>
                     </tbody>
                  </table>
        </div>
        <div className="col-lg-6">
 <img src={Img} alt="" id="img-mbbs" />
        </div>
    </div>
</div>

{/* <div className="container">
<div className="row">
    <div className="col-lg-6">
    <h4>Syllabus for MBBS in Nepal</h4>
    <table className="table table-bordered table-striped" style={{ width: '100%' }}>
      <tbody>
        <tr>
          <td style={{ width: '5.98291%' }}><strong>Year</strong></td>
          <td style={{ width: '15.5949%' }}><strong>Semesters</strong></td>
          <td style={{ width: '74.8325%' }}><strong>Subjects Covered</strong></td>
        </tr>
        <tr>
          <td style={{ height: '27px' }}>1<sup>st</sup></td>
          <td style={{ height: '27px' }}>1<sup>ST</sup> – 2<sup>nd</sup> Sem.</td>
          <td style={{ height: '27px' }}>Clinical exposure, Communication Skills, Integrated Basic Medical Science, Community Medicine</td>
        </tr>
        <tr>
          <td style={{ height: '21.1677px' }}>2<sup>nd</sup></td>
          <td style={{ height: '21.1677px' }}>3<sup>rd</sup> - 4<sup>th</sup> Sem.</td>
          <td style={{ height: '21.1677px' }}>Integrated Basic Medical Science Clinical Exposure & Communication Skills</td>
        </tr>
        <tr>
          <td style={{ height: '40px' }}>3<sup>rd</sup></td>
          <td style={{ height: '40px' }}>5<sup>th</sup> – 6<sup>th</sup> Sem.</td>
          <td style={{ height: '40px' }}>Surgery, Internal Medicine, Gynaecology, Disciplines of Forensic Medicine, Obstetrics and Paediatrics, Community Medicine (Applied Epidemiology, Family Health Exercise)</td>
        </tr>
        <tr>
          <td style={{ height: '24px' }}>4<sup>th</sup></td>
          <td style={{ height: '24px' }}>7<sup>th</sup> - 8<sup>th</sup> Sem.</td>
          <td style={{ height: '24px' }}>Clinical Subjects</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div className="col-lg-6">
    <h4>Scope after completing MBBS in Nepal</h4>
<ul id="why-list"> 
<li>Various P.G. options are available after MBBS in Nepal.</li>
<li>Students can opt for an M.D. in forensic science.</li>
<li>Students can pursue Masters's in Physiology, Pharmacology, or Microbiology.</li>
<li>Pathology, Ear and nose treatment, surgery, and other degrees are also available for you to pursue.</li>
<li>Students can come back to India to practice medicine. But, for that, you will need to pass the NMC screening test.</li>
<li>Various international hospitals and nursing homes can appoint you.</li>
<li>You can study hospital management.</li>
<li>You can choose to start your chamber.</li>
<li>Students can come back to India to practice medicine. But, for that, you will need to pass the NMC screening test.</li>
<li>Various international hospitals and nursing homes can appoint you.</li>
<li>You can study hospital management.</li>
<li>You can choose to start your chamber.</li>
</ul>
    </div>
</div>
</div> */}

<div className="container">
    <div className="row">
        <div className="col-lg-6">
        <h4 id="Documents-required-for-MBBS-in-Nepal">Documents Required for MBBS in Nepal</h4>
<ul id="why-list"> 
<li>Birth certificate of the medical candidate.</li>
<li>10th and 10+2-mark sheets of the medical candidate.</li>
<li>School leaving certificate.</li>
<li>Certificate of conduct.</li>
<li>Medical fit certificate.</li>
<li>Nationality proof in the form of Aadhar card, PAN card, voter I.D., or any other valid I.D. proof.</li>
<li>NEET scorecard result is mandatory, which the student must present during the time of admission.</li>
<li>Indian students are required to have a legal and valid Indian passport along with other vital documents.</li>
<li>For Indian students, there is no requirement to give a visa.</li>
<li>The university might ask for other vital documents. The students need to gather and submit them at the time of admission.</li>
</ul>


        </div>
        <div className="col-lg-6">
<h4 id="Admission-Procedure-for-MBBS-in-Nepal">Admission Procedure for MBBS in Nepal</h4>
<ol>
<li>Every university in Nepal may have a different criterion for mbbs, and the process of admission may differ.</li>
<li>Although, the admission procedure is easy and transparent</li>
<li>Some of the changes are noticeably described in further points.</li>
<li>Some of the universities conduct no entrance examination for MBBS admission in Nepal.</li>
<li>Students can take Direct Admission in Top Universities in Nepal.</li>
<li>However, some other universities conduct exams, and students have to qualify in order to secure admission.</li>
</ol>
</div>
    </div>
</div>

<div className="container">
   <div className="row">
      <div className="col-lg-12">
         <div className="course-btn">
            <button className="btn btn-primary">Apply Now </button>
            <button onClick={handleMessageButtonClick} className="whatsapp-button">Whatsapp</button>
            <Link to="tel:+91 9117213714" className="btn btn-info">Call Now</Link>
         </div>
      </div>
   </div>
</div>


<div className="container" id="course-sec">
   <div className="row">
      <div className="col-lg-12">
      <h3 id="MBBS-Fees-structure">MBBS in Nepal Fees Structure 2024-2025</h3>
<table class="table table-striped table-bordered" border="1">
<tbody>
<tr>
<td><strong>Name of the University</strong></td>
<td><strong>Recognition</strong></td>
<td><strong>Tuition Fees For 5 Years</strong></td>
</tr>
<tr>
<td>KIST Medical College</td>
<td>Tribhuvan University</td>
<td>45 to 55 Lakh</td>
</tr>
<tr>
<td>National Medical College</td>
<td>Tribhuvan University</td>
<td>60 to 65 Lakh</td>
</tr>
<tr>
<td>Devdaha Medical College</td>
<td>Kathmandu University</td>
<td>50 to 55 Lakh</td>
</tr>
<tr>
<td>Nepalganj Medical College</td>
<td>Kathmandu University</td>
<td>55 to 60 Lakh</td>
</tr>
<tr>
<td>Chitwan Medical College</td>
<td>Tribhuvan University</td>
<td>50 to 60 Lakh</td>
</tr>
<tr>
<td>Birat Medical College &amp; Teaching Hospital</td>
<td>Kathmandu University</td>
<td>50 to 60 Lakh</td>
</tr>
<tr>
<td>Manipal College of Medical Sciences</td>
<td>Kathmandu University</td>
<td>55 to 65 Lakh</td>
</tr>
<tr>
<td>Lumbini Medical College &amp; Research Center</td>
<td>Kathmandu University</td>
<td>50 to 60 Lakh</td>
</tr>
<tr>
<td>B.P. Koirala Institute of Health Sciences</td>
<td>-</td>
<td>40 to 50 Lakh</td>
</tr>
<tr>
<td>Institute of Medicine</td>
<td>Tribhuvan University</td>
<td>40 to 50 Lakh</td>
</tr>
<tr>
<td>Nobel Medical College</td>
<td>Kathmandu University</td>
<td>50 to 60 Lakh</td>
</tr>
<tr>
<td>Gandaki Medical College</td>
<td>Tribhuvan University</td>
<td>50 to 60 Lakh</td>
</tr>
<tr>
<td>Janaki Medical College</td>
<td>Tribhuvan University</td>
<td>45 to 55 Lakh</td>
</tr>
<tr>
<td>Kathmandu Medical College</td>
<td>Kathmandu University</td>
<td>50 to 60 Lakh</td>
</tr>
<tr>
<td>Nepal Medical College &amp; Teaching Hospital</td>
<td>Kathmandu University</td>
<td>50 to 60 Lakh</td>
</tr>
<tr>
<td>Universal College of Medical Sciences</td>
<td>Tribhuvan University</td>
<td>55 to 65 Lakh</td>
</tr>
<tr>
<td>Kathmandu University School of Medical Sciences</td>
<td>Kathmandu University</td>
<td>45 to 55 Lakh</td>
</tr>
<tr>
<td>Kathmandu National Medical College</td>
<td>Kathmandu University</td>
<td>45 to 55 Lakh</td>
</tr>
</tbody>
</table>

      </div>
   </div>
</div>



<div className="container" id="course-sec">
   <div className="row">
      <div className="col-lg-7">
      <h4>MBBS Course Subjects</h4>
      <p>
        MBBS course deals with theoretical and practical knowledge on medical branches such as Anatomy, Biochemistry, Physiology, Pharmacology, Community Medicine, Dermatology and Venereology, Surgery, Orthopaedics etc. Detailed information about MBBS Syllabus can be found in the table below:
      </p>
      <div className="table-responsive">
      <table className="table table-striped style_table">
        <tbody>
          <tr>
            <th colSpan="2" id="course-he" style={{ textAlign: 'center' }}>Semesters 1-2 (Pre-Clinical)</th>
          </tr>
          <tr>
            <td>Anatomy</td>
            <td>Biochemistry</td>
          </tr>
          <tr>
            <td>Physiology</td>
            <td>N/A</td>
          </tr>
          <tr>
            <th colSpan="2" id="course-he" style={{ textAlign: 'center' }}>Semesters 3-5 (Para Clinical)</th>
          </tr>
          <tr>
            <td>Community Medicine</td>
            <td>Forensic Medicine</td>
          </tr>
          <tr>
            <td>Pathology</td>
            <td>Pharmacology</td>
          </tr>
          <tr>
            <td>Pharmacology</td>
            <td>Microbiology</td>
          </tr>
          <tr>
            <td>Clinical postings in Wards</td>
            <td>OPD</td>
          </tr>
          <tr>
            <th colSpan="2"  id="course-he" style={{ textAlign: 'center' }}>Semesters 6-9 (Clinical)</th>
          </tr>
          <tr>
            <td>Community Medicine</td>
            <td>Medicine and allied subjects</td>
          </tr>
          <tr>
            <td>Obstetrics and Gynaecology</td>
            <td>Paediatrics</td>
          </tr>
          <tr>
            <td>Surgery and allied subjects</td>
            <td>Clinical postings</td>
          </tr>
        </tbody>
      </table>
    </div>
 
      </div>
      <div className="col-lg-5" >
      <h5 class="border-bt-dash border-light-c2 pb-1" id="eli"> MBBS  Admission 2023: Eligibility Criteria</h5>
                        <ul id="elii">
                           <li><i class="fas fa-angle-double-right cl-green"></i> Candidates must have Physics, Chemistry, and Biology/Biotechnology in class 11 and class 12.</li>
                           <li><i class="fas fa-angle-double-right cl-green"></i> They must secure a minimum of 50% aggregate score in all of the three subjects in class 11 and class 12.</li>
                           <li><i class="fas fa-angle-double-right cl-green"></i> Candidates belonging to the reserved category (SC/ST/OBC) are offered 5 –&nbsp;10%relaxation in the aggregate as per the college seat reservation criteria.</li>
                           <li><i class="fas fa-angle-double-right cl-green"></i> Class 12 appearing students are also eligible, provided they submit the final passing certificate at the time of admission.</li>
                           <li> <i class="fas fa-angle-double-right cl-green"></i> The minimum age limit is 17 years as of December 31, 2023.</li>
                           <li><i class="fas fa-angle-double-right cl-green"></i> Class 12 appearing students are also eligible, provided they submit the final passing certificate at the time of admission.</li>
                           <li> <i class="fas fa-angle-double-right cl-green"></i> The minimum age limit is 17 years as of December 31, 2023.</li>
                           <li><i class="fas fa-angle-double-right cl-green"></i> Class 12 appearing students are also eligible, provided they submit the final passing certificate at the time of admission.</li>
                           <li> <i class="fas fa-angle-double-right cl-green"></i> The minimum age limit is 17 years as of December 31, 2023.</li>
                        </ul>
      </div>
   </div>
</div>


<div className="container">
   <div className="row">
      <div className="col-lg-12">
      <h4 id="b1">Specialization in MBBS</h4>
      <div class="table-responsive"><table class="table table-striped style_table" id="table-striped">
	<tbody>
		<tr  id="table-striped">
			<td  id="table-striped">Anaesthesiology</td>
			<td  id="table-striped">Anesthesiology is the medical specialty that administers anesthesia and manages patients' vital functions during surgery and other procedures.</td>
		</tr>
		<tr>
			<td>ENT</td>
			<td>ENT (Ear, Nose, and Throat) is a medical specialty that focuses on the diagnosis and treatment of conditions affecting the ears, nose, throat, head, and neck.</td>
		</tr>
		<tr>
			<td>Dermatology</td>
			<td>It is the branch of medicine focused on diagnosing and treating conditions related to the skin, hair, and nails.</td>
		</tr>
		<tr>
			<td>Orthopedics</td>
			<td>Orthopedics focuses on the diagnosis, treatment, and prevention of disorders and injuries related to the musculoskeletal system, including bones, joints, muscles, ligaments, tendons, and nerves.</td>
		</tr>
		<tr>
			<td>Ophthalmology</td>
			<td>Ophthalmology is concerned with the diagnosis and treatment of disorders and diseases of the eye.</td>
		</tr>
		<tr>
			<td>General Surgery</td>
			<td>General surgery involves the surgical treatment of a wide range of conditions affecting the abdomen, digestive system, endocrine system, breast, skin, and soft tissues, among others.</td>
		</tr>
		<tr>
			<td>Psychiatry</td>
			<td>Psychiatry is a branch of medicine that deals with mental health issues, like depression, anxiety, and schizophrenia, through therapy, medication, or a combination of both.</td>
		</tr>
		<tr>
			<td>Paediatrics</td>
			<td>It focuses on the health and medical care of infants, children, and adolescents, typically up to 18.</td>
		</tr>
		<tr>
			<td>General Medicine</td>
			<td>It involves the diagnosis, treatment, and prevention of a wide range of illnesses and health conditions in adults.</td>
		</tr>
		<tr>
			<td>Obstetrics &amp; Gynaecology</td>
			<td>It deals with the health of the female reproductive system, including pregnancy, childbirth, and disorders of the reproductive organs.</td>
		</tr>
	</tbody>
</table></div>

      </div>
   </div>
</div>

<div className="container">
   <div className="row">
      <div className="col-lg-12">
      <h4 id="13"><strong>What after MBBS?</strong></h4>
      <p ><strong><Link target="_blank">Courses after MBBS</Link></strong> provide advanced skills and knowledge about any specific specialization in the medical field. Courses after MBBS include both medical and non-medical courses. MD, MS, and MBA are the top courses after MBBS.&nbsp;</p>

      </div>
      <div className="row">
      <div className="col-lg-12">
    

    
    <div class="table-responsive"><table class="table table-striped style_table">
       <tbody>
          <tr>
             <th id="after-head">Course</th>
             <th id="after-head">Description</th>
             <th id="after-head">Top Colleges</th>
             <th id="after-head">Average Fees (INR)</th>
          </tr>
          <tr>
             <td>MS Course</td>
             <td>MS or <strong><Link  target="_blank">Master of Surgery</Link></strong> is a master-level program lasting for 2 years which can only be done after MBBS. Candidates gain knowledge as well as skills regarding surgical pieces of training.&nbsp;</td>
             <td><Link  target="_blank">Top MS Colleges</Link></td>
             <td>10,000 - 5,00,000</td>
          </tr>
          <tr>
             <td>MD Course</td>
             <td>MD or <strong><Link  target="_blank">Doctor of Medicine</Link> </strong>course is the most pursued program after MBBS degree. Candidates in this course explore the ways of studying, preventing, diagnosing, and treating various adult diseases.&nbsp;</td>
             <td><Link  target="_blank">Top MD Colleges</Link></td>
             <td>1,00,000 - 2,00,000</td>
          </tr>
          <tr>
             <td>MBA</td>
             <td>Numerous candidates pursue the <strong><Link target="_blank">MBA course</Link> </strong>after an MBBS degree, to explore knowledge in a variety of fields. It is primarily a 2-year master's level degree where students learn various management skills.&nbsp;</td>
             <td><Link target="_blank">Top MBA Colleges</Link></td>
             <td>2,00,000 - 20,000</td>
          </tr>
       </tbody>
    </table></div>
    
    
          </div>
      </div>
      
   </div>
</div>
<div className="container">
<div className="row">
   <div className="col-lg-6">
   <h4 id="14"><strong>MBBS Jobs and Scope</strong></h4>

<p >MBBS graduates have several job opportunities in the field of medicine. They have the option to work in the government or private sector. The detailed salary of each type of doctor is given below:</p>

       <table class="table table-striped style_table">
	<tbody>
		<tr>
			<th>Job Roles</th>
			<th>Average Salary</th>
		</tr>
		<tr>
			<td><Link  target="_blank">General Physician</Link></td>
			<td>INR 8 - 15 LPA</td>
		</tr>
		<tr>
			<td><Link target="_blank">Dermatologist</Link></td>
			<td>INR 6 - 7 LPA</td>
		</tr>
		<tr>
			<td><Link  target="_blank">Epidemiologist</Link></td>
			<td>INR 5 - 13 LPA</td>
		</tr>
		<tr>
			<td><Link  target="_blank">Pathologist</Link></td>
			<td>INR 17 - 20 LPA</td>
		</tr>
		<tr>
			<td><Link  target="_blank">Dentist</Link></td>
			<td>INR 5 - 9 LPA</td>
		</tr>
		<tr>
			<td><Link  target="_blank">Occupational Therapist</Link></td>
			<td>INR 2 - 4 LPA</td>
		</tr>
		<tr>
			<td><Link  target="_blank">Ayurvedic Doctor</Link></td>
			<td>INR 6 - 10 LPA</td>
		</tr>
		<tr>
			<td><Link  target="_blank">Medical Officer</Link></td>
			<td>INR 6 - 8 LPA</td>
		</tr>
		<tr>
			<td><Link  target="_blank">Odontologist</Link></td>
			<td>INR 5 - 8 LPA</td>
		</tr>
		<tr>
			<td><Link target="_blank">Cardiologist</Link></td>
			<td>INR 5 - 15 LPA</td>
		</tr>
	</tbody>
</table>
   </div>
    {/* <div className="col-lg-6">
      <h4>FAQ </h4>
    <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
   </div>  */}
</div>
</div>
<Subscribe/>
   </>  )
}

export default Course