import React from 'react'
import * as styles from './Partners.module.scss'

import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

const getData = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "partners" } }) {
      nodes {
        childImageSharp {
          fluid(grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const OurPartners = (): JSX.Element => {
  const partnersData: number[] = [1, 2, 3, 4, 5]

  const {
    allFile: { nodes: myPartnersData },
  } = useStaticQuery(getData)

  return (
    <section className={styles.partners}>
      {myPartnersData.map((item, index) => {
        return (
          <article key={index}>
            <Image
              fluid={item.childImageSharp.fluid}
              style={{ width: '100px' }}
            />
          </article>
        )
      })}
    </section>
  )
}

export default OurPartners
