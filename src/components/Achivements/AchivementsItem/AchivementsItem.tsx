import React from 'react'
import * as styles from './AchivementsItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const AchivementsItem = (props: string): JSX.Element => {
  interface MyProps {
    title: string
    value: number
  }

  const { title, value, icon } = props

  return (
    <article className={styles.achivementsItem}>
      <div
        style={{
          border: '1px solid #F07A3A',
          borderRadius: '150px',
          width: '150px',
          height: '150px',
          textAlign: 'center',
          paddingTop: '20px',
        }}
      >
        <FontAwesomeIcon
          icon={icon}
          style={{
            width: '100px',
            height: '100px',
            color: '#F07A3A',
          }}
        />
      </div>

      <h6>{value}</h6>
      <h5>{title}</h5>
    </article>
  )
}

export default AchivementsItem
