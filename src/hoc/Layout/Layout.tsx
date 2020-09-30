import React from 'react'
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
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout
