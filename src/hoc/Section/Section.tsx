import React from 'react'
import * as styles from './Section.module.scss'

const Section = ({ children, type, style, flexBox, id }): JSX.Element => {
  let sectionStyles: string[] = [styles.section]

  if (type === 'dark') {
    sectionStyles.push(styles.dark)
  } else if (type === 'veryLight') {
    sectionStyles.push(styles.veryLight)
  } else if (type === 'almostDark') {
    sectionStyles.push(styles.almostDark)
  } else sectionStyles.push(styles.light)

  if (flexBox === 'row') {
    sectionStyles.push(styles.sectionFlexBoxRow)
  }

  return (
    <section id={id} className={sectionStyles.join(' ')} style={{ ...style }}>
      <div className={styles.content}>{children}</div>
    </section>
  )
}

export default Section
