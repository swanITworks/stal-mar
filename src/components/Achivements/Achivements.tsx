import React from 'react'
import * as styles from './Achivements.module.scss'
import AchivementsItem from './AchivementsItem/AchivementsItem'
import { faCoffee, faIndustry } from '@fortawesome/free-solid-svg-icons'

const Achivements = (): JSX.Element => {
  const achivementsData: object[] = [
    {
      title: 'Lat na rynku',
      value: '6',
    },
    {
      title: 'Wykonanych bram',
      value: '139',
    },
    {
      title: 'Wykonanych km ogrodzenia',
      value: '139',
    },
    {
      title: 'Waga najciezszej bramy w kg',
      value: '300',
    },
  ]
  return (
    <section className={styles.achivements}>
      <h4>
        Behind the word mountains, far from the countries, there live the blind
        texts.
      </h4>
      {achivementsData.map((item, index) => {
        return (
          <AchivementsItem
            key={index}
            title={item.title}
            value={item.value}
            icon={faIndustry}
          >
            a1
          </AchivementsItem>
        )
      })}
    </section>
  )
}

export default Achivements
