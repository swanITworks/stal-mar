import React, { useState, useRef, useEffect } from 'react'
import * as styles from './Achievements.module.scss'
import AchievementsItem from './AchievementsItem/AchievementsItem'
import { useStaticQuery, graphql } from 'gatsby'

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
            fileName
            contentType
          }
          svg {
            content
            dataURI
            absolutePath
            relativePath
          }
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
const Achievements = (): JSX.Element => {
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
      <div className={styles.content}>
        <h2>{title}</h2>
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
      </div>
    </section>
  )
}

export default Achievements
