import React from 'react'
import * as styles from './Logo.module.scss'

const Logo = ({ isScrolling }): JSX.Element => {
  let logoStyles: string[] = []

  if (isScrolling === true) {
    logoStyles = [styles.logoWhenScrolling]
  } else {
    logoStyles = [styles.logoWithOutScrolling]
  }

  return <h2 className={logoStyles.join(' ')}>Stal-Mar</h2>
}

export default Logo
