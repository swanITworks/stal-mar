import React, { useEffect, useState } from 'react'
import { PageProps } from 'gatsby'
import Layout from '../hoc/Layout/Layout'
import Partners from '../components/Partners/Partners'
import Achievements from '../components/Achievements/Achievements'
import AboutUs from '../components/AboutUs/AboutUs'
import Wave from '../assets/waveAbout.svg'
import Products from '../components/Products/Products'
import FastContact from '../components/FastContact/FastContact'
import Portfolio from '../components/Portfolio/Portfolio'
import VideoSection from '../components/VideoSection/VideoSection'
import HowWeWork from '../components/HowWeWork/HowWeWork'
import Testimonials from '../components/Testimonials/Testimonials'
import Blog from '../components/Blog/Blog'
import Contact from '../components/Contact/Contact'
import Backdrop from '../components/UI/Backdrop/Backdrop'

const index: React.FC<PageProps> = props => {
  return (
    <Layout>
      <Partners />
      <Achievements />
      <Wave />
      <AboutUs />
      <Products />
      <FastContact />
      <Portfolio />
      <VideoSection />
      <HowWeWork />
      <Testimonials />
      <Blog />
      <Contact />
    </Layout>
  )
}

export default index
