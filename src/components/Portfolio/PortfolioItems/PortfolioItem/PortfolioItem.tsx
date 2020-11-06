import React from 'react'
import * as styles from './PortfolioItem.module.scss'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import { Link, navigate } from 'gatsby'
import Button from '../../../UI/Button/Button'

const PortfolioItem = ({ title, mainPhoto, category, slug, type }) => {
  let articleStyles = [styles.portfolioItem]

  if (type === 'more') {
    articleStyles = [styles.moreStyle]
  }

  return (
    <article
      className={articleStyles.join(' ')}
      onClick={() => navigate(`/portfolio/${slug}`)}
    >
      <Img className={styles.image} fluid={mainPhoto}></Img>
      <div className={styles.textArea}>
        <h2 className={styles.category}>{category}</h2>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.buttonArea}>
          <Link to={`/portfolio/${slug}`}>
            <Button text={'zobacz'} />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default PortfolioItem
