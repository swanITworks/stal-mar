import React from 'react'
import * as styles from './HelloSection.module.scss'

import Button from '../../UI/Button/Button'

const HelloSection = ({ title, spanTitle }): JSX.Element => {
  return (
    <section className={styles.helloSection}>
      <article>
        <h3 className={styles.name}>{spanTitle}</h3>
        <h1 className={styles.title}>{title}</h1>
      </article>
      <Button />
    </section>
  )
}

export default HelloSection
