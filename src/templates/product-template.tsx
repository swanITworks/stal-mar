import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../hoc/Layout/Layout'
import Section from '../hoc/Section/Section'
import SectName from '../components/UI/SectName/SectName'
import SectTitle from '../components/UI/SectTittle/SectTitle'
import * as styles from './product-template.module.scss'
import Photos from '../components/Banner/PhotosSection/PhotosSection'
import Button from '../components/UI/Button/Button'
import changeIndexHandler from '../utils/functions'
import ChangeButton from '../components/UI/ChangeButton/ChangeButton'

const productTemplate = ({ data }) => {
  const {
    product: {
      title,
      description: { description },
      photo: { fluid },
      inspirations,
    },
  } = data

  const [indexInspirationPhoto, setIndexInspirationPhoto] = useState(0)

  const changePhotoHandler = (state, type, length) => {
    setIndexInspirationPhoto(changeIndexHandler(state, type, length))
  }

  const inspirationArticle = (
    <article className={styles.inspirations}>
      <h2 className={styles.title}>Inspiracje</h2>
      <div className={styles.inspirationsPhotosDesktop}>
        {inspirations
          ? inspirations.map((item, index) => {
              return (
                <div
                  key={index + 'In'}
                  className={styles.photoContainer}
                  onClick={() => {
                    console.log(index)
                  }}
                >
                  <Img fixed={item.fixed} className={styles.photoItem} />
                </div>
              )
            })
          : null}
      </div>
      <div className={styles.inspirationsPhotosMobile}>
        {inspirations
          ? inspirations.map((item, index) => {
              if (index === indexInspirationPhoto) {
                return (
                  <div key={index} className={styles.photoContainer}>
                    <Img fixed={item.fixed} className={styles.photoItem} />
                  </div>
                )
              }
            })
          : null}
        <div className={styles.buttons}>
          <ChangeButton
            click={() =>
              changePhotoHandler(
                indexInspirationPhoto,
                'minus',
                inspirations.length
              )
            }
          />
          <div className={styles.info}>{`${indexInspirationPhoto + 1}  /${
            inspirations.length
          }`}</div>
          <ChangeButton
            type="right"
            click={() =>
              changePhotoHandler(
                indexInspirationPhoto,
                'plus',
                inspirations.length
              )
            }
          />
        </div>
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
        {inspirationArticle}
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
