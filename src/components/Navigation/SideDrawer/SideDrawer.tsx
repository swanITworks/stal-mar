import React from 'react'
import { Link } from 'gatsby'
import * as styles from './SideDrawer.module.scss'

const SideDrawer = (): JSX.Element => {
  return (
    <nav className={styles.sideDrawer}>
      <li>
        <p>Welcome from Side Drawer</p>
      </li>
    </nav>
  )
}

export default SideDrawer
