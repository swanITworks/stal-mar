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

const CategoryTemplate = ({ data, pageContext }): JSX.Element => {
  const {
    pageData: { nodes },
  } = data

  console.log(data)
  return (
    <Layout>
      <SEO
        title="Portfolio"
        description="Projekty wykonane przez firmę Stal-Mar w Pile oraz okolicach"
      />
      <PageBanner
        title={nodes[0].title}
        spanTitle={nodes[0].spanTitle}
        mainPhoto={nodes[0].bannerMainPhoto.fluid}
        photos={nodes[0].bannerPhotos}
      />
      <PortfolioSection type={'more'} category={pageContext.category} />
    </Layout>
  )
}

export const query = graphql`
  query getPagePortfolioSiteData {
    pageData: allContentfulPages(filter: { name: { eq: "portfolio" } }) {
      nodes {
        spanTitle
        title
        name
        bannerMainPhoto {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        bannerPhotos {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default CategoryTemplate
