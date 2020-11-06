import React from 'react'
import Layout from '../hoc/Layout/Layout'
import Products from '../components/Products/Products'
import HowWerWork from '../components/HowWeWork/HowWeWork'
import { graphql } from 'gatsby'
import PageBanner from '../components/PageBanner/PageBanner'

const Offer = ({ data }) => {
  const {
    pageData: { nodes },
  } = data

  console.log(data)

  return (
    <Layout>
      <PageBanner
        title={nodes[0].title}
        spanTitle={nodes[0].spanTitle}
        mainPhoto={nodes[0].bannerMainPhoto.fluid}
        photos={nodes[0].bannerPhotos}
      />
      <Products type={'more'} />
      <HowWerWork type={'more'} />
    </Layout>
  )
}

export const query = graphql`
  query getPageProduct {
    pageData: allContentfulPages(filter: { name: { eq: "oferta" } }) {
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

export default Offer
