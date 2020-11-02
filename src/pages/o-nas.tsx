import React, { useEffect, useState } from 'react'
import { PageProps } from 'gatsby'
import Layout from '../hoc/Layout/Layout'
import About from '../components/AboutUs/AboutUs'
import PageBanner from '../components/PageBanner/PageBanner'
import Partners from '../components/Partners/Partners'
import TestimonialsMobile from '../components/TestimonialsMobile/TestimonialsMobile'
import TestimonialsDesktop from '../components/TestimonialsDesktop/TestimonialsDesktop'
import Wave from '../assets/waveAbout.svg'
import Achievements from '../components/Achievements/Achievements'
import { graphql } from 'gatsby'

const AboutUs: React.FC<PageProps> = ({ data }) => {
  const {
    pageData: { nodes },
  } = data
  return (
    <Layout>
      <PageBanner
        title={nodes[0].title}
        spanTitle={nodes[0].spanTitle}
        mainPhoto={nodes[0].bannerMainPhoto.fluid}
        photos={nodes[0].bannerPhotos}
      />
      <About />
      <TestimonialsMobile />
      <TestimonialsDesktop />
      <Wave style={{ transform: 'rotate(180deg)' }} />
      <Achievements />
      <Partners />
    </Layout>
  )
}

export const query = graphql`
  query getPageOnas {
    pageData: allContentfulPages(filter: { name: { eq: "onas" } }) {
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

export default AboutUs
