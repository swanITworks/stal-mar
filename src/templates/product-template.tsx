import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../hoc/Layout/Layout'
import Section from '../hoc/Section/Section'
import SectName from '../components/UI/SectName/SectName'
import SectTitle from '../components/UI/SectTittle/SectTitle'
import * as styles from './product-template.module.scss'
import Photos from '../components/Banner/PhotosSection/PhotosSection'
import Button from '../components/UI/Button/Button'

const productTemplate = ({ data }) => {
  const {
    product: {
      title,
      description: { description },
      photo: { fluid },
      inspirations,
    },
  } = data

  const inspirationArticle = (
    <article className={styles.inspirations}>
      <h2 className={styles.title}>Inspiracje</h2>
      <div className={styles.inspirationsPhotos}>
        {inspirations
          ? inspirations.map((item, index) => {
              return (
                <div className={styles.photoContainer} id={index}>
                  <Img
                    fixed={item.fixed}
                    className={styles.photoItem}
                    onClick={() => {
                      console.log('click')
                    }}
                  />
                </div>
              )
            })
          : null}
      </div>
    </article>
  )

  return (
    <Layout>
      <Section>
        <SectTitle text={title} />
        <article className={styles.flexBoxContainer}>
          <div className={styles.flexBoxItem}>
            <Img fluid={fluid} />
          </div>
          <p className={styles.flexBoxItem}>{description}</p>
        </article>
        {inspirations ? inspirationArticle : null}
        <Link to={'/oferta/'}>
          <Button text={'Wróć'} type={'black'} />
        </Link>
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
      inspirations {
        fixed(height: 250) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

export default productTemplate
