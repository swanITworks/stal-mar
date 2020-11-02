import React from 'react'
import * as styles from './HelloSection.module.scss'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Button from '../../UI/Button/Button'
import scrollTo from 'gatsby-plugin-smoothscroll'

const getData = graphql`
  {
    hello: contentfulHelloSection {
      spanTitle
      helloText
    }
  }
`

const HelloSection = (): JSX.Element => {
  const {
    hello: { spanTitle, helloText },
  } = useStaticQuery(getData)

  return (
    <section className={styles.helloSection}>
      <article>
        <h3 className={styles.name}>{spanTitle}</h3>
        <h1 className={styles.title}>{helloText}</h1>
      </article>
      <Button click={() => scrollTo('#footer')} />
    </section>
  )
}

export default HelloSection
