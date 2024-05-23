import React from "react";
import "../components/Layout/Blog.css"
import { Link } from "react-router-dom";
const BlogCard = (props) => {
  return (
    <>
  {/* <div className="col-lg-4">
      <div className="card" style={{ width: "20rem" }} >
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.para}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">10 May,2024</li>
          
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
           Read More
          </a>
         
        </div>
      </div>
    </div> */}

    
<div className="col-xl-4 col-lg-4 col-md-6 mb-30" id="blog-wid">
              <div
                className="it-blog-item-box"
                style={{ backgroundImage: `url(${props.bg})` }}
              >
                <div className="it-blog-item">
                  <div className="it-blog-thumb fix">
                    <Link>
                    <img src={props.Blog1} alt="BlogI"
                    />
                    </Link>
                  </div>
                  <div className="it-blog-meta pb-15">
                    <span>
                      <i className="fa-solid fa-calendar-days"></i>
                      14 June 2023</span
                    >
                    <span>
                      <i className="fa-light fa-messages"></i>
                      Comment (06)</span
                    >
                  </div>
                  <h4 className="it-blog-title">
                    <Link> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, sequi.
                    </Link>
                  </h4>
                <Link className="btn btn-info">
                <span>
                      Read more

                      {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                    </span>
                </Link>
                </div>
              </div>
            </div>
    </>
  );
};

export default BlogCard;
