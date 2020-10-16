import React from 'react'
import * as styles from './Backdrop.module.scss'

const Backdrop = ({ click }) => {
  return <div onClick={click} className={styles.backdrop}></div>
}

export default Backdrop
