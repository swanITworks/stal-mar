import React, { useState, useRef, useEffect } from 'react'
import * as styles from './Achievements.module.scss'
import AchievementsItem from './AchievementsItem/AchievementsItem'
import gateIcon from '@iconify/icons-mdi/gate'
import bxsFactory from '@iconify/icons-bx/bxs-factory'
import fence15 from '@iconify/icons-maki/fence-15'
import weightHanging from '@iconify/icons-fa-solid/weight-hanging'
import { useStaticQuery, graphql } from 'gatsby'

const myData: object[] = [
  {
    title: 'Na rynku',
    value: 6,
    recentValue: 0,
    unit: 'lat',
    icon: bxsFactory,
    delay: 500,
    count: 1,
  },
  {
    title: 'Wykonanych bram',
    value: 139,
    recentValue: 0,
    unit: 'szt',
    icon: gateIcon,
    delay: 30,
    count: 1,
  },
  {
    title: 'Waga najciezszej bramy',
    value: 300,
    recentValue: 0,
    unit: 'kg',
    icon: weightHanging,
    delay: 10,
    count: 1,
  },
  {
    title: 'Wykonanych ogrodzeń',
    value: 239,
    recentValue: 0,
    unit: 'km',
    icon: fence15,
    delay: 20,
    count: 1,
  },
]

const getData = graphql`
  {
    section: contentfulAchievementsSection {
      title
    }
    items: allContentfulAchievementsItems {
      nodes {
        title
        unit
        value
        count
        delay
        icon {
          file {
            url
          }
        }
      }
    }
  }
`
const Achievements = (): JSX.Element => {
  const [achievementsData, setachievementsData] = useState(myData)
  const [enterSection, setEnterSecion] = useState(false)

  const sectionRef = useRef(null)

  const {
    section: { title },
    items: { nodes: arrayItems },
  } = useStaticQuery(getData)

  useEffect(() => {
    const scrollHandler = () => {
      if (sectionRef.current) {
        const dimensions = sectionRef.current.getBoundingClientRect()
        if (
          dimensions.y < 300 &&
          dimensions.y + dimensions.height > 0 &&
          !enterSection
        ) {
          setEnterSecion(true)
        }
      }
    }
    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      onMouseEnter={() => {
        setEnterSecion(true)
      }}
      onTouchMove={() => {
        setEnterSecion(true)
      }}
      onTouchStart={() => {
        setEnterSecion(true)
      }}
      className={styles.achivements}
    >
      <h4>{title}</h4>
      <div className={styles.elements}>
        {arrayItems.map((item, index) => {
          return (
            <AchievementsItem
              key={index}
              title={item.title}
              max={item.value}
              unit={item.unit}
              icon={item.icon}
              speed={item.delay}
              count={1}
              enterSection={enterSection}
            ></AchievementsItem>
          )
        })}
      </div>
    </section>
  )
}

export default Achievements
