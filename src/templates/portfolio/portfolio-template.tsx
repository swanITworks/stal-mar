import React, { useState, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../hoc/Layout/Layout'
import Section from '../../hoc/Section/Section'
import SectTitle from '../../components/UI/SectTittle/SectTitle'
import * as styles from './portfolio-template.module.scss'
import Button from '../../components/UI/Button/Button'
import changeIndexHandler from '../../utils/functions'
import ChangeButton from '../../components/UI/ChangeButton/ChangeButton'
import Modal from '../../hoc/Modal/Modal'
import Wave from '../../assets/waveAbout.svg'
import SEO from '../../components/SEO/SEO'

const productTemplate = ({ data }) => {
  const {
    portfolio: {
      title,
      info: { info },
      mainPhoto: { fluid },
      photos,
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
      <h2 className={styles.title}>Zdjęcia z realizacji:</h2>
      <div className={styles.inspirationsPhotosDesktop}>
        {photos
          ? photos.map((item, index) => {
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
        {photos
          ? photos.map((item, index) => {
              if (index === indexInspirationPhoto) {
                const ratio = photos[index].fluid.aspectRatio
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
        {photos && (
          <div className={styles.buttons}>
            <ChangeButton
              click={() =>
                changePhotoHandler(
                  indexInspirationPhoto,
                  'minus',
                  photos.length
                )
              }
            />
            <div className={styles.info}>{`${indexInspirationPhoto + 1}  /${
              photos.length
            }`}</div>
            <ChangeButton
              type="right"
              click={() =>
                changePhotoHandler(indexInspirationPhoto, 'plus', photos.length)
              }
            />
          </div>
        )}
      </div>
    </article>
  )

  return (
    <Layout>
      <SEO title={`${title} | Portfolio`} description={info} />
      {isInspirationItemClicked.state ? (
        <Modal
          click={() => isInspirationItemClickedHandler()}
          ratio={photos[isInspirationItemClicked.index].fluid.aspectRatio}
        >
          <Img fluid={photos[isInspirationItemClicked.index].fluid} />
        </Modal>
      ) : null}
      <div style={{ backgroundColor: 'black', height: '70px' }}></div>
      <Wave
        className={styles.wave}
        style={{ backgroundColor: '#f07a3a', transform: 'rotate(180deg)' }}
      />
      <Section type={'orange'} style={{ paddingTop: '0px' }}>
        <SectTitle text={title} position={'first'} />
        <article className={styles.top}>
          <div className={styles.mainPhoto}>
            <Img fluid={fluid} />
          </div>
          <div className={styles.description}>
            <p>{info}</p>

            {/* {features && (
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
            )} */}
          </div>
        </article>
        {photos && inspirationArticle}
        <Link to={'/portfolio/'}>
          <Button text={'Wróć'} type={'black'} />
        </Link>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query getSinglePortfolio($slug: String) {
    portfolio: contentfulPortfolioItems(slug: { eq: $slug }) {
      title
      slug
      mainPhoto {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      info {
        info
      }
      photos {
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
