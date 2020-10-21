import React from 'react'
import * as styles from './HelloSection.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import Button from '../../UI/Button/Button'

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
      <Button />
    </section>
  )
}

export default HelloSection
