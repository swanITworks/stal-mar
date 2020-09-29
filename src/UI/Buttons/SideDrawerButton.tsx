import React from "react"
import * as styles from "./SideDrawerButton.module.scss"

interface MyProps {
  isOpen: boolean
}

const SideDrawerButton: React.ReactNode = ({ isOpen }: MyProps) => {
  //   let closedButton: React.ReactNode = (
  //     <div className={styles.button}>
  //       <div className={styles.lineClosed}></div>
  //       <div className={styles.lineClosed}></div>
  //     </div>
  //   )

  //   let openButtons: React.ReactNode = (
  //     <div className={styles.button}>
  //       <div className={styles.line}></div>
  //       <div className={styles.line}></div>
  //       <div className={styles.line}></div>
  //     </div>
  //   )

  //   if (isOpen) {
  //     return closedButton
  //   } else return openButtons
  return <div>button sideBara</div>
}

export default SideDrawerButton
