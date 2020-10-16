import React, { useState, useEffect } from 'react'
import * as styles from './AchievementsItem.module.scss'
import { Icon, InlineIcon } from '@iconify/react'
import SVG from 'react-inlinesvg'

const AchievementsItem = (props): JSX.Element => {
  const { title, max, icon, unit, count, speed, enterSection } = props

  const [intCon, setIntCon] = useState(0)
  const [enter, setEnter] = useState(false)

  console.log(icon)

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
    if (enterSection) {
      setEnter(true)
    }
  }, [enterSection])

  const info = (
    <>
      <h6 className={styles.blob}>
        {intCon} {unit}
      </h6>
      <h5 className={styles.blob}>{title}</h5>
    </>
  )

  return (
    <article className={styles.achievementsItem}>
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
          fontSize: '50px',
        }}
      >
        <SVG src={`https:${icon}`} className={styles.check} />
      </div>
      {enter ? info : null}
    </article>
  )
}

export default AchievementsItem
