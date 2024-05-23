import React from "react";
import BlogCard from "../BlogCard";
import BlogImg from "../../assets/blogImg.jpg"
import BlogImg1 from "../../assets/bg-1.jpg"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Blog = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
{/* <div className="it-blog-area pt-90 pb-90">
        <div className="container">
          <div className="it-blog-title-wrap mb-80">
            <div className="row align-items-end">
              <div className="col-xl-8 col-lg-8 col-md-8">
                <div className="it-blog-title-box">
                  <h4 className="it-section-title">
                Latest Blog
                    
                  </h4>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="it-blog-button text-start text-md-end">
                </div>
              </div>
            </div>
          </div>
          <div className="row">
          <Carousel responsive={responsive}>
      
          <BlogCard bg={BlogImg1} Blog1={BlogImg} />
          <BlogCard bg={BlogImg1} Blog1={BlogImg} />
          <BlogCard bg={BlogImg1} Blog1={BlogImg} />
          
          <BlogCard bg={BlogImg1} Blog1={BlogImg} />
          <BlogCard bg={BlogImg1} Blog1={BlogImg} />
          <BlogCard bg={BlogImg1} Blog1={BlogImg} />
          </Carousel>
          </div>
          
        </div>
      </div> */}
      <div className="container">
  <div className="row">
    <div className="col-md-6  full-content">
      <h2 className="section-title no-border v-3 mb-5">
        <span >Latest   Blog</span>
      </h2>
      {/* <p className="sub-section-title v-2">
        Etiam congue rhoncus gravida. Sed vel sodales tortor. Donec eget dictum
        enim. Donec tempus euismod metus ac maximus, aenean mattis.
      </p> */}
      <div className="mrb-45"></div>
      {/* /.mrb */}
    </div>
    {/* /.col-md-12 */}
  </div>
  {/* /.row */}

  <div className="row">
    <div className="col-12">
      <div className="row">
      <Carousel responsive={responsive}>
      
      <div className="col-md-6 col-xl-4">
          <article className="post">
            <div className="article-v2">
              <figure className="article-thumb">
                <Link href="#">
                  <img
                    src={BlogImg}                    alt="blog image"
                  />
                </Link>
              </figure>
              {/* /.article-thumb */}
              <div className="article-content-main">
                <div className="article-header">
                  <h2 className="entry-title">
                    <p >The day you become better.</p>
                  </h2>
                  <div className="entry-meta">
                    <div className="entry-date">July 25,2017</div>
                    {/* /.entry-date */}
                    <div className="entry-cat">
                      <Link href="#">Halie Rose</Link>
                    </div>
                    {/* /.entry-cat */}
                  </div>
                  {/* /.entry-meta */}
                </div>
                {/* /.article-header */}
                <div className="article-content">
                  <p>
                    Maecenas tempus, tellus eget anyti condimentum rhoncus, sem
                    quam.
                  </p>
                </div>
                {/* /.article-content */}
                <div className="article-footer">
                  <div className="row">
                    <div className="col-6 text-left footer-link">
                      <Link href="#" className="more-link">
                        Read More
                      </Link>
                    </div>
                    {/* /.col-6 */}
                    <div className="col-6 text-right footer-meta">
                      <Link href="#">
                        65 <FontAwesomeIcon icon={faComment} />
                      </Link>
                      {/* <a href="#">
                        50 <i className="pe-7s-share"></i>
                      </a> */}
                    </div>
                    {/* /.col-6 */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.article-footer */}
              </div>
              {/* /.article-content-main */}
            </div>
            {/* /.article-v2 */}
          </article>
          {/* /.post */}
        </div>
        <div className="col-md-6 col-xl-4">
          <article className="post">
            <div className="article-v2">
              <figure className="article-thumb">
                <Link href="#">
                  <img
                    src={BlogImg}
                    alt="blog image"
                  />
                </Link>
              </figure>
              {/* /.article-thumb */}
              <div className="article-content-main">
                <div className="article-header">
                  <h2 className="entry-title">
                    <p >The day you become better.</p>
                  </h2>
                  <div className="entry-meta">
                    <div className="entry-date">July 25,2017</div>
                    {/* /.entry-date */}
                    <div className="entry-cat">
                      <Link href="#">Halie Rose</Link>
                    </div>
                    {/* /.entry-cat */}
                  </div>
                  {/* /.entry-meta */}
                </div>
                {/* /.article-header */}
                <div className="article-content">
                  <p>
                    Maecenas tempus, tellus eget anyti condimentum rhoncus, sem
                    quam.
                  </p>
                </div>
                {/* /.article-content */}
                <div className="article-footer">
                  <div className="row">
                    <div className="col-6 text-left footer-link">
                      <Link href="#" className="more-link">
                        Read More
                      </Link>
                    </div>
                    {/* /.col-6 */}
                    <div className="col-6 text-right footer-meta">
                      <Link href="#">
                        65 <FontAwesomeIcon icon={faComment} />
                      </Link>
                      {/* <a href="#">
                        50 <i className="pe-7s-share"></i>
                      </a> */}
                    </div>
                    {/* /.col-6 */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.article-footer */}
              </div>
              {/* /.article-content-main */}
            </div>
            {/* /.article-v2 */}
          </article>
          {/* /.post */}
        </div>
        <div className="col-md-6 col-xl-4">
          <article className="post">
            <div className="article-v2">
              <figure className="article-thumb">
                <Link href="#">
                  <img
                    src={BlogImg}
                    alt="blog image"
                  />
                </Link>
              </figure>
              {/* /.article-thumb */}
              <div className="article-content-main">
                <div className="article-header">
                  <h2 className="entry-title">
                    <p>The day you become better.</p>
                  </h2>
                  <div className="entry-meta">
                    <div className="entry-date">July 25,2017</div>
                    {/* /.entry-date */}
                    <div className="entry-cat">
                      <Link href="#">Halie Rose</Link>
                    </div>
                    {/* /.entry-cat */}
                  </div>
                  {/* /.entry-meta */}
                </div>
                {/* /.article-header */}
                <div className="article-content">
                  <p>
                    Maecenas tempus, tellus eget anyti condimentum rhoncus, sem
                    quam.
                  </p>
                </div>
                {/* /.article-content */}
                <div className="article-footer">
                  <div className="row">
                    <div className="col-6 text-left footer-link">
                      <Link href="#" className="more-link">
                        Read More
                      </Link>
                    </div>
                    {/* /.col-6 */}
                    <div className="col-6 text-right footer-meta">
                      <Link href="#">
                        65 <FontAwesomeIcon icon={faComment} />
                      </Link>
                      {/* <a href="#">
                        50 <i className="pe-7s-share"></i>
                      </a> */}
                    </div>
                    {/* /.col-6 */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.article-footer */}
              </div>
              {/* /.article-content-main */}
            </div>
            {/* /.article-v2 */}
          </article>
          {/* /.post */}
        </div>
        <div className="col-md-6 col-xl-4">
          <article className="post">
            <div className="article-v2">
              <figure className="article-thumb">
                <Link href="#">
                  <img
                    src={BlogImg}
                    alt="blog image"
                  />
                </Link>
              </figure>
              {/* /.article-thumb */}
              <div className="article-content-main">
                <div className="article-header">
                  <h2 className="entry-title">
                    <p>The day you become better.</p>
                  </h2>
                  <div className="entry-meta">
                    <div className="entry-date">July 25,2017</div>
                    {/* /.entry-date */}
                    <div className="entry-cat">
                      <Link href="#">Halie Rose</Link>
                    </div>
                    {/* /.entry-cat */}
                  </div>
                  {/* /.entry-meta */}
                </div>
                {/* /.article-header */}
                <div className="article-content">
                  <p>
                    Maecenas tempus, tellus eget anyti condimentum rhoncus, sem
                    quam.
                  </p>
                </div>
                {/* /.article-content */}
                <div className="article-footer">
                  <div className="row">
                    <div className="col-6 text-left footer-link">
                      <Link href="#" className="more-link">
                        Read More
                      </Link>
                    </div>
                    {/* /.col-6 */}
                    <div className="col-6 text-right footer-meta">
                      <Link href="#">
                        65 <FontAwesomeIcon icon={faComment} />
                      </Link>
                      {/* <a href="#">
                        50 <i className="pe-7s-share"></i>
                      </a> */}
                    </div>
                    {/* /.col-6 */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.article-footer */}
              </div>
              {/* /.article-content-main */}
            </div>
            {/* /.article-v2 */}
          </article>
          {/* /.post */}
        </div>
      </Carousel>
     
       
      </div>
    
    </div>
   
  </div>
 
</div>
<div className="mt-5">
<hr />
</div>

    </>
  );
};

export default Blog;
