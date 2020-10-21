import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../hoc/Layout/Layout'
import Section from '../hoc/Section/Section'
import SectName from '../components/UI/SectName/SectName'
import SectTitle from '../components/UI/SectTittle/SectTitle'

const productTemplate = ({ data }) => {
  const {
    product: {
      title,
      description: { description },
      photo: { fluid },
    },
  } = data

  return (
    <Layout>
      <Section>
        <SectTitle text={title} />
        <p>{description}</p>
        <Img fluid={fluid} />
        <Link to={'/oferta/'}>BACK</Link>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query getSingleProduct($slug: String) {
    product: contentfulProductsItems(slug: { eq: $slug }) {
      title
      slug
      photo {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      description {
        description
      }
    }
  }
`

export default productTemplate
