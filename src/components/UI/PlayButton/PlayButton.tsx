import React from 'react'
import * as styles from './PlayButton.module.scss'

const PlayButton = ({ click }): JSX.Element => {
  return (
    <button className={styles.button} onClick={click} aria-label="play">
      <div className={styles.right}>
        <span aria-hidden="true">play</span>
      </div>
    </button>
  )
}

export default PlayButton
