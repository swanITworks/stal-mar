import React from 'react'
import * as styles from './Button.module.scss'

const Button = ({ type, text, style, click }): JSX.Element => {
  switch (type) {
    case 'orange':
      return (
        <button className={styles.button} style={style} onClick={click}>
          {text ? text : 'Więcej'}
        </button>
      )
    case 'black':
      return (
        <button className={styles.buttonBlack} style={style} onClick={click}>
          {text ? text : 'Więcej'}
        </button>
      )
    default:
      return (
        <button className={styles.button} style={style} onClick={click}>
          {text ? text : 'Więcej'}
        </button>
      )
  }
}

export default Button
