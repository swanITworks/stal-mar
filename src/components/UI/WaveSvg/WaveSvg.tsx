import React from 'react'
import Wave from '../../../assets/waveAbout.svg'
import * as styles from './WaveSvg.module.scss'

const WaveSvg = ({ type, rotate }): JSX.Element => {
  const waveStyles = []

  if (type === 'light') {
    waveStyles.push(styles.waveLight)
  }

  if (type === 'dark') {
    waveStyles.push(styles.waveDark)
  }

  if (rotate) {
    waveStyles.push(styles.rotate)
  }

  return <Wave className={waveStyles.join(' ')} />
}

export default WaveSvg
