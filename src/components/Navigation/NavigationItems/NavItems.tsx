import React from 'react'
import { Link, useStaticQuery } from 'gatsby'
import * as styles from './NavItems.module.scss'

const NavItems: React.FC = () => {
  const stylesArray = [styles.list, styles.hide]

  return (
    <nav>
      <ul className={stylesArray.join(' ')}>
        <li>
          <Link to="/">Start</Link>
        </li>
        <li>
          <Link to="/o-nas">O nas</Link>
        </li>
        <li>
          <Link to="/oferta/">Oferta</Link>
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

export default NavItems
