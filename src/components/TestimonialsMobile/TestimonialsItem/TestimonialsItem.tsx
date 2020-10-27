import React from 'react'
import * as styles from './TestimonialsItem.module.scss'
import Img from 'gatsby-image'

const TestimonialsItem = ({ photo, name, quontation }): JSX.Element => {
  return (
    <article className={styles.item}>
      <div
        style={{ display: 'inlineBlock', width: '55%', alignSelf: 'center' }}
      >
        <Img fluid={photo} className={styles.photo} />
      </div>
      <div>
        <p className={styles.quontation}>
          <q>{quontation}</q>
        </p>
        <h3 className={styles.name}>{name}</h3>
      </div>
    </article>
  )
}

export default TestimonialsItem
