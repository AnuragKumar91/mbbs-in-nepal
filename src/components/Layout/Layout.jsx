import React from "react";
import Banner from "./Banner";
import About from "./About";
import TopMbbs from "./TopMbbs";
import Service from "./Service";
import Counter from "./Counter";
import StudentReview from "./StudentReview";
import Blog from "./Blog";
import Subscribe from "./Subscribe";
import Study from "./Study";
import Sponsor from "./Sponsor";
import MbbsCard from "./MbbsCard";
import News from "./News";
import Faq from "./Faq";
import Tests from "./Tests";
import Type from "./Type";
import Course from "./Course";
import Ban from "./Ban";

const Layout = () => {
  return (
    <>
      <Banner />
      <News />
      <MbbsCard />
      <TopMbbs />
      <About />
      <Course />
      <Ban />
      <Study />
       {/* <Type /> */}

      <Sponsor />

      <Service />
      <Counter />
    
      <StudentReview />
      <Faq/>

      <Blog />

      {/* <Subscribe/>  */}
    </>
  );
};

export default Layout;
