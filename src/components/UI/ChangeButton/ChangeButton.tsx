import React from 'react'
import * as styles from './ChangeButton.module.scss'

const ChangeButton = ({ type, click }): JSX.Element => {
  switch (type) {
    case 'right':
      return (
        <button className={styles.button} onClick={click}>
          <div className={styles.right}></div>
        </button>
      )
    case 'left':
      return (
        <button className={styles.button} onClick={click}>
          <div className={styles.left}></div>
        </button>
      )
  }
}

export default ChangeButton
