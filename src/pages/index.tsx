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
import Testimonials from '../components/Testimonials/Testimonials'
import Blog from '../components/Blog/Blog'
import Contact from '../components/Contact/Contact'
import Hide from '../hoc/Hide/Hide'

import FastContactMobile from '../components/FastContactMobile/FastContactMobile'
import FastContactDevice from '../components/FastContactDevice/FastContactDevice'

const index: React.FC<PageProps> = props => {
  return (
    <Layout>
      <Partners />
      <Achievements />
      <Wave />
      <AboutUs />
      <Products />
      <FastContactMobile />
      <FastContactDevice />
      <Portfolio />

      <Hide>
        <VideoSection />
        <HowWeWork />
        <Testimonials />
        <Wave style={{ transform: 'rotate(180deg)' }} />
        <Blog />
        <Contact />
      </Hide>
    </Layout>
  )
}

export default index
