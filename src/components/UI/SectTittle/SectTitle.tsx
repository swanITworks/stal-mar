import React from 'react'
import * as styles from './SectTitle.module.scss'

const SectTitle = ({ text, type, position }): JSX.Element => {
  let sectionStyles: string[] = [styles.sectTitle]

  if (type === 'dark') {
    sectionStyles.push(styles.darkColor)
  }

  if (position === 'first') {
    sectionStyles.push(styles.goDown)
  }

  return <h3 className={sectionStyles.join(' ')}>{text}</h3>
}

export default SectTitle
