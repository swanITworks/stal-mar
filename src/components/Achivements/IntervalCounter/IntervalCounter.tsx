import React, { useState, useEffect } from 'react'
import * as styles from './IntervalCounter.module.scss'
import { Icon, InlineIcon } from '@iconify/react'

const IntervalCounter = (props): JSX.Element => {
  const {
    title,
    max,
    icon,
    unit,
    count,
    speed,
    windowWidth,
    enterSection,
  } = props

  const [intCon, setIntCon] = useState(0)
  const [enter, setEnter] = useState(false)

  const myInterval = () => {
    const sesion = setInterval(
      () => setIntCon(intCon => intCon + count || 1),
      speed || 100
    )
    return sesion
  }

  useEffect(() => {
    let newSesion
    if (intCon < max && enter) {
      newSesion = myInterval()
    }
    return () => {
      clearInterval(newSesion)
    }
  }, [intCon, enter])

  useEffect(() => {
    if (windowWidth >= 715 && enterSection) {
      setEnter(true)
    }
  }, [enterSection, windowWidth])

  return (
    <article
      className={styles.achivementsItem}
      onMouseEnter={() => {
        if (windowWidth < 715) {
          setEnter(true)
        }
      }}
      onTouchMove={() => {
        if (windowWidth < 715) {
          setEnter(true)
        }
      }}
    >
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
        {intCon} {unit}
      </h6>

      <h5 className={styles.blob}>{title}</h5>
    </article>
  )
}

export default IntervalCounter
