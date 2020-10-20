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

const Offer: React.FC<PageProps> = ({ data }) => {
  const {
    items: { nodes },
  } = data

  console.log(nodes)

  return (
    <Layout>
      <div>
        {nodes.map(item => {
          return (
            <div>
              <ProductsItem
                key={item.title}
                title={item.title}
                imageData={item.photo.fluid}
              />
              <Link to={`${item.slug}`}>
                <Button text={'wiecej'} />
              </Link>
            </div>
          )
        })}
      </div>
      <HowWerWork />
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
