import React from 'react'
import * as styles from './ProductsItem.module.scss'
import Img from 'gatsby-image'

const ProductsItem = ({ number, title, imageData }): JSX.Element => {
  return (
    <article className={styles.background}>
      <h3 className={styles.number}>{number}</h3>
      <h2 className={styles.title}>{title}</h2>
      <Img fluid={imageData} className={styles.productImage} />
    </article>
  )
}

export default ProductsItem
