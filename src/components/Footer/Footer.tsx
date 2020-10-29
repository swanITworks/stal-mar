import React from 'react'
import * as styles from './Footer.module.scss'
import Section from '../../hoc/Section/Section'
import Logo from '../UI/Logo/Logo'
import NavItems from '../Navigation/NavigationItems/NavItems'
import { useStaticQuery, graphql, Link } from 'gatsby'
import FacebookIcon from '../../assets/facebook.svg'

const getData = graphql`
  {
    items: allContentfulProductsItems {
      nodes {
        title
        slug
      }
    }
  }
`

const Footer = (): JSX.Element => {
  const {
    items: { nodes: ourProducts },
  } = useStaticQuery(getData)
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
      <div className={styles.footerContent}>
        <div className={styles.logoSocial}>
          <Logo style={{ width: '250px' }} />
          <div>
            <h3 className={styles.title}>SOCIAL</h3>
            <FacebookIcon style={{ width: '50px' }} />
          </div>
        </div>

        <div className={styles.menu}>
          <h3 className={styles.title}>MENU</h3>
          <NavItems type={'footer'} />
        </div>
        <div className={styles.offer}>
          <h3 className={styles.title}>OFERTA</h3>
          <nav>
            <ul>
              {ourProducts.map(item => (
                <li key={item.slug}>
                  <Link to={'/oferta/' + item.slug}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <p className={styles.copyright}>Copyright {year}</p>
    </Section>
  )
}

export default Footer
