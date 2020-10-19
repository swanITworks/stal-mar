import React from 'react'
import * as styles from './ProductsItem.module.scss'
import Img from 'gatsby-image'

const ProductsItem = ({ number, title, imageData }): JSX.Element => {
  return (
    <article className={styles.background}>
      <h3 className={styles.number}>{number}</h3>
      <h2 className={styles.title}>{title}</h2>
      <div
        style={{
          width: '85%',
          display: 'inlineBlock',
          borderRadius: '5px',
          overflow: 'hidden',
          alignSelf: 'flex-start',
        }}
      >
        <Img fluid={imageData} style={{ height: '0', paddingBottom: '105%' }} />
      </div>
    </article>
  )
}

export default ProductsItem
