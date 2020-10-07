import React from 'react'
import Button from '../UI/Button/Button'
import * as styles from './Contact.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const getData = graphql`
  {
    fastContact: contentfulFastContact {
      personPhoto {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      title
      info
    }
  }
`

const FastContact = () => {
  const { fastContact } = useStaticQuery(getData)

  return (
    <section className={styles.fastContact}>
      <div className={styles.content}>
        <article className={styles.contactBox}>
          <h2 className={styles.title}>{fastContact.title}</h2>
          <p className={styles.info}>{fastContact.info}</p>
          <Button />
          <Img fluid={fastContact.personPhoto.fluid} />
        </article>
      </div>
      <div className={styles.secondBackground}></div>
    </section>
  )
}

export default FastContact
