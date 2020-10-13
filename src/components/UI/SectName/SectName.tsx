import React from 'react'
import * as styles from './SectName.module.scss'

const SectName = ({ text, type }): JSX.Element => {
  let sectionStyles: string[] = [styles.sectName]

  if (type === 'orange') {
    sectionStyles.push(styles.changeColor)
  }

  return <h2 className={sectionStyles.join(' ')}>{text}</h2>
}

export default SectName
