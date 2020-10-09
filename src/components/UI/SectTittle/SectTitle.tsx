import React from 'react'
import * as styles from './SectTitle.module.scss'

const SectTitle = ({text}):JSX.Element =>{

  return (
  <h3 className={styles.sectTitle}>{text}</h3>
  )
  }

export default SectTitle