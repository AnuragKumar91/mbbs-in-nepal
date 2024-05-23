import React from 'react';
import FaqComponent from "react-faq-component";
import imageSrc from "../../assets/nepal1-mbbs.jpg"; // Import your image here

const Faq = () => {
    // const data = {
    //     title: "FAQ (How it works)",
    //     rows: [
    //         {
    //             title: "Lorem ipsum dolor sit amet,",
    //             content: "Lorem ipsum dolor sit amet, consectetur"
    //         },
    //         {
    //             title: "Nunc maximus, magna at ultricies elementum",
    //             content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
    //         },
    //         {
    //             title: "Curabitur laoreet, mauris vel blandit fringilla",
    //             content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
    //         },
    //         {
    //             title: "What is the package version",
    //             content: "v1.0.0"
    //         }
    //     ]
    // };

    
    // const styles = {
       
    //     // Example styles for title and content
    //     bgColor:"#fff",
    //     titleTextColor: "#333",
    //     titleTextSize: "1rem",
    //     rowContentColor: "#3b6c4d",
    //     rowContentTextSize: "1em",
    //     rowContentPaddingTop: "10px",
    //     rowContentPaddingBottom: "10px",
        
    // };


    // const config = {
    //     animate: true,
    //     arrowIcon: "V",
    //     openOnload: 0,
    //     expandIcon: "+",
    //     collapseIcon: "-",
    // };
    return (

        <>
          {/* <div className="faq-container">
            <div className="faq-content">
                <FaqComponent data={data} styles={styles} />
            </div>
            <div className="faq-image">
                <img src={imageSrc} alt="Your Image"  />
            </div>
        </div> */}

        <div className="container">
            <div className="row">

            <div class="col-lg-6">
  <h3>FAQ</h3>

  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingfour">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
          Accordion Item #4
        </button>
      </h2>
      <div id="collapsefour" class="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the fourth item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    
  </div>
</div>

                <div className="col-lg-6 mt-5">
                <div className="faq-image ">
                <img src={imageSrc} alt="Your Image" className="img-fluid" />
            </div>
                </div>
            </div>
        </div>
        </>
      
    );
};

export default Faq;
