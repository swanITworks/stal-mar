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
    <article className={styles.productItem}>
      <h3 className={styles.number}>{number}</h3>
      <h2 className={styles.title}>{title}</h2>

      <Img
        fluid={imageData}
        style={{ height: '0', paddingBottom: '130%', borderRadius: '2%' }}
      />

      {type === 'more' ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: '300px',
          }}
        >
          <ul
            style={{
              color: 'white',
              textAlign: 'center',

              listStyle: 'none',
              marginTop: '1rem',
              fontFamily: 'Overpass',
            }}
          >
            {features.map(item => (
              <li>{item}</li>
            ))}
          </ul>
          {slug ? (
            <Link to={slug}>
              <Button
                style={{ marginTop: '1rem' }}
                type={'orange'}
                text={'Więcej'}
              />
            </Link>
          ) : null}
        </div>
      ) : null}
    </article>
  )
}

export default ProductsItem
