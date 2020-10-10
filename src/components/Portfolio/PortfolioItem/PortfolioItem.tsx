import React from 'react'
import * as styles from './PortfolioItem.module.scss'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

const PortfolioItem = ({title, mainPhoto}) => {
  return (
    <article className={styles.portfolioItem}>
      <Img className={styles.image} fluid={mainPhoto}>
      </Img>
      <div className={styles.textArea}>
        <h2 className={styles.category}>Category</h2>
        <h3>{title}</h3>
      </div>
    </article>
  )
}

export default PortfolioItem
