import React from 'react'
import { Link, useStaticQuery } from 'gatsby'
import * as styles from './NavItems.module.scss'

const NavItems: JSX.Element = ({ isScrolling }) => {
  let stylesArray: string[] = []

  if ((isScrolling = true)) {
    stylesArray = [styles.listWhenScrolling]
  } else {
    stylesArray = [styles.listNoScrolling]
  }

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
