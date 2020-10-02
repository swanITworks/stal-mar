import React from 'react'
import * as styles from './Footer.module.scss'

const Footer = (): JSX.Element => {
  const year = new Date().getFullYear()

  return (
    <section className={styles.footer}>
      <h1>Stal-Mar</h1>
      <p>Copyright {year}</p>
    </section>
  )
}

export default Footer
