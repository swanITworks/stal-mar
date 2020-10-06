import React from 'react'
import Button from '../UI/Button/Button'
import * as styles from './AboutUs.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const getData = graphql`
  {
    man: file(relativeDirectory: { eq: "about" }, name: { eq: "manScrew2" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    workshop: file(
      relativeDirectory: { eq: "about" }
      name: { eq: "workshop" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    backgroundAbout: file(
      relativeDirectory: { eq: "about" }
      name: { eq: "backgroundAbout3" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const AboutUs = (): JSX.Element => {
  const {
    man: {
      childImageSharp: { fluid: man },
    },
    workshop: {
      childImageSharp: { fluid: workshop },
    },
    backgroundAbout: {
      childImageSharp: { fluid: backgroundAbout },
    },
  } = useStaticQuery(getData)

  console.log(man)

  return (
    <>
      <section className={styles.aboutUs}>
        <h1>About US</h1>
        <h3>Industrial & Factory Solutions</h3>
        <article>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast.
          </p>
        </article>
        <Button type="black" />
        <article
          style={{
            padding: '10%',
            position: 'relative',
            minHeight: '320px',
          }}
        >
          <Image
            fluid={man}
            style={{
              position: 'absolute',
              width: '200px',
              zIndex: 1,
              right: 0,
              bottom: 0,
            }}
          />
          <Image
            fluid={workshop}
            style={{
              position: 'absolute',
              width: '250px',
              zIndex: 1,
              left: 0,
              top: 0,
            }}
          />
          <Image fluid={backgroundAbout} style={{ position: 'relative' }} />
        </article>
      </section>
    </>
  )
}

export default AboutUs
