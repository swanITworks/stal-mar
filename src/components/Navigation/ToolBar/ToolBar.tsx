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

  let topStyles: string[] = [styles.top, styles.toolBarOpen]

  if (!isSideDrawerOpen) {
    topStyles = [styles.top]
  }

  return (
    <>
      <section className={styles.toolBar}>
        <div className={topStyles.join(' ')}>
          <Logo />
          <DrawerToggle click={onClickHandler} isOpen={isSideDrawerOpen} />
        </div>
        {isSideDrawerOpen ? <SideDrawer /> : null}
      </section>
    </>
  )
}

export default ToolBar
