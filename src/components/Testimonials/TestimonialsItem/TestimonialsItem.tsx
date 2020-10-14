import React from 'react'
import * as styles from './TestimonialsItem.module.scss'
import Img from 'gatsby-image'

const TestimonialsItem = ({ photo, name, quontation }): JSX.Element => {
  return (
    <article className={styles.item}>
      <Img fluid={photo} className={styles.photo} />
      <p className={styles.quontation}>{quontation}</p>
      <h3 className={styles.name}>{name}</h3>
    </article>
  )
}

export default TestimonialsItem
