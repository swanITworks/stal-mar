import React from 'react'
import * as styles from './Hide.module.scss'

const Hide = ({ children }): JSX.Element => {
  return <div className={styles.hide}>{children}</div>
}

export default Hide
