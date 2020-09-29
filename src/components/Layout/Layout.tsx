import React from "react"
import Header from "../Header/Header"

interface MyProps {
  children: React.ReactNode
}

const Layout = (props: MyProps): JSX.Element => {
  return (
    <>
      <Header />
      {props.children}
    </>
  )
}

export default Layout
