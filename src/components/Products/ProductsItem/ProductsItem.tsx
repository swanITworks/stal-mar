import React from 'react'
import * as styles from './ProductsItem.module.scss'
import Img from 'gatsby-image'
import Button from '../../UI/Button/Button'
import { Link } from 'gatsby'

const ProductsItem = ({
  number,
  title,
  imageData,
  slug,
  type,
  features,
}): JSX.Element => {
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
      {type === 'more' ? (
        <ul
          style={{
            color: 'white',
            textAlign: 'center',
            width: '85%',
            alignSelf: 'flex-start',
            listStyle: 'none',
            marginTop: '1rem',
            fontFamily: 'Overpass',
          }}
        >
          {features.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      ) : null}
      {slug ? (
        <Link to={slug}>
          <Button
            style={{ marginTop: '1rem' }}
            type={'orange'}
            text={'Więcej'}
          />
        </Link>
      ) : null}
    </article>
  )
}

export default ProductsItem
