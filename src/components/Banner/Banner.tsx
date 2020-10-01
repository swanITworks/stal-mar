import React from 'react'
import * as styles from './Banner.module.scss'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Image from 'gatsby-image'
import styled from 'styled-components'

const getFile = graphql`
  {
    background: file(name: { eq: "background" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fence: file(name: { eq: "fence" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cutSteel: file(name: { eq: "cutSteel" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    rails: file(name: { eq: "rails" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Banner = (): JSX.Element => {
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
        <Image
          className={styles.topLeft}
          style={{ width: '100%' }}
          fluid={fence}
        />
      </div>
      <div className={styles.secondColumn}>
        <Image className={styles.topRight} fluid={cutSteel} />
        <Image className={styles.bottomRight} fluid={rails} />
      </div>
    </BackgroundImage>
  )
}

const StyledBackgroundSection: JSX.Element = styled(Banner)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection
