import React from 'react'
import Button from '../UI/Button/Button'
import PortfolioItem from './PortfolioItem/PortfolioItem'
import * as styles from './Portfolio.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const getData = graphql`
  {
    fastContact: contentfulFastContact {
      personPhoto {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      title
      info
    }
  }
`

const Portfolio = () => {
  const { fastContact } = useStaticQuery(getData)

  return (
    <section className={styles.portfolio}>
      <h2>Portfolio</h2>
      <h3>The Latest & Greatest Industrial Projects</h3>
      <article>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast.
        </p>
      </article>
      <Button text={'Wiecej'} type={'orange'} />
      <PortfolioItem />
    </section>
  )
}

export default Portfolio
