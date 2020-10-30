import React, { useState, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../hoc/Layout/Layout'
import Section from '../hoc/Section/Section'
import SectTitle from '../components/UI/SectTittle/SectTitle'
import * as styles from './product-template.module.scss'
import Button from '../components/UI/Button/Button'
import changeIndexHandler from '../utils/functions'
import ChangeButton from '../components/UI/ChangeButton/ChangeButton'
import Modal from '../hoc/Modal/Modal'

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
  const [isInspirationItemClicked, setIsInspirationItemClicked] = useState({
    state: false,
    index: false,
  })

  const html = document.querySelector('html')

  useEffect(() => {
    isInspirationItemClicked.state
      ? (html.style.overflow = 'hidden')
      : (html.style.overflow = 'visible')
    return () => {
      html.style.overflow = 'visible'
    }
  }, [isInspirationItemClicked.state])

  const changePhotoHandler = (state, type, length) => {
    setIndexInspirationPhoto(changeIndexHandler(state, type, length))
  }

  const isInspirationItemClickedHandler = index => {
    if (index !== undefined) {
      setIsInspirationItemClicked({
        state: true,
        index: index,
      })
    } else {
      setIsInspirationItemClicked({
        state: false,
        index: false,
      })
    }
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
                    isInspirationItemClickedHandler(index)
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
                const ratio = inspirations[index].fluid.aspectRatio
                return (
                  <div
                    key={index}
                    className={styles.photoContainer}
                    style={{
                      maxWidth: `calc(${ratio}*100vh)`,
                    }}
                  >
                    <Img fluid={item.fluid} className={styles.photoItem} />
                  </div>
                )
              }
            })
          : null}
        {inspirations && (
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
        )}
      </div>
    </article>
  )

  return (
    <Layout>
      {isInspirationItemClicked.state ? (
        <Modal
          click={() => isInspirationItemClickedHandler()}
          ratio={inspirations[isInspirationItemClicked.index].fluid.aspectRatio}
        >
          <Img fluid={inspirations[isInspirationItemClicked.index].fluid} />
        </Modal>
      ) : null}
      <Section>
        <SectTitle text={title} />
        <article className={styles.flexBoxContainer}>
          <div className={styles.flexBoxItem}>
            <Img fluid={fluid} />
          </div>
          <p className={styles.flexBoxItem}>{description}</p>
        </article>
        {inspirations && inspirationArticle}
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
        fluid {
          ...GatsbyContentfulFluid
        }
        fixed(height: 200) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

export default productTemplate
