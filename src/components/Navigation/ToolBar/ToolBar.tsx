import React, { useState } from 'react'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import Logo from '../../UI/Logo/Logo'
import * as styles from './ToolBar.module.scss'
import SideDrawer from '../SideDrawer/SideDrawer'

const ToolBar = (): JSX.Element => {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false)

  const onClickHandler = (): void => {
    setIsSideDrawerOpen(!isSideDrawerOpen)
  }

  return (
    <>
      <section className={styles.toolBar}>
        <Logo />
        <DrawerToggle click={onClickHandler} isOpen={isSideDrawerOpen} />
      </section>
      {isSideDrawerOpen ? <SideDrawer /> : null}
    </>
  )
}

export default ToolBar
