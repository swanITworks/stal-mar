import React from 'react'
import { Link, useStaticQuery } from 'gatsby'
import * as styles from './NavItems.module.scss'

const NavItems: JSX.Element = ({ isScrolling, type }) => {
  let stylesArray: string[] = []

  if ((isScrolling = true) && type === undefined) {
    stylesArray = [styles.listWhenScrolling]
  } else if ((isScrolling = false) && type === undefined) {
    stylesArray = [styles.listNoScrolling]
  } else if ((type = 'footer')) {
    stylesArray = [styles.footer]
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
