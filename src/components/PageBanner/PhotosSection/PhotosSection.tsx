import React from 'react'
import * as styles from './PhotosSection.module.scss'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'

const Photos = ({ mainPhoto, photos }): JSX.Element => {
  return (
    <BackgroundImage
      fluid={mainPhoto}
      className={styles.background}
      backgroundColor={`#040e18`}
    >
      <div className={styles.firstColumn} style={{ height: '100%' }}>
        <Img
          className={styles.topLeft}
          style={{ width: '100%' }}
          fluid={photos[0].fluid}
        />
      </div>
      <div className={styles.secondColumn}>
        <Img className={styles.topRight} fluid={photos[1].fluid} />
        <Img className={styles.bottomRight} fluid={photos[2].fluid} />
      </div>
    </BackgroundImage>
  )
}

export default Photos
