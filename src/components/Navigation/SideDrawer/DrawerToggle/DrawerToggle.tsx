import React from 'react'
import * as styles from './DrawerToggle.module.scss'

interface MyProps {
  isOpen: boolean
  click: any
}

const SideDrawerButton = (props: MyProps): JSX.Element => {
  const openButton: JSX.Element = (
    <button
      className={[styles.hamburger, styles.hamburgerSlider].join(' ')}
      type="button"
      onClick={props.click}
    >
      <span className={styles.hamburgerBox}>
        <span className={styles.hamburgerInner}></span>
      </span>
    </button>
  )

  const closeButton: JSX.Element = (
    <button
      className={[
        styles.hamburger,
        styles.hamburgerSlider,
        styles.isActive,
      ].join(' ')}
      type="button"
      onClick={props.click}
    >
      <span className={styles.hamburgerBox}>
        <span className={styles.hamburgerInner}></span>
      </span>
    </button>
  )

  if (props.isOpen) {
    return closeButton
  }

  return openButton
}

export default SideDrawerButton
