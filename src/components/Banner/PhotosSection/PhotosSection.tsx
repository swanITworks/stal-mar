import React from 'react'
import * as styles from './PhotosSection.module.scss'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'

const getFile = graphql`
  {
    background: file(name: { eq: "background" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fence: file(name: { eq: "fence" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cutSteel: file(name: { eq: "cutSteel" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    rails: file(name: { eq: "rails" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Photos = (): JSX.Element => {
  const {
    background: {
      childImageSharp: { fluid: backgroundData },
    },
    fence: {
      childImageSharp: { fluid: fence },
    },
    cutSteel: {
      childImageSharp: { fluid: cutSteel },
    },
    rails: {
      childImageSharp: { fluid: rails },
    },
  } = useStaticQuery(getFile)

  return (
    <BackgroundImage
      fluid={backgroundData}
      className={styles.background}
      backgroundColor={`#040e18`}
    >
      <div className={styles.firstColumn} style={{ height: '100%' }}>
        <Img
          className={styles.topLeft}
          style={{ width: '100%' }}
          fluid={fence}
        />
      </div>
      <div className={styles.secondColumn}>
        <Img className={styles.topRight} fluid={cutSteel} />
        <Img className={styles.bottomRight} fluid={rails} />
      </div>
    </BackgroundImage>
  )
}

export default Photos
