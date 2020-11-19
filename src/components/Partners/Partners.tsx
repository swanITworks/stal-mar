import React from 'react'
import * as styles from './Partners.module.scss'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const getData = graphql`
  {
    section: contentfulPartnersSection {
      title
    }
    items: allContentfulPartnersItems {
      nodes {
        logo {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const OurPartners = (): JSX.Element => {
  const {
    section: { title },
    items: { nodes: arrayItems },
  } = useStaticQuery(getData)
  return (
    <section className={styles.partners}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.items}>
          {arrayItems.map((item, index) => {
            return (
              <article key={index}>
                <Img
                  fluid={item.logo.fluid}
                  style={{ width: '100px', filter: `grayscale(100%)` }}
                />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OurPartners
