import React from 'react'
import { PageProps } from 'gatsby'
import Layout from '../hoc/Layout/Layout'
import Blog from '../components/Blog/Blog'
import Products from '../components/Products/Products'
import HowWerWork from '../components/HowWeWork/HowWeWork'
import ProductsItem from '../components/Products/ProductsItem/ProductsItem'
import { graphql } from 'gatsby'
import Button from '../components/UI/Button/Button'
import { Link } from 'gatsby'
import Section from '../hoc/Section/Section'

const Offer: React.FC<PageProps> = ({ data }) => {
  const {
    items: { nodes },
  } = data

  console.log(nodes)

  return (
    <Layout>
      <Products type={'more'} />
      <HowWerWork type={'more'} />
    </Layout>
  )
}

export const query = graphql`
  {
    items: allContentfulProductsItems {
      nodes {
        slug
        title
        photo {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default Offer
