import React from 'react'
import Button from '../UI/Button/Button'
import * as styles from './AboutUs.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import Section from '../../hoc/Section/Section'
import SectTitle from '../UI/SectTittle/SectTitle'
import SectName from '../UI/SectName/SectName'
import SectInfo from '../UI/SectInfo/SectInfo'

const getData = graphql`
  {
    section: contentfulAboutSection {
      title
      info
      name
    }
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
    section: { title, info, name },
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

  return (
    <Section type="light" flexBox="row" id="onas">
      <div className={styles.sectionItems}>
        <article className={styles.leftSide}>
          <SectName text={name} />
          <SectTitle text={title} />
          <SectInfo text={info} />
        </article>
        <article
          className={styles.rightSide}
          style={{
            padding: '2.5rem',
            position: 'relative',
            minHeight: '320px',
            marginTop: '2.5rem',
            minWidth: '45%',
            maxWidth: '500px',
          }}
        >
          <Image
            fluid={man}
            style={{
              position: 'absolute',
              width: '50%',
              zIndex: 1,
              right: 0,
              bottom: 0,
            }}
          />
          <Image
            fluid={workshop}
            style={{
              position: 'absolute',
              width: '75%',
              zIndex: 1,
              left: 0,
              top: 0,
            }}
          />
          <Image fluid={backgroundAbout} style={{ position: 'relative' }} />
        </article>
      </div>
    </Section>
  )
}

export default AboutUs
