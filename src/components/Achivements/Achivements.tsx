import React, { useState, useEffect } from 'react'
import * as styles from './Achivements.module.scss'
import AchivementsItem from './AchivementsItem/AchivementsItem'
import gateIcon from '@iconify/icons-mdi/gate'
import bxsFactory from '@iconify/icons-bx/bxs-factory'
import fence15 from '@iconify/icons-maki/fence-15'
import weightHanging from '@iconify/icons-fa-solid/weight-hanging'
import Counter from './Counter/Counter'

const myData: object[] = [
  {
    title: 'Na rynku',
    value: 6,
    recentValue: 0,
    unit: 'lat',
    icon: bxsFactory,
  },
  {
    title: 'Wykonanych bram',
    value: 139,
    recentValue: 0,
    unit: 'szt',
    icon: gateIcon,
  },
  {
    title: 'Waga najciezszej bramy',
    value: 300,
    recentValue: 0,
    unit: 'kg',
    icon: weightHanging,
  },
  {
    title: 'Wykonanych ogrodzeń',
    value: 239,
    recentValue: 0,
    unit: 'km',
    icon: fence15,
  },
]

const Achivements = (): JSX.Element => {
  const [achivementsData, setachivementsData] = useState(myData)

  // const interval = setInterval(() => {
  //   setachivementsData([
  //     {
  //       title: 'Na rynku',
  //       value: 6,
  //       recentValue: achivementsData[0].recentValue + 1,
  //       unit: 'lat',
  //       icon: bxsFactory,
  //     },
  //   ])
  // }, 1000)

  useEffect(() => {
    const interval = setInterval(() => {
      setachivementsData([
        {
          ...achivementsData[0],
          recentValue:
            achivementsData[0].recentValue < achivementsData[0].value
              ? achivementsData[0].recentValue + 1
              : achivementsData[0].value,
        },
        {
          ...achivementsData[1],
          recentValue:
            achivementsData[1].recentValue < achivementsData[1].value
              ? achivementsData[1].recentValue + 10
              : achivementsData[1].value,
        },
        {
          ...achivementsData[2],
          recentValue:
            achivementsData[2].recentValue < achivementsData[2].value
              ? achivementsData[2].recentValue + 10
              : achivementsData[2].value,
        },
        {
          ...achivementsData[3],
          recentValue:
            achivementsData[3].recentValue < achivementsData[3].value
              ? achivementsData[3].recentValue + 10
              : achivementsData[3].value,
        },
      ])
    }, 100)
    return () => {
      clearInterval(interval)
    }
  }, [achivementsData])

  return (
    <section className={styles.achivements}>
      <h4>
        Behind the word mountains, far from the countries, there live the blind
        texts.
      </h4>
      <div className={styles.elements}>
        {achivementsData.map((item, index) => {
          return (
            <AchivementsItem
              key={index}
              title={item.title}
              value={item.recentValue}
              unit={item.unit}
              icon={item.icon}
            ></AchivementsItem>
          )
        })}
      </div>
      <Counter />
    </section>
  )
}

export default Achivements
