import React, { useState } from 'react'
import Section from '../../hoc/Section/Section'
import SectName from '../UI/SectName/SectName'
import SectTitle from '../UI/SectTittle/SectTitle'
import TestimonialsItem from './TestimonialsItem/TestimonialsItem'
import { graphql, useStaticQuery } from 'gatsby'
import { itemsArea } from '../HowWeWork/HowWeWork.module.scss'
import ChangeButton from '../UI/ChangeButton/ChangeButton'
import * as styles from './Testimonials.module.scss'

const getData = graphql`
  {
    section: contentfulTestimonialsSection {
      title
      name
    }
    items: allContentfulTestimonialsItems {
      nodes {
        quotation
        name
        photo {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const Testimonials = (): JSX.Element => {
  const [indexToShow, setIndexToShow] = useState(0)
  const {
    section,
    items: { nodes: arrayItems },
  } = useStaticQuery(getData)

  const changePhotoHandler = type => {
    switch (type) {
      case 'plus':
        if (indexToShow !== arrayItems.length - 1) {
          setIndexToShow(indexToShow => indexToShow + 1)
        } else setIndexToShow(0)
        break

      case 'minus':
        if (indexToShow !== 0) {
          setIndexToShow(indexToShow => indexToShow - 1)
        } else setIndexToShow(arrayItems.length - 1)
        break
    }
  }

  return (
    <Section>
      <SectName text={section.name} />
      <SectTitle text={section.title} />
      {arrayItems.map((item, index) => {
        if (indexToShow === index) {
          return (
            <TestimonialsItem
              key={item.name}
              name={item.name}
              quontation={item.quotation}
              photo={item.photo.fluid}
            />
          )
        }
      })}
      <div className={styles.buttons}>
        <ChangeButton type={'left'} click={() => changePhotoHandler('minus')} />
        <ChangeButton type={'right'} click={() => changePhotoHandler('plus')} />
      </div>
    </Section>
  )
}

export default Testimonials
