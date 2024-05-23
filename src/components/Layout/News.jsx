import React, { useRef } from "react";
import "./News.css"
import Horn from "../../assets/megaphone.png";
import gif from "../../assets/new.gif";
const News = () => {
  const marqueeRef = useRef(null);

  const handleMouseOver = () => {
    marqueeRef.current.stop();
  };

  const handleMouseOut = () => {
    marqueeRef.current.start();
  };
  return (
    <>
      <div class="container-fluid" id="news">
        {/* <div id="headertext">Notice</div> */}
      

        <div>
          <marquee
      style={{  color: 'rgb(221 3 3)' }}
            ref={marqueeRef}
                    behavior="scroll"
                    direction="left"
                    scrollamount="7"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    id="scroll-news"
          >
            Breaking News or Scrolling text using Marquee in Blogger
            |&nbsp;&nbsp;&nbsp; Breaking News or Scrolling text using Marquee in
            Blogger​ |&nbsp;&nbsp;&nbsp; Breaking News or Scrolling text using
            Marquee in Blogger |&nbsp;&nbsp;&nbsp;
          </marquee>
        </div>
      </div>
    </>
  );
};

export default News;
