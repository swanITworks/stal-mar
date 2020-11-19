import React, { useEffect, useState } from 'react'
import { PageProps } from 'gatsby'
import Layout from '../hoc/Layout/Layout'
import Partners from '../components/Partners/Partners'
import Achievements from '../components/Achievements/Achievements'
import AboutUs from '../components/AboutUs/AboutUs'
import Products from '../components/Products/Products'
import Portfolio from '../components/Portfolio/Portfolio'
import VideoSection from '../components/VideoSection/VideoSection'
import HowWeWork from '../components/HowWeWork/HowWeWork'
import TestimonialsMobile from '../components/TestimonialsMobile/TestimonialsMobile'
import TestimonialsDesktop from '../components/TestimonialsDesktop/TestimonialsDesktop'
import Blog from '../components/Blog/Blog'
import Contact from '../components/Contact/Contact'
import Banner from '../components/Banner/Banner'
import FastContactMobile from '../components/FastContactMobile/FastContactMobile'
import FastContactDevice from '../components/FastContactDesktop/FastContactDesktop'
import VideSectionDevices from '../components/VideoSectionDevices/VideoSectionDevices'
import SEO from '../components/SEO/SEO'
import WaveSvg from '../components/UI/WaveSvg/WaveSvg'

const index: React.FC<PageProps> = props => {
  return (
    <Layout>
      <SEO
        title="Stal-Mar | Home"
        description="Jesteśmy pasjonatami branży, montujemy i produkujemy bramy, ogrodzenia, balustardy. Nasz teren działania to Piła i okolice. Do każdego projektu podchodzimy z pełnym zaangażowaniem. Stal-Mar to gwarancja wysokiej jakości i terminowości usług."
      />
      <Banner />
      <Partners />
      <Achievements />
      <WaveSvg type="light" />
      <AboutUs />
      <Products />
      <FastContactMobile />
      <FastContactDevice />
      <Portfolio />
      <VideSectionDevices />
      <VideoSection />
      <HowWeWork />
      <TestimonialsMobile />
      <TestimonialsDesktop />
      <WaveSvg type="light" rotate />
      <Blog />
      <Contact />
    </Layout>
  )
}

export default index
