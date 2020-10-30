import React from 'react'
import * as styles from './Backdrop.module.scss'

const Backdrop = ({ click, style }) => {
  return <div onClick={click} className={styles.backdrop} style={style}></div>
}

export default Backdrop
