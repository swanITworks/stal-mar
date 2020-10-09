import React from 'react'
import * as styles from './SectInfo.module.scss'

const SectInfo = ({text,type}):JSX.Element => {
  
  let sectionStyles:string[] = [styles.info];

  if (type==='transparent'){
    sectionStyles.push(styles.transparent)
  }

  return (
    <article>
      <p className={sectionStyles.join(' ')}>{text}</p>
    </article>

  )
  }

export default SectInfo