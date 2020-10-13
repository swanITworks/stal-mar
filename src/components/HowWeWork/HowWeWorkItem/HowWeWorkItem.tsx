import React from 'react'
import * as styles from './HowWeWorkItem.module.scss'

const HowWeWorkItem = ({ number, title, info }): JSX.Element => {
  return (
    <article className={styles.howWeWorkItem}>
      <h3>{number}</h3>
      <h2>{title}</h2>
      <p>{info}</p>
    </article>
  )
}

export default HowWeWorkItem
