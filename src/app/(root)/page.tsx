import ContentSection from "../componenets/contentsection";
import HeroSection from "../componenets/herosection";
import React from 'react'
import SliderSection from "../componenets/slidersection";
import Footer from "../componenets/footer";
import CardInfoSection from "../componenets/cardinfo";

const page = () => {
  return (
    <div> 
            <HeroSection/>
      <ContentSection/>
      <CardInfoSection/>
      <SliderSection/>
      <Footer/>
      
      {/* <HeroSection/> */}
    </div>
  )
}

export default page
