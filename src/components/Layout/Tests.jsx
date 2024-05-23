import React from 'react'
import Md from "../../assets/md.jpg"
import "./test.css"
import { Link } from 'react-router-dom'
const Tests = () => {
  return (
 <>
   {/* <section class="experience sc-bg-left">
      <div class="container">
         <div class="row align-items-center">
            <div class="col-lg-7 col-md-12 pr-lg-5">
               <div class="sc-title-two sc-title-two-white sc-border-left w-100 mb-6">
                  <h4 class="cl-white">MBBS In Nepal</h4>
                  <h2 class="cl-white">Lorem ipsum dolor sit amet.</h2>
               </div>
               <div class="exp-detail">
                  <p class="cl-white">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolorem itaque molestiae unde maiores dignissimos sit minima odio. A, voluptatem.                  </p>
                  <div class="exp-list-wrap text-center mt-3">
                     <div class="row">
                        <div class="col-lg-6 col-md-6">
                           <div class="value-pin p-3">
                              <span class="countfect cl-white" data-num="999"></span>
                              <p class="cl-lgreen">Happy Student</p>
                           </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                           <div class="value-pin p-3">
                              <span class="countfect cl-white" data-num="330"></span>
                              <p class="cl-lgreen">Top  MBBS  College in Nepal</p>
                           </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                           <div class="value-pin p-3">
                              <span class="countfect cl-white" data-num="260"></span>
                              <p class="cl-lgreen">Admission 2024-2025</p>
                           </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                           <div class="value-pin p-3">
                              <span class="countfect cl-white" data-num="6">6</span>
                              <p class="cl-lgreen">Our Branches</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-lg-5 col-md-12">
               <div class="exp-img-wrap">
                  <img src={Md} alt=""  id="count-img"/>
               </div>
            </div>
         </div>
      </div>
   </section> */}


   

<div class="container bootstrap snippets bootdey">
    <section id="team" class="white-bg padding-top-bottom">
		<div class="container bootstrap snippets bootdey">
			<h1 class="section-title text-center page-title">Meet our team</h1>
			<p class="section-description text-center">We are a small team with great skills. See the faces behind the lines of code. </p>	
			<div class="row member-content">
				<div class="col-sm-3 col-sm-offset-1 member-thumb  fade-right in">
					<img class="img-responsive img-center img-thumbnail img-circle" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""/>
					<h4>John Doe</h4>
					<p class="title">Lead Designer &amp; Founder</p>
				</div>
				<div class="col-sm-7">
					<div class="details">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						<ul class="social-content">
							<li><Link href="mailto:mail@example.com"><i class="fa fa-envelope fa-fw"></i></Link></li>
							<li><Link href="#link"><i class="fa fa-twitter fa-fw"></i></Link></li>
							<li><Link href="#link"><i class="fa fa-facebook fa-fw"></i></Link></li>
							<li><Link href="#link"><i class="fa fa-linkedin fa-fw"></i></Link></li>
						</ul>
					</div>
				</div>
			</div>
			
			<div class="row member-content right">
				<div class="col-sm-3 col-sm-push-8 member-thumb">
					<img class="img-responsive img-center img-thumbnail img-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt=""/>
					<h4>John Doe</h4>
					<p class="title">Designer</p>
				</div>
				<div class="col-sm-7 col-sm-pull-2">
					<div class="details">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						<ul class="social-content">
							<li><Link href="mailto:mail@example.com"><i class="fa fa-envelope fa-fw"></i></Link></li>
							<li><Link href="#link"><i class="fa fa-twitter fa-fw"></i></Link></li>
							<li><Link href="#link"><i class="fa fa-facebook fa-fw"></i></Link></li>
							<li><Link href="#link"><i class="fa fa-linkedin fa-fw"></i></Link></li>
						</ul>
					</div>
				</div>
			</div>
			
			<div class="row member-content">
				<div class="col-sm-3 col-sm-offset-1 member-thumb">
					<img class="img-responsive img-center img-thumbnail img-circle" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
					<h4>John Doe</h4>
					<p class="title">Lead Developer</p>
				</div>
				<div class="col-sm-7   ">
					<div class="details">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						<ul class="social-content">
							<li><Link href="mailto:mail@example.com"><i class="fa fa-envelope fa-fw"></i></Link></li>
							<li><Link href="#link"><i class="fa fa-twitter fa-fw"></i></Link></li>
							<li><Link href="#link"><i class="fa fa-facebook fa-fw"></i></Link></li>
							<li><Link href="#link"><i class="fa fa-linkedin fa-fw"></i></Link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>    
</div>                    
CSS 

 </>
  )
}

export default Tests