import React from 'react'
import * as styles from './SectTitle.module.scss'

const SectTitle = ({ text, type }): JSX.Element => {
  let sectionStyles: string[] = [styles.sectTitle]

  if (type === 'dark') {
    sectionStyles.push(styles.darkColor)
  }

  return <h3 className={sectionStyles.join(' ')}>{text}</h3>
}

export default SectTitle
