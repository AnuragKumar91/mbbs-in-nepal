import React from 'react'
import BannerSection from '../BannerSection'
import "./BlogPage.css"
import Blog from '../Layout/Blog'
import News from '../Layout/News'
import Subscribe from '../Layout/Subscribe'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Img from "../../assets/blogImg.jpg"
import { faAngleRight, faArrowRight, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons'

const BlogPage = () => {
  return (
    <>
    <BannerSection title="Blog" name="Blog"/>
    <News/>
    <div className="postbox__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 mb-40">
              <div className="postbox__details-wrapper">
                <div className="postbox__thumb-box mb-80">
                  <div className="postbox__main-thumb mb-30">
                    <img
                      src={Img}
                      alt="blog-sidebar"
                    />
                  </div>
                  <div className="postbox__content-box">
                    <div className="postbox__meta">
                      <span>
                      <FontAwesomeIcon icon={faCalendar} /> April 21,
                        2023
                      </span>
                      <span>
                      <FontAwesomeIcon icon={faUser} /> Alamgir Chowdhuri
                      </span>
                    </div>
                    <h4 className="postbox__details-title">
                      <Link>
                        Curabitur at fermentum purus. Interdum et malesuada
                        fames ac ante ipsum
                      </Link>
                    </h4>
                    <Link className="it-btn mt-15">
                      <span>
                        read more
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="custom-icon"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
                <br />
                <div className="postbox__thumb-box mb-80">
                  <div className="postbox__main-thumb mb-30">
                    <img
                      src={Img}
                      alt="blog-sidebar"
                    />
                  </div>
                  <div className="postbox__content-box">
                    <div className="postbox__meta">
                      <span>
                      <FontAwesomeIcon icon={faCalendar} /> April 21,
                        2023
                      </span>
                      <span>
                      <FontAwesomeIcon icon={faUser} />Alamgir Chowdhuri
                      </span>
                    </div>
                    <h4 className="postbox__details-title">
                      <Link>
                        Curabitur at fermentum purus. Interdum et malesuada
                        fames ac ante ipsum
                      </Link>
                    </h4>
                    <Link className="it-btn mt-15">
                      <span>
                        read more
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="custom-icon"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
                <br />
                <div className="postbox__thumb-box mb-80">
                  <div className="postbox__main-thumb mb-30">
                    <img
                      src={Img}
                      alt="blog-sidebar"
                    />
                  </div>
                  <div className="postbox__content-box">
                    <div className="postbox__meta">
                      <span>
                      <FontAwesomeIcon icon={faCalendar} /> April 21,
                        2023
                      </span>
                      <span>
                      <FontAwesomeIcon icon={faUser} />Alamgir Chowdhuri
                      </span>
                    </div>
                    <h4 className="postbox__details-title">
                      <Link>
                        Curabitur at fermentum purus. Interdum et malesuada
                        fames ac ante ipsum
                      </Link>
                    </h4>
                    <Link className="it-btn mt-15">
                      <span>
                        read more
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="custom-icon"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="it-sv-details-sidebar">
                {/* <div className="it-sv-details-sidebar-search mb-55">
                  <input type="text" placeholder="search" />
                  <button type="submit">
                    <i className="fal fa-search"></i>
                  </button>
                </div> */}
                <div className="it-sv-details-sidebar-widget mb-55">
                  <h4 className="it-sv-details-sidebar-title mb-30">
                    Quick Link
                  </h4>
                  <div className="it-sv-details-sidebar-category mb-10">
                  MBBS exam 
                    <span>
                    <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </div>
                  <div className="it-sv-details-sidebar-category active mb-10">
                  MBBS
                    <span>
                    <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </div>
                  <div className="it-sv-details-sidebar-category mb-10">
                  MBBS
                    <span>
                    <FontAwesomeIcon icon={faAngleRight} />                    </span>
                  </div>
                  <div className="it-sv-details-sidebar-category mb-10">
                  MBBS
                    <span>
                    <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </div>
                  <div className="it-sv-details-sidebar-category mb-10">
                  MBBS
                    <span>
                    <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </div>
                  <div className="it-sv-details-sidebar-category mb-10">
                  MBBS
                    <span>
                    <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </div>
                </div>
                <div className="sidebar__widget mb-55">
                  <div className="sidebar__widge-title-box">
                    <h3 className="sidebar__widget-title pb-10">Recent Post</h3>
                  </div>
                  <div className="sidebar__widget-content">
                    <div className="sidebar__post">
                      <div className="rc__post mb-30 d-flex align-items-start">
                        <div className="rc__post-thumb mr-20">
                          <Link>
                            <img
                              src={Img}
                              alt="blog-sidebar"
                              className="sidebar-img"
                            />
                          </Link>
                        </div>
                        <div className="rc__post-content">
                          <div className="rc__meta">
                            <span>
                              <i className="fa-solid fa-calendar-days"></i>14
                              June 2023
                            </span>
                          </div>
                          <h3 className="rc__post-title">
                            <Link>
                              Interdum velit laoreet id donec ultrices tincidunt
                              arcu.
                            </Link>
                          </h3>
                        </div>
                      </div>
                      <div className="rc__post mb-30 d-flex align-items-start">
                        <div className="rc__post-thumb mr-20">
                          <Link>
                            <img
                              src={Img}
                              alt="blog-sidebar"
                              className="sidebar-img"
                            />
                          </Link>
                        </div>
                        <div className="rc__post-content">
                          <div className="rc__meta">
                            <span>
                              <i className="fa-solid fa-calendar-days"></i>14
                              June 2023
                            </span>
                          </div>
                          <h3 className="rc__post-title">
                            <Link>
                              Interdum velit laoreet id donec ultrices tincidunt
                              arcu.
                            </Link>
                          </h3>
                        </div>
                      </div>
                      <div className="rc__post mb-30 d-flex align-items-start">
                        <div className="rc__post-thumb mr-20">
                          <Link>
                            <img
                              src={Img}
                              alt="blog-sidebar"
                              className="sidebar-img"
                            />
                          </Link>
                        </div>
                        <div className="rc__post-content">
                          <div className="rc__meta">
                            <span>
                              <i className="fa-solid fa-calendar-days"></i>14
                              June 2023
                            </span>
                          </div>
                          <h3 className="rc__post-title">
                            <Link>
                              Interdum velit laoreet id donec ultrices tincidunt
                              arcu.
                            </Link>
                          </h3>
                        </div>
                      </div>
                      <div className="rc__post mb-30 d-flex align-items-start">
                        <div className="rc__post-thumb mr-20">
                          <Link>
                            <img
                              src={Img}
                              alt="blog-sidebar"
                              className="sidebar-img"
                            />
                          </Link>
                        </div>
                        <div className="rc__post-content">
                          <div className="rc__meta">
                            <span>
                              <i className="fa-solid fa-calendar-days"></i>14
                              June 2023
                            </span>
                          </div>
                          <h3 className="rc__post-title">
                            <Link>
                              Interdum velit laoreet id donec ultrices tincidunt
                              arcu.
                            </Link>
                          </h3>
                        </div>
                      </div>
                      <div className="rc__post mb-30 d-flex align-items-start">
                        <div className="rc__post-thumb mr-20">
                          <Link>
                            <img
                              src={Img}
                              alt="blog-sidebar"
                              className="sidebar-img"
                            />
                          </Link>
                        </div>
                        <div className="rc__post-content">
                          <div className="rc__meta">
                            <span>
                              <i className="fa-solid fa-calendar-days"></i>14
                              June 2023
                            </span>
                          </div>
                          <h3 className="rc__post-title">
                            <Link>
                              Interdum velit laoreet id donec ultrices tincidunt
                              arcu.
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="it-sv-details-sidebar-widget">
                  <h4 className="it-sv-details-sidebar-title mb-30">
                    Popular Tag:
                  </h4>
                  <div className="sidebar__widget-content">
                    <div className="tagcloud">
                      <Link>Balance</Link>
                      <Link>Coaching</Link>
                      <Link>Motivation</Link>
                      <Link>Courses</Link>
                      <Link>Life Guide</Link>
                      <Link>Strategy</Link>
                      <Link>Education</Link>
                      <Link>Coach</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-xl-12">
              <div className="it-pagination">
                <nav>
                  <ul>
                    <li>
                      <Link>1</Link>
                    </li>
                    <li>
                      <Link>2</Link>
                    </li>
                    <li>
                      <Link>3</Link>
                    </li>
                    <li>
                      <Link className="color">
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    <Subscribe/>
   
    </>
  )
}

export default BlogPage