import React from 'react'
import Section from '../../hoc/Section/Section'
import SectName from '../UI/SectName/SectName'
import SectTitle from '../UI/SectTittle/SectTitle'
import HowWeWorkItem from './HowWeWorkItem/HowWeWorkItem'
import * as styles from './HowWeWork.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import Button from '../UI/Button/Button'
import { Link } from 'gatsby'

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
          title
        }
      }
    }
  }
`

const HowWeWork = ({ type }): JSX.Element => {
  const { section, items } = useStaticQuery(getData)

  return (
    <Section id={'howWeWork'}>
      <div className={styles.changeFlexBox}>
        <div className={styles.leftSide}>
          <SectName text={section.name} type={'j'} />
          <SectTitle text={section.title} />
        </div>
        {type === 'more' ? null : (
          <div className={styles.rightSide}>
            <Link to="oferta">
              <Button type={'black'} />
            </Link>
          </div>
        )}
      </div>

      <div className={styles.itemsArea}>
        <div className={styles.box}></div>
        {items.nodes.map(item => (
          <HowWeWorkItem
            key={item.number}
            number={item.number}
            title={item.title}
            info={item.info}
            photo={item.photo.fluid}
            alt={item.photo.title}
            type={type}
          />
        ))}
      </div>
    </Section>
  )
}

export default HowWeWork
