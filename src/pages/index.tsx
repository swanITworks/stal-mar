import React, { useEffect, useState } from 'react'
import { PageProps } from 'gatsby'
import Layout from '../hoc/Layout/Layout'
import Partners from '../components/Partners/Partners'
import Achivements from '../components/Achivements/Achivements'
import AboutUs from '../components/AboutUs/AboutUs'
import Wave from '../assets/waveAbout.svg'

const index: React.FC<PageProps> = props => {
  return (
    <Layout>
      <Partners />
      <Achivements />
      <Wave />
      <AboutUs />
    </Layout>
  )
}

export default index
