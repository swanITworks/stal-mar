import React from "react"
import { Link } from "gatsby"

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Start</Link>
        </li>
        <li>
          <Link to="/about">O nas</Link>
        </li>
        <li>
          <Link to="/what-we-do/">Oferta</Link>
        </li>
        <li>
          <Link to="/portfolio/">Portfolio</Link>
        </li>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
