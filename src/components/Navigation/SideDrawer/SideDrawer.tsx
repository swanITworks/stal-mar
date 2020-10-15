import React from 'react'
import { Link } from 'gatsby'
import * as styles from './SideDrawer.module.scss'
import NavigationItems from '../NavigationItems/NavItems'
import NavItems from '../NavigationItems/NavItems'

const SideDrawer = ({ closeSideBar }): JSX.Element => {
  return (
    <div className={styles.sideDrawer} onClick={closeSideBar}>
      <NavItems />
    </div>
  )
}

export default SideDrawer
