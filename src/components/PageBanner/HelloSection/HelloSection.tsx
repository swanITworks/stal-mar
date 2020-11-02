import React from 'react'
import * as styles from './HelloSection.module.scss'
import Button from '../../UI/Button/Button'
import scrollTo from 'gatsby-plugin-smoothscroll'

const HelloSection = ({ title, spanTitle }): JSX.Element => {
  return (
    <section className={styles.helloSection}>
      <article>
        <h3 className={styles.name}>{spanTitle}</h3>
        <h1 className={styles.title}>{title}</h1>
      </article>
      <Button click={() => scrollTo('#footer')} />
    </section>
  )
}

export default HelloSection
