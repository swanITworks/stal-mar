import React, { useEffect, useState } from 'react'
import { PageProps } from 'gatsby'
import Layout from '../hoc/Layout/Layout'
import Partners from '../components/Partners/Partners'
import Achievements from '../components/Achievements/Achievements'
import AboutUs from '../components/AboutUs/AboutUs'
import Wave from '../assets/waveAbout.svg'
import Products from '../components/Products/Products'
import FastContact from '../components/FastContactMobile/FastContactMobile'
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

const index: React.FC<PageProps> = props => {
  return (
    <Layout>
      <SEO title="Start" description="To jest nasza strona główna" />
      <Banner />
      <Partners />
      <Achievements />
      <Wave />
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
      <Wave style={{ transform: 'rotate(180deg)' }} />
      <Blog />
      <Contact />
    </Layout>
  )
}

export default index
