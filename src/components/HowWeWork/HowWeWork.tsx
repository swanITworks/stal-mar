import React from 'react'
import Section from '../../hoc/Section/Section'
import SectName from '../UI/SectName/SectName'
import SectTitle from '../UI/SectTittle/SectTitle'
import HowWeWorkItem from './HowWeWorkItem/HowWeWorkItem'
import * as styles from './HowWeWork.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import { howWeWorkItem } from './HowWeWorkItem/HowWeWorkItem.module.scss'

const getData = graphql`
  {
    section: contentfulHowWeWorkSection {
      title
      name
    }
    items: allContentfulHowWeWorkItems(sort: { fields: number, order: ASC }) {
      nodes {
        number
        title
        info
        photo {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const HowWeWork = (): JSX.Element => {
  const { section, items } = useStaticQuery(getData)

  return (
    <Section>
      <SectName text={section.name} type={'j'} />
      <SectTitle text={section.title} />
      <div className={styles.itemsArea}>
        <div className={styles.box}></div>
        {items.nodes.map(item => (
          <HowWeWorkItem
            key={item.number}
            number={item.number}
            title={item.title}
            info={item.info}
            photo={item.photo.fluid}
          />
        ))}
      </div>
    </Section>
  )
}

export default HowWeWork
