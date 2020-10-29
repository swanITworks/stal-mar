import React from 'react'
import * as styles from './Logo.module.scss'
import LogoSvg from '../../../assets/logo.svg'

const Logo = ({ isScrolling, style }): JSX.Element => {
  let logoStyles: string[] = []

  if (isScrolling === true) {
    logoStyles = [styles.logoWhenScrolling]
  } else {
    logoStyles = [styles.logoWithOutScrolling]
  }

  return <LogoSvg className={logoStyles.join(' ')} style={style} />
}

export default Logo
