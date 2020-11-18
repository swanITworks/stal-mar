import React from 'react'
import * as styles from './ImageSection.module.scss'
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
    }
  }
`

const ImageSection = () => {
  const { fastContact } = useStaticQuery(getData)

  return (
    <div className={styles.imageSection}>
      <Img
        fluid={fastContact.personPhoto.fluid}
        alt="pracownik z młotkiem gotowy na montaż bramy i ogrodzeń"
      />
    </div>
  )
}

export default ImageSection
