import React from 'react'
import * as styles from './PlayButton.module.scss'

const PlayButton = ({ click }): JSX.Element => {
  return (
    <button className={styles.button} onClick={click}>
      <div className={styles.right}></div>
    </button>
  )
}

export default PlayButton
