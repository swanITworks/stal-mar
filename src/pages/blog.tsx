import React from 'react'
import { PageProps } from 'gatsby'
import Layout from '../hoc/Layout/Layout'
import Blog from '../components/Blog/Blog'
import { graphql } from 'gatsby'
import PageBanner from '../components/PageBanner/PageBanner'
import SEO from '../components/SEO/SEO'

const blog: React.FC<PageProps> = ({ data }) => {
  const {
    pageData: { nodes },
  } = data
  return (
    <Layout>
      <SEO
        title="Blog"
        description="Ta strona zawiera nowości oraz ciekawe artykuły z firmy Stal-Mar bramy i ogrodzenia Piła"
      />
      <PageBanner
        title={nodes[0].title}
        spanTitle={nodes[0].spanTitle}
        mainPhoto={nodes[0].bannerMainPhoto.fluid}
        photos={nodes[0].bannerPhotos}
      />
      <Blog type="more" />
    </Layout>
  )
}

export const query = graphql`
  query getPageBlog {
    pageData: allContentfulPages(filter: { name: { eq: "blog" } }) {
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
