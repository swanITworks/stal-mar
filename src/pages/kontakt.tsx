import React from 'react'
import { PageProps } from 'gatsby'
import Layout from '../hoc/Layout/Layout'
import Blog from '../components/Blog/Blog'
import { graphql } from 'gatsby'
import PageBanner from '../components/PageBanner/PageBanner'
import Contact from '../components/Contact/Contact'

const blog: React.FC<PageProps> = ({ data }) => {
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
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query getPageContact {
    pageData: allContentfulPages(filter: { name: { eq: "kontakt" } }) {
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

export default blog
