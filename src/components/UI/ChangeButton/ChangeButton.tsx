import React from 'react'
import * as styles from './ChangeButton.module.scss'

const ChangeButton = ({ style, type, click }): JSX.Element => {
  let arrayButtonStyles: string[] = []
  let arrayDivStyles: string[] = []

  if (style === 'dark') {
    arrayButtonStyles.push(styles.darkColor)
    arrayDivStyles.push(styles.darkColor)
  } else {
    arrayButtonStyles.push(styles.lightColor)
    arrayDivStyles.push(styles.lightColor)
  }

  if (type === 'right') {
    arrayDivStyles.push(styles.right)
  } else {
    arrayDivStyles.push(styles.left)
  }

  return (
    <button
      className={arrayButtonStyles.join(' ')}
      onClick={click}
      aria-label="change-item"
    >
      <div className={arrayDivStyles.join(' ')}>
        <span aria-hidden="true">change element</span>
      </div>
    </button>
  )
}

export default ChangeButton
