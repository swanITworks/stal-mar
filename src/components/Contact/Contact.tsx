import React from 'react'
import Section from '../../hoc/Section/Section'
import Button from '../UI/Button/Button'
import SectName from '../UI/SectName/SectName'
import SectTitle from '../UI/SectTittle/SectTitle'
import { graphql, useStaticQuery } from 'gatsby'
import ContactItem from './ContactItems/ContactItem'
import * as styles from './Contact.module.scss'

const getData = graphql`
  {
    section: contentfulContactSection {
      title
      name
    }
    items: allContentfulContactItems {
      nodes {
        name
        contactData
        adittionalInfo
        icon {
          file {
            url
          }
        }
      }
    }
  }
`

const Contact = () => {
  const {
    section,
    items: { nodes: arrayItems },
  } = useStaticQuery(getData)

  return (
    <Section type={'almostDark'}>
      <div className={styles.flexContainerTop}>
        <div className={styles.leftSide}>
          <SectName type={'orange'} text={section.name} />
          <SectTitle text={section.title} />
        </div>
        <div className={styles.rightSide}>
          <Button text={'Contact'} />
        </div>
      </div>
      <div className={styles.items}>
        {arrayItems.map(item => {
          return (
            <ContactItem
              key={item.name}
              contactData={item.contactData}
              adittionalInfo={item.adittionalInfo}
              icon={item.icon.file.url}
            />
          )
        })}
      </div>
    </Section>
  )
}

export default Contact
