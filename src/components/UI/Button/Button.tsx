import React from 'react'
import * as styles from './Button.module.scss'

const Button = ({ type }): JSX.Element => {
  switch (type) {
    case 'orange':
      return <button className={styles.button}>Wiecej</button>
    case 'black':
      return <button className={styles.buttonBlack}>Wiecej</button>
    default:
      return <button className={styles.button}>Wiecej</button>
  }
}

export default Button
