import React, { useState } from 'react'
import Section from '../../hoc/Section/Section'
import SectName from '../UI/SectName/SectName'
import SectTitle from '../UI/SectTittle/SectTitle'
import TestimonialsDesktopItem from './TestimonialsDesktopItem/TestimonialsDesktopItem'
import { graphql, useStaticQuery } from 'gatsby'
import { itemsArea } from '../HowWeWork/HowWeWork.module.scss'
import ChangeButton from '../UI/ChangeButton/ChangeButton'
import * as styles from './TestimonialsDesktop.module.scss'
import TestimonialsRest from './TestimonialsRest/TestimonialsRest'

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

const TestimonialsDesktop = (): JSX.Element => {
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
    <section className={styles.testimonialsDesktop}>
      <div className={styles.content}>
        <SectName text={section.name} />
        <SectTitle text={section.title} />
        <div className={styles.mainSection}>
          <div className={styles.leftSide}>
            {arrayItems.map((item, index) => {
              if (indexToShow === index) {
                return (
                  <TestimonialsDesktopItem
                    key={item.name}
                    name={item.name}
                    quontation={item.quotation}
                    photo={item.photo.fluid}
                  />
                )
              }
            })}
          </div>
          <div className={styles.rightSide}>
            <TestimonialsRest items={arrayItems} toExclude={indexToShow} />
            <div className={styles.buttons}>
              <ChangeButton
                style={'light'}
                type={'left'}
                click={() => changePhotoHandler('minus')}
              />
              <ChangeButton
                style={'light'}
                type={'right'}
                click={() => changePhotoHandler('plus')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsDesktop
