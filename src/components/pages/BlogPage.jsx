import React from 'react'
import BannerSection from '../BannerSection'
import "./BlogPage.css"
import Blog from '../Layout/Blog'
import News from '../Layout/News'
import Subscribe from '../Layout/Subscribe'

const BlogPage = () => {
  return (
    <>
    <BannerSection title="Blog" name="Blog"/>
    <News/>
    <div style={{marginTop:"20px"}}>
    <Blog/>
    </div>
    <Subscribe/>
   
    </>
  )
}

export default BlogPage