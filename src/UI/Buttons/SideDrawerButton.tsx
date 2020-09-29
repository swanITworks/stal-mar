import React from "react"
import * as styles from "./SideDrawerButton.module.scss"

interface MyProps {
  isOpen: boolean
}

const SideDrawerButton = (props: MyProps): JSX.Element => {
  const closedButton: JSX.Element = (
    <div className={styles.button}>
      <div className={styles.lineClosed}></div>
      <div className={styles.lineClosed}></div>
    </div>
  )

  const openButtons: JSX.Element = (
    <div className={styles.button}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  )

  if (props.isOpen) {
    return closedButton
  }
  return openButtons
}

export default SideDrawerButton
