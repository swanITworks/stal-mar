import React, { useState, useEffect } from 'react'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import Logo from '../../UI/Logo/Logo'
import * as styles from './ToolBar.module.scss'
import SideDrawer from '../SideDrawer/SideDrawer'
import NavItems from '../NavigationItems/NavItems'

const ToolBar = ({
  isSideDrawerOpen,
  onClickHandler,
  closeSideBar,
}): JSX.Element => {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const changeStateIsScrolling = (): void => {
      if (window.pageYOffset === 0) {
        setIsScrolling(false)
      } else setIsScrolling(true)
    }
    window.addEventListener('scroll', changeStateIsScrolling)
    return (): void =>
      window.removeEventListener('scroll', changeStateIsScrolling)
  }, [])

  let topStyles: string[] = [styles.top, styles.toolBarOpen]
  let sectionStyles: string[] = [styles.toolBar, styles.bGColorWhenScrolling]

  if (!isSideDrawerOpen && !isScrolling) {
    topStyles = [styles.top]
    sectionStyles = [styles.toolBar]
  }

  return (
    <>
      <section className={sectionStyles.join(' ')}>
        <div className={topStyles.join(' ')}>
          <Logo />
          <DrawerToggle click={onClickHandler} isOpen={isSideDrawerOpen} />
          <div className={styles.navigation}>
            <NavItems />
          </div>
        </div>
        {isSideDrawerOpen ? <SideDrawer closeSideBar={closeSideBar} /> : null}
      </section>
    </>
  )
}

export default ToolBar
