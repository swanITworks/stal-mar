import React, { Component } from "react"
import SideDrawerButton from "../../UI/Buttons/SideDrawerButton"

const Header = (): JSX.Element => {
  return (
    <div>
      <SideDrawerButton isOpen={true} />
    </div>
  )
}

export default Header
