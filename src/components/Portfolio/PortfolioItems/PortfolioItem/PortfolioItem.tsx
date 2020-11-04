import React from 'react'
import * as styles from './PortfolioItem.module.scss'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'

const PortfolioItem = ({ title, mainPhoto, category, slug }) => {
  return (
    <article className={styles.portfolioItem}>
      <Link to={`/portfolio/${slug}`}>
        <Img className={styles.image} fluid={mainPhoto}></Img>
        <div className={styles.textArea}>
          <h2 className={styles.category}>{category}</h2>
          <h3 className={styles.title}>{title}</h3>
        </div>
      </Link>
    </article>
  )
}

export default PortfolioItem
