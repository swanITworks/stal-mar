import React from 'react'
import Button from '../UI/Button/Button'
import * as styles from './FastContactMobile.module.scss'
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

const FastContactMobile = () => {
  const { fastContact } = useStaticQuery(getData)

  return (
    <section className={styles.fastContact}>
      <div className={styles.content}>
        <article className={styles.contactBox}>
          <div>
            <h2 className={styles.title}>{fastContact.title}</h2>
            <p className={styles.info}>{fastContact.info}</p>
            <Button text={'Kontakt'} />
          </div>
          <div
            style={{
              display: 'inline-block',
              width: '100%',
              overflow: 'hidden',
              textAlign: 'center',
            }}
          >
            <Img
              className={styles.image}
              fluid={fastContact.personPhoto.fluid}
            />
          </div>
        </article>
      </div>
      <div className={styles.secondBackground}></div>
    </section>
  )
}

export default FastContactMobile
