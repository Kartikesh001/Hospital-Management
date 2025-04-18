import React from 'react'
import Navbar from '../componenets/navbar'
import HeroSection from '../componenets/herosection'
import ContentSection from '../componenets/contentsection'
import SliderSection from '../componenets/slidersection'
import Footer from '../componenets/footer'
import { Book } from 'lucide-react'


const layout = ({children}:Readonly<{children:React.ReactNode}>) => {
  return (
    <div>
      <Navbar/>
      {children}
      {/* <HeroSection/>
      <ContentSection/>
      <SliderSection/>
      <Footer/> */}
      {/* <BookingForm/> */}
      

    </div>
  )
}

export default layout