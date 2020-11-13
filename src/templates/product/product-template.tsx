import React, { useState, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../hoc/Layout/Layout'
import Section from '../../hoc/Section/Section'
import SectTitle from '../../components/UI/SectTittle/SectTitle'
import * as styles from './product-template.module.scss'
import Button from '../../components/UI/Button/Button'
import changeIndexHandler from '../../utils/functions'
import ChangeButton from '../../components/UI/ChangeButton/ChangeButton'
import Modal from '../../hoc/Modal/Modal'
import Wave from '../../assets/waveAbout.svg'
import SEO from '../../components/SEO/SEO'

const productTemplate = ({ data }) => {
  const {
    product: {
      title,
      features,
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

  useEffect(() => {
    const html = document.querySelector('html')
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
      <SEO title={`${title} | Oferta`} description={description} />
      {isInspirationItemClicked.state ? (
        <Modal
          click={() => isInspirationItemClickedHandler()}
          ratio={inspirations[isInspirationItemClicked.index].fluid.aspectRatio}
        >
          <Img fluid={inspirations[isInspirationItemClicked.index].fluid} />
        </Modal>
      ) : null}
      <div style={{ backgroundColor: 'black', height: '70px' }}></div>
      <Wave
        className={styles.wave}
        style={{ backgroundColor: '#f07a3a', transform: 'rotate(180deg)' }}
      />
      <Section style={{ paddingTop: '0px' }}>
        <SectTitle text={title} position={'first'} />
        <article className={styles.top}>
          <div className={styles.mainPhoto}>
            <Img fluid={fluid} />
          </div>
          <div className={styles.description}>
            <p>{description}</p>
            {features && (
              <>
                <h2 className={styles.title}>Cechy:</h2>
                <div className={styles.features}>
                  <ul>
                    {features.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
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
      features
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
