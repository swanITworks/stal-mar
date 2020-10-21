import React from 'react'
import * as styles from './Button.module.scss'

const Button = ({ type, text, style }): JSX.Element => {
  switch (type) {
    case 'orange':
      return (
        <button className={styles.button} style={style}>
          {text ? text : 'Więcej'}
        </button>
      )
    case 'black':
      return (
        <button className={styles.buttonBlack} style={style}>
          {text ? text : 'Więcej'}
        </button>
      )
    default:
      return (
        <button className={styles.button} style={style}>
          {text ? text : 'Więcej'}
        </button>
      )
  }
}

export default Button
