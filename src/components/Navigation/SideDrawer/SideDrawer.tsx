import React from 'react'
import { Link } from 'gatsby'
import * as styles from './SideDrawer.module.scss'

const SideDrawer = (): JSX.Element => {
  return (
    <nav className={styles.sideDrawer}>
      <ul>
        <li>O nas</li>
        <li>Jak pracujemy</li>
        <li>Produkty</li>
      </ul>
    </nav>
  )
}

export default SideDrawer
