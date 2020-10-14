import React from 'react'
import * as styles from './HowWeWorkItem.module.scss'
import Img from 'gatsby-image'

const HowWeWorkItem = ({ number, title, info, photo }): JSX.Element => {
  return (
    <article className={styles.howWeWorkItem}>
      <Img fluid={photo} className={styles.photo} />
      <h3 className={styles.number}>{'0' + number}</h3>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.info}>{info}</p>
    </article>
  )
}

export default HowWeWorkItem
