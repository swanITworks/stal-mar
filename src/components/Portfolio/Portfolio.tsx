import React, { useState } from 'react'
import Button from '../UI/Button/Button'
import PortfolioItem from './PortfolioItems/PortfolioItem/PortfolioItem'
import { graphql, useStaticQuery, Link } from 'gatsby'
import SectName from '../UI/SectName/SectName'
import SectTitle from '../UI/SectTittle/SectTitle'
import SectInfo from '../UI/SectInfo/SectInfo'
import Section from '../../hoc/Section/Section'
import ChangeButton from '../UI/ChangeButton/ChangeButton'
import * as styles from './Portfolio.module.scss'
import PortfolioItems from './PortfolioItems/ProtfolioItems'

const getData = graphql`
  {
    portfolio: contentfulPortfolioSection {
      title
      info
      name
    }
    portfolioItems: allContentfulPortfolioItems(
      sort: { fields: title, order: ASC }
    ) {
      nodes {
        category
        title
        info {
          info
        }
        mainPhoto {
          fluid(maxHeight: 500) {
            ...GatsbyContentfulFluid
          }
        }
        photos {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
const Portfolio = ({ type }) => {
  const {
    portfolio,
    portfolioItems: { nodes: items },
  } = useStaticQuery(getData)
  const [indexToShow, setIndexToShow] = useState(0)

  const changePhotoHandler = type => {
    switch (type) {
      case 'plus':
        if (indexToShow !== items.length - 1) {
          setIndexToShow(indexToShow => indexToShow + 1)
        } else setIndexToShow(0)
        break

      case 'minus':
        if (indexToShow !== 0) {
          setIndexToShow(indexToShow => indexToShow - 1)
        } else setIndexToShow(items.length - 1)
        break
    }
  }

  return (
    <Section
      type={'dark'}
      style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
    >
      <div className={styles.changeFlexBox}>
        <div className={styles.leftSide}>
          <SectName text={portfolio.name} type={'orange'} />
          <SectTitle text={portfolio.title} />
          <SectInfo type={'transparent'} text={portfolio.info} />
        </div>
        {type !== 'more' && (
          <div className={styles.rightSide}>
            <Link to="portfolio">
              <Button text={'Wiecej'} type={'orange'} />
            </Link>
          </div>
        )}
      </div>
      <PortfolioItems
        device="mobile"
        type={type}
        toShow={indexToShow}
        items={items}
      />
      <PortfolioItems
        device="desktop"
        type={type}
        toShow={indexToShow}
        items={items}
      />
      {type === 'more' ? null : (
        <div className={styles.buttons}>
          <ChangeButton
            type={'left'}
            click={() => changePhotoHandler('minus')}
          />
          <ChangeButton
            type={'right'}
            click={() => changePhotoHandler('plus')}
          />
        </div>
      )}
    </Section>
  )
}

export default Portfolio
