import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import ToolBar from '../../components/Navigation/ToolBar/ToolBar'

interface MyProps {
  children: React.ReactNode
}

const Layout = (props: MyProps): JSX.Element => {
  return (
    <>
      <header>
        <ToolBar />
        <Banner />
      </header>
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
