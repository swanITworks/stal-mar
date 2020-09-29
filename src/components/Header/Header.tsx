import React from "react"
import SideDrawerButton from "../../UI/Buttons/SideDrawerButton"

const Header: React.ReactNode = () => {
  return (
    <div>
      <SideDrawerButton isOpen={false} />
    </div>
  )
}

export default Header
