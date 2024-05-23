import React from 'react'
import "./AboutNepal.css"
import BannerSection from "../BannerSection"
import NepalFlag from "../../assets/nepal-flag1.png"
import g from "../../assets/g.jpg"
import g1 from "../../assets/g1.jpg"
import g2 from "../../assets/g2.jpg"
import g3 from "../../assets/g3.jpg"
import g4 from "../../assets/g4.jpg"
import g5 from "../../assets/g5.jpg"
import g6 from "../../assets/g6.jpg"
import g7 from "../../assets/g7.jpg"
import FaqPage from './FaqPage'
const AboutNepal = () => {
  return (
   <>
   <BannerSection title="About Nepal" name="About Nepal"/>
   <div className="container" id="course-sec">
    <div className="row">
        <div className="col-lg-6" >
            <h4>About Nepal</h4>
            <p>Nepal is a country between the mountain ranges. It is a landlocked nation situated between India toward the east. Its domain expands approximately 500 miles (800 kilometers) from east to west and 90 to 150 miles from north to south. The capital is Kathmandu.</p>
         <br />
         
         <p>Because of its long periods of geographic and deliberate confinement, Nepal is one of the world's most un-created countries. Numerous nations, including India, China, the United States, the United Kingdom, Japan, Denmark, Germany, Canada, and Switzerland, have provided financial help to Nepal. The degree of unfamiliar guide to Nepal has been affected to an impressive degree by India and China's actual situation.</p>
        
        </div>
        <div className="col-lg-6">
            <img src={NepalFlag} alt="" id="nepal-flag"/>
        </div>
    </div>
   </div>

   <div className="container">
    <div className="row">
        <div className="col-lg-12">
        {/* <h4>About Nepal</h4> */}
<table class="table table-bordered table-striped" border="1">
<tbody>
<tr>
<td><strong>Capital</strong></td>
<td>Kathmandu</td>
</tr>
<tr>
<td><strong>Official Language</strong></td>
<td>Nepali</td>
</tr>
<tr>
<td><strong>English Speaking Population</strong></td>
<td>Approx. 30%</td>
</tr>
<tr>
<td><strong>Minimum Temperature</strong></td>
<td>7 degree C</td>
</tr>
<tr>
<td><strong>Maximum Temperature</strong></td>
<td>Exceed 40 degree C</td>
</tr>
<tr>
<td><strong>Currency</strong></td>
<td>Nepalese Rupee</td>
</tr>
<tr>
<td><strong>Boundaries Shared By</strong></td>
<td>Nepalis surrounded by India to the threesides- south, east, and west and by China</td>
</tr>
<tr>
<td><strong>Exchange Rates to INR</strong></td>
<td>1 Nepalese Rupee is equal to 0.63 Indian Rupee</td>
</tr>
<tr>
<td><strong>Time Difference from India</strong></td>
<td>Nepal is 15 minutes ahead of India</td>
</tr>
<tr>
<td><strong>Travel Time from Delhi to Nepal</strong></td>
<td>Approximately 1 hours 30 minutes (Non-Stop Flight)</td>
</tr>
<tr>
<td><strong>Religion</strong></td>
<td>Hinduism (Followed by 81.3% of people)</td>
</tr>
<tr>
<td><strong>Climate</strong></td>
<td>Influenced by Maritime and Continental Climate</td>
</tr>
<tr>
<td><strong>Population</strong></td>
<td>Approx. 2.93 crores</td>
</tr>
</tbody>
</table>

        </div>
    </div>
   </div>

   <div className="container" id="explore">
    <div className="row">
        <div className="col-lg-8">
        <h4>Let&rsquo;s Explore Nepal</h4>
<ul id="why-list">
<li>Kathmandu is the capital of Nepal.</li>   <br/>
<li>Nepali is considered to be the official language of Nepal.</li>   <br/>
<li>Approx. less than 40% of people in Nepal speak English also.</li>   <br/>
<li>Weather is nice in Nepal. The maritime and continental climate influences Nepal. The minimum temperature is 7 degrees Celsius and maximum temperature exceeding 40 degrees Celsius.</li>   <br/>
<li>Nepalese Rupee happens to be the currency of Nepal. 0.63 Indian Rupee amounts to 1 Nepalese Rupee.</li>   <br/>
<li>India and china are two of the countries which surround the country of Nepal.</li>   <br/>
<li>The country of Nepal is surrounded by India on three sides of the west, east, and south.</li>   <br/>
<li>The difference between India and Nepal is just 15 minutes. It takes about 1.5 hours to travel from one country to another.</li>   <br/>
<li>The people of Nepal practice Hinduism as their key religion and provides a home to many of the endangered species.</li>   <br/>
<li>Kathmandu is the capital of Nepal, which was once considered to be a lake.</li>   <br/>
<li>The country is situated in the laps of the Himalayas.</li>   <br/>
<li>Nepal has the second deepest canyon in the world, the Kali Gandaki. It is 4375 meters in depth.</li>   <br/>
</ul>
        </div>
    </div>
   </div>
   {/* <div className="container" id="key-nepal"> 
      <div className="row">
         <div className="col-lg-6">
            <h4> Key Features of MBBS in Nepal</h4>
            <ul id="why-list">
               <li> <strong>World-renowned Alumni:-</strong> Post Graduates from the reputed universities of  are working worldwide. Many students continued their higher courses in other countries after graduating from Kenya, and many are working in government medical colleges in India.</li>   <br/>
               <li> <strong>Global Affiliated, Accredited, and Recognised Universities:-</strong> All Universities that sheen stein edutech offer to the Indian Students in Nepalhave Global  recognition. Students passed from Nepal are qualified to appear for any  exams by other countries for PG seats.</li>   <br/>
               <li><strong>Practical Learning Experience:-</strong> The medical college curriculum in Nepal is similar to  India. Medical study in Nepalmainly focuses on practical knowledge. Many hospitals are available for Indian students to excel in their medical  profession in Kenya.</li>   <br/>
               <li> <strong>Universities with the Best Infrastructure:-</strong> Medical colleges offered by sheen stein edutech for  Mbbs in Nepal for Indian students have the best infrastructure. The  ambience that gives to the students is mesmerizing.</li>   <br/>
               <li> <strong>Course Duration:-</strong>  Most of the Medical Colleges in Nepal is have a course duration of 5  Years, and no compulsory internship in most of the medical colleges that  sheen stein edutech offer in Nepal.

</li>   <br/>
            </ul>
        

         </div>
         <div className="col-lg-6">
            <h4> Reasons to Choose Nepal For MBBS</h4>
        
       <ul id="why-list">
         <li> <strong>Affordable Cost University:-</strong> Main advantage of choosing Kenya for your MBBS study is  the low tuition fees in most universities. Students will get a high-quality education at an economical cost. Medical Study in Kenya is a cost-effective Medical Program.</li>   <br/>
         <li> <strong>World Wide Recognized University:- </strong>Medical colleges offered for Indian Students in Kenya  are recognized worldwide and have various accreditations and affiliations. Most medical colleges in Kenya feature global exposure; Ater graduation,  students can choose any country for Higher courses.</li>   <br/>
         <li> <strong>No Donation or Additional Charges:-</strong> None of the medical colleges in Kenya demand donation on or during your medical study. There won't be any hidden charges, or the university won't increase the tuition fees during your course (which may  change in the future).</li>   <br/>
         <li> <strong>Choice of Specialisation:-</strong> Medical students who graduated from Kenya medical colleges have many options to choose a wide range of courses for specialization after their undergraduate program for Post Graduation.</li>   <br/>
         <li> <strong> Technically Equipped Studies:- </strong>Classes in medical colleges of Kenya focuses on both theoretical and practical knowledge. Most of the universities in Kenya have highly developed equipment for studies, including anatomical tables.</li>   <br/>
       </ul>

         </div>
      </div>
   </div> */}
   <div id="content" className="site-content">

      <div className="wrapper hwrap">
 <main className="site-main" id="main">
 <article id="post-473" className="post-473 page type-page status-publish hentry">
  {/* Page/Post Single Image Disabled or No Image set in Post Thumbnail */}
  <div className="entry-container">
    <header className="entry-header">
      <h1 className="entry-title">Culture & Society of Nepal</h1>
    </header>
    {/* .entry-header */}
    <div className="entry-content">
      <hr />
      <p style={{ textAlign: "justify" }}>
        The <strong>culture of Nepal</strong> is rich and unique. The cultural heritage of Nepal has evolved over the centuries. This multi-dimensional heritage encompasses the diversities of Nepal's ethnic, tribal, and social groups, and it manifests in music and dance; art and craft; folklore and folktales; languages and literature; philosophy and religion; festivals and celebration; foods and drinks.
      </p>
      <h4 style={{ textAlign: "justify" }}><strong>Dance and music</strong></h4>
      <p style={{ textAlign: "justify" }}>
        Legends state that dances in the Indian subcontinent originated in the abode of Lord Shiva — the Himalayas and the Himalayan Kingdom of Nepal — where he performed the tandava dance. This indicates that dance traditions of Nepal are very ancient. With altitudes and ethnicity, the dances of Nepal slightly change in style as well as in the costumes. The Dishka, a dance performed at weddings, includes intricate footwork and arm movements. Accompanying music and musical instruments change in tune with the themes, which revolve around topics like harvesting of crops, marriage rites, war stories, a lonely girl’s yearning for her love, and several other themes and stories from everyday life in the villages.
      </p>
      <h4 style={{ textAlign: "justify" }}><strong>Languages and literature</strong></h4>
      <p style={{ textAlign: "justify" }}>
        As per the 2011 census, 123 languages are spoken in Nepal. Nepal's linguistic heritage has evolved from three major language groups: Indo-Aryan, Tibeto-Burman, and indigenous. The major languages of Nepal (percent spoken as mother tongue) are Nepali (44.6%), Maithili (11.7%), Bhojpuri (6%), Tharu (5.8%), Tamang (5.1%), Nepal Bhasa (3.2%), Magar (3%) and Bajjika (3%).
      </p>
      <p style={{ textAlign: "justify" }}>
        Nepali, written in Devanagari script, is the official national language and serves as <em>lingua franca</em> among Nepalese ethno-linguistic groups. Maithili language that was originated in Mithila region of Nepal is the de facto official language of Nepal and Madhesh as a whole. <strong>Maithili</strong> is spoken in Nepal as a second language. Extinct languages of Nepal include Kusunda, Madhesiya and Waling.
      </p>
      <h4 style={{ textAlign: "justify" }}><strong>Religions and philosophy</strong></h4>
      <p style={{ textAlign: "justify" }}>
        The 2001 census identified 80.6% of the population being Hindu. Buddhism was practiced by about 11% of the population (although many people labelled Hindu or Buddhist often practice a syncretic blend of Hinduism, Buddhism, and/or animist traditions). About 3.2% practice Islam and 3.6% of the population follows the indigenous Kirant religion. Christianity is practiced officially by less than 0.5%.
      </p>
      <p style={{ textAlign: "justify" }}>
        Hindu and Buddhist traditions in Nepal go back more than two millennia. In Lumbini, Buddha was born, and Pashupatinath temple, Kathmandu, is an old and famous Shiva temple of Hindus. Nepal has several other temples and Buddhist monasteries, as well as places of worship of other religious groups. Traditionally, Nepalese philosophical thoughts are ingrained with the Hindu and Buddhist philosophical ethos and traditions, which include elements of Kashmir Shaivism, Nyingma school of Tibetan Buddhism, works of Karmacharyas of Bhaktapur, and tantric traditions. Tantric traditions are deep rooted in Nepal, including the practice of animal sacrifices. Five types of animals, always male, are considered acceptable for sacrifice: water buffalo, goats, sheep, chickens, and ducks. Cows are very sacred animals and are never considered acceptable for sacrifice.
      </p>
      <h4 style={{ textAlign: "justify" }}><strong>Festivals and celebrations</strong></h4>
      <p style={{ textAlign: "justify" }}>
        Several of the festivals of Nepal last from one to several days. Dashain is the longest and the most important festival of Nepal. Generally Dashain falls in late September to mid-October, right after the end of the monsoon season. It is &#8220;a day of Victory over Demons&#8221;. The Newars celebrate the festival as Mohani. Tihar or Swanti and Chhath are another important festivals of Nepal. New Year's Day of the lunar calendar Nepal Sambat occurs at this time.
      </p>
      <p style={{ textAlign: "justify" }}>
        Other important festivals include Buddha Jayanti (the celebration of the birth of Buddha) Maha Shivaratri (a festival of Lord Shiva) and during Maha Shivaratri festivities, some people consume excessive drinks and smoke charas. Sherpas, mostly located at higher altitudes and in the Mount Everest region, celebrate <em>Mani Rimdu</em>, for <em>the good of the world</em>.
      </p>
      <p style={{ textAlign: "justify" }}>
        Most festivals include dancing and music, and a variety of foods are consumed during festivals and on special occasions.
      </p>
      <p style={{ textAlign: "justify" }}>
        The Sagan ceremony is the ritualized presentation of five food items (boiled egg, smoked fish, meat, lentil cake and rice wine) to a person which is done to bring good fortune as per Tantric tradition.
      </p>
      <h4 style={{ textAlign: "justify" }}><strong>Architecture and archeology</strong></h4>
      <p style={{ textAlign: "justify" }}>
        Nepal Sumpada Sangha (Nepal Heritage Society) has compiled an inventory of 1,262 significant architectural and archeological sites in Nepal outside Kathmandu Valley.
      </p>
    </div>
    {/* .entry-content */}
  </div>
  {/* .entry-container */}
</article>
 </main>
      </div>
 
   </div>

   <section id="gallery-section" >
    <div className="container">
        <div className="row">
            <div className="col-lg-12" id="gallery-text">
                <h4> <strong>Photo Gallery</strong></h4>
                <p >MBBS in Nepal : Practical Training, Classrooms</p>
            </div>
            <div className="row">
            <div className="col-lg-3">
                 <div className="card">
                    <img src={g} alt="" />
                 </div>
            </div>
            <div className="col-lg-3">
                 <div className="card">
                    <img src={g1} alt="" />
                 </div>
            </div>
            <div className="col-lg-3">
                 <div className="card">
                    <img src={g2} alt="" />
                 </div>
            </div>
            <div className="col-lg-3">
                 <div className="card">
                    <img src={g3} alt="" />
                 </div>
            </div>
            <div className="col-lg-3">
                 <div className="card">
                    <img src={g4} alt="" />
                 </div>
            </div>
            <div className="col-lg-3">
                 <div className="card">
                    <img src={g5} alt="" />
                 </div>
            </div>
            <div className="col-lg-3">
                 <div className="card">
                    <img src={g6} alt="" />
                 </div>
            </div>
            <div className="col-lg-3">
                 <div className="card">
                    <img src={g7} alt="" />
                 </div>
            </div>
            </div>
            
            
        </div>
    </div>
   </section>
   <section id="faq-sec">
<FaqPage/>
</section>
   </>
  )
}

export default AboutNepal