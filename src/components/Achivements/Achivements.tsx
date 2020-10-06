import React, { useState, useEffect } from 'react'
import * as styles from './Achivements.module.scss'
import AchivementsItem from './AchivementsItem/AchivementsItem'
import gateIcon from '@iconify/icons-mdi/gate'
import bxsFactory from '@iconify/icons-bx/bxs-factory'
import fence15 from '@iconify/icons-maki/fence-15'
import weightHanging from '@iconify/icons-fa-solid/weight-hanging'
import Counter from './Counter/Counter'
import IntervalCounter from './IntervalCounter/IntervalCounter'

const myData: object[] = [
  {
    title: 'Na rynku',
    value: 6,
    recentValue: 0,
    unit: 'lat',
    icon: bxsFactory,
    delay: 500,
  },
  {
    title: 'Wykonanych bram',
    value: 139,
    recentValue: 0,
    unit: 'szt',
    icon: gateIcon,
    delay: 50,
  },
  {
    title: 'Waga najciezszej bramy',
    value: 300,
    recentValue: 0,
    unit: 'kg',
    icon: weightHanging,
    delay: 10,
  },
  {
    title: 'Wykonanych ogrodzeń',
    value: 239,
    recentValue: 0,
    unit: 'km',
    icon: fence15,
    delay: 20,
  },
]

const Achivements = (props): JSX.Element => {
  const [achivementsData, setachivementsData] = useState(myData)
  const [windowWidth, setWindowWidt] = useState(window.innerWidth)
  const [enterSection, setEnterSecion] = useState(false)

  useEffect(() => {
    const sizeHandler = () => {
      setWindowWidt(window.innerWidth)
    }
    window.addEventListener('resize', sizeHandler)

    return () => {
      window.removeEventListener('resize', sizeHandler)
    }
  }, [])

  return (
    <section className={styles.achivements}>
      <h4>
        Behind the word mountains, far from the countries, there live the blind
        texts.
      </h4>
      <div
        onMouseEnter={() => {
          setEnterSecion(true)
        }}
        className={styles.elements}
      >
        {achivementsData.map((item, index) => {
          return (
            <IntervalCounter
              key={index}
              title={item.title}
              max={item.value}
              unit={item.unit}
              icon={item.icon}
              speed={item.delay}
              count={1}
              windowWidth={windowWidth}
              enterSection={enterSection}
            ></IntervalCounter>
          )
        })}
      </div>
    </section>
  )
}

export default Achivements
