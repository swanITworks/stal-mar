import React from "react"
import Header from "../Header/Header"

interface MyProps {
  children: React.ReactNode
}

const Layout: React.FC<MyProps> = ({ children }) => {
  return <>{children}</>
}

export default Layout
