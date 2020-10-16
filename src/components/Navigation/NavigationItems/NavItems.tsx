import React from 'react'
import { Link } from 'gatsby'
import * as styles from './NavItems.module.scss'

const NavItems: React.FC = () => {
  return (
    <nav>
      <ul className={styles.list}>
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
