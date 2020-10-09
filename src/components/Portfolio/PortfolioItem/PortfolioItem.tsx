import React from 'react'
import * as styles from './PortfolioItem.module.scss'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

const PortfolioItem = ({title, mainPhoto}) => {
  return (
    <article className={styles.portfolioItem}>
      <BackgroundImage className={styles.test} fluid={mainPhoto}>
        <h3 className={styles.title}>{title}</h3>
      </BackgroundImage>   
    </article>
  )
}

export default PortfolioItem
