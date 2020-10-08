import React, { useEffect, useState } from 'react'
import { PageProps } from 'gatsby'
import Layout from '../hoc/Layout/Layout'
import Partners from '../components/Partners/Partners'
import Achivements from '../components/Achivements/Achivements'
import AboutUs from '../components/AboutUs/AboutUs'
import Wave from '../assets/waveAbout.svg'
import Products from '../components/Products/Products'
import FastContact from '../components/FastContact/FastContact'
import Portfolio from '../components/Portfolio/Portfolio'

const index: React.FC<PageProps> = props => {
  return (
    <Layout>
      <Partners />
      <Achivements />
      <Wave />
      <AboutUs />
      <Products />
      <FastContact />
      <Portfolio />
    </Layout>
  )
}

export default index
