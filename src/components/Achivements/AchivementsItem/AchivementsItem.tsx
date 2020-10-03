import React from 'react'
import * as styles from './AchivementsItem.module.scss'

const AchivementsItem = (props: string): JSX.Element => {
  interface MyProps {
    title: string
    value: number
  }

  const { title, value } = props

  return (
    <article className={styles.achivementsItem}>
      <h6>{value}</h6>
      <h5>{title}</h5>
    </article>
  )
}

export default AchivementsItem
