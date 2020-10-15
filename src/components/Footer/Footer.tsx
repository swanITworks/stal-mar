import React from 'react'
import * as styles from './Footer.module.scss'
import Section from '../../hoc/Section/Section'
import Logo from '../UI/Logo/Logo'
import NavItems from '../Navigation/NavigationItems/NavItems'

const Footer = (): JSX.Element => {
  const year = new Date().getFullYear()

  return (
    <Section
      type={'dark'}
      style={{
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '4rem',
        color: 'white',
        alignItems: 'center',
      }}
    >
      <Logo />
      <NavItems />
      <p>Copyright {year}</p>
    </Section>
  )
}

export default Footer
