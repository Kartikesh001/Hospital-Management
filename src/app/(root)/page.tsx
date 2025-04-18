import ContentSection from "../componenets/contentsection";
import HeroSection from "../componenets/herosection";
import React from 'react'
import SliderSection from "../componenets/slidersection";
import Footer from "../componenets/footer";

const page = () => {
  return (
    <div> 
        <HeroSection/>
      <ContentSection/>
      <SliderSection/>
      <Footer/>
      
      {/* <HeroSection/> */}
    </div>
  )
}

export default page
