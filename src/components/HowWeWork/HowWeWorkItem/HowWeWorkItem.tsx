import React from 'react'
import * as styles from './HowWeWorkItem.module.scss'
import Img from 'gatsby-image'

const HowWeWorkItem = ({
  number,
  title,
  info,
  photo,
  type,
  alt,
}): JSX.Element => {
  return (
    <article className={styles.howWeWorkItem}>
      <Img fluid={photo} className={styles.photo} alt={alt} />
      <h3 className={styles.number}>{'0' + number}</h3>
      <h2 className={styles.title}>{title}</h2>
      {type === 'more' ? <p className={styles.info}>{info}</p> : null}
    </article>
  )
}

export default HowWeWorkItem
