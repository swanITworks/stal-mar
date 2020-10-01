import React from 'react'
import * as styles from './HelloSection.module.scss'

const HelloSection = (): JSX.Element => {
  return (
    <section className={styles.helloSection}>
      <article>
        <h3>Solidne</h3>
        <h1>Bramy i ogrodzenia Piła</h1>
      </article>
    </section>
  )
}

export default HelloSection
