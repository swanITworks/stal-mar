import React, { useEffect, useState } from 'react'
import { PageProps } from 'gatsby'
import Layout from '../hoc/Layout/Layout'
import Partners from '../components/Partners/Partners'
import Achivements from '../components/Achivements/Achivements'
import About from '../components/AboutUs/AboutUs'
import Wave from '../assets/waveAbout.svg'
import Products from '../components/Products/Products'
import FastContact from '../components/FastContact/FastContact'
import PortfolioSection from '../components/Portfolio/Portfolio'
import VideoSection from '../components/VideoSection/VideoSection'

const Portfolio: React.FC<PageProps> = props => {
  return (
    <Layout>
      <PortfolioSection />
    </Layout>
  )
}

export default Portfolio
