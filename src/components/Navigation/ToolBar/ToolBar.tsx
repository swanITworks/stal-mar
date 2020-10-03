import React, { useState, useEffect } from 'react'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import Logo from '../../UI/Logo/Logo'
import * as styles from './ToolBar.module.scss'
import SideDrawer from '../SideDrawer/SideDrawer'

const ToolBar = (): JSX.Element => {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false)
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

  const onClickHandler = (): void => {
    setIsSideDrawerOpen(!isSideDrawerOpen)
  }

  let topStyles: string[] = [styles.top, styles.toolBarOpen]

  if (!isSideDrawerOpen && !isScrolling) {
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
