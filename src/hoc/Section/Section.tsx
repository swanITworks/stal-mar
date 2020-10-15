import React from 'react'
import * as styles from './Section.module.scss'

const Section = ({ children, type }): JSX.Element => {
  let sectionStyles: string[] = [styles.section]

  if (type === 'dark') {
    sectionStyles.push(styles.dark)
  } else if (type === 'veryLight') {
    sectionStyles.push(styles.veryLight)
  } else if (type === 'almostDark') {
    sectionStyles.push(styles.almostDark)
  } else sectionStyles.push(styles.light)

  return <section className={sectionStyles.join(' ')}>{children}</section>
}

export default Section
