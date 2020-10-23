import React from 'react'
import * as styles from './TextSection.module.scss'
import SectName from '../../../../UI/SectName/SectName'
import SectTitle from '../../../../UI/SectTittle/SectTitle'
import Button from '../../../../UI/Button/Button'
import { graphql, useStaticQuery } from 'gatsby'

const getData = graphql`
  {
    fastContact: contentfulFastContact {
      title
      info
    }
  }
`

const TextSection = () => {
  const { fastContact } = useStaticQuery(getData)

  return (
    <div className={styles.textSection}>
      <SectName type={'orange'} text={fastContact.title} />
      <SectTitle text={fastContact.info} />
      <Button text={'Kontakt'} />
    </div>
  )
}

export default TextSection
