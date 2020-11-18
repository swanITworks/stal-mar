import React from 'react'
import * as styles from './PortfolioItem.module.scss'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import { Link, navigate } from 'gatsby'
import Button from '../../../UI/Button/Button'

const PortfolioItem = ({ title, mainPhoto, categories, slug, type, alt }) => {
  let articleStyles = [styles.portfolioItem]

  if (type === 'more') {
    articleStyles = [styles.moreStyle]
  }

  return (
    <article
      className={articleStyles.join(' ')}
      onClick={() => navigate(`/portfolio/${slug}`)}
    >
      <Img className={styles.image} fluid={mainPhoto} alt={alt}></Img>
      <div className={styles.textArea}>
        {categories.map((item, index) => (
          <h2 key={`${item.title}${index}`} className={styles.category}>
            {item.title}
          </h2>
        ))}

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
