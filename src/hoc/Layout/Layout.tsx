import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import ToolBar from '../../components/Navigation/ToolBar/ToolBar'
import Backdrop from '../../components/UI/Backdrop/Backdrop'

interface MyProps {
  children: React.ReactNode
}

const Layout = (props: MyProps): JSX.Element => {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false)

  const onClickHandler = (): void => {
    setIsSideDrawerOpen(!isSideDrawerOpen)
  }

  return (
    <>
      <header>
        <ToolBar
          isSideDrawerOpen={isSideDrawerOpen}
          onClickHandler={onClickHandler}
          closeSideBar={() => setIsSideDrawerOpen(false)}
        />

        {isSideDrawerOpen ? <Backdrop click={onClickHandler} /> : null}
      </header>
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        onClick={() => {
          setIsSideDrawerOpen(false)
        }}
      >
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
