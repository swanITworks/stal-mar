import React from 'react'
import * as styles from './HelloSection.module.scss'
import { graphql, useStaticQuery } from 'gatsby'

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
        <h3>{spanTitle}</h3>
        <h1>{helloText}</h1>
      </article>
    </section>
  )
}

export default HelloSection
