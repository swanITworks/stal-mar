import React, { useEffect, useState } from 'react'
import { PageProps, useStaticQuery, graphql } from 'gatsby'
import Layout from '../../hoc/Layout/Layout'
import Partners from '../../components/Partners/Partners'
import Achivements from '../../components/Achivements/Achivements'
import About from '../../components/AboutUs/AboutUs'
import Wave from '../../assets/waveAbout.svg'
import Products from '../../components/Products/Products'
import FastContact from '../../components/FastContact/FastContact'
import PortfolioSection from '../../components/Portfolio/Portfolio'
import VideoSection from '../../components/VideoSection/VideoSection'

import PageBanner from '../../components/PageBanner/PageBanner'
import SEO from '../../components/SEO/SEO'

const CategoryTemplate = (): JSX.Element => {
  return (
    <Layout>
      <SEO
        title="Portfolio"
        description="Projekty wykonane przez firmę Stal-Mar w Pile oraz okolicach"
      />

      <PortfolioSection type={'more'} category={'Bramy Przesuwne'} />
    </Layout>
  )
}

export default CategoryTemplate
