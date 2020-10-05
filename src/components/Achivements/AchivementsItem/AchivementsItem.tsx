import React, { useState } from 'react'
import * as styles from './AchivementsItem.module.scss'
import { Icon, InlineIcon } from '@iconify/react'

const AchivementsItem = (props: string): JSX.Element => {
  interface MyProps {
    title: string
    value: number
  }

  const { title, value, icon, unit } = props

  return (
    <article className={styles.achivementsItem}>
      <div
        style={{
          border: '2px solid #F07A3A',
          borderRadius: '150px',
          width: '150px',
          height: '150px',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem',
        }}
      >
        <Icon
          icon={icon}
          style={{
            width: '100px',
            height: '100px',
            color: '#F07A3A',
          }}
        />
      </div>

      <h6 className={styles.blob}>
        {value} {unit}
      </h6>

      <h5 className={styles.blob}>{title}</h5>
    </article>
  )
}

export default AchivementsItem
