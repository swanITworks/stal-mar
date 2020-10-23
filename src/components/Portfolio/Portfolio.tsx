import React, { useState } from 'react'
import Button from '../UI/Button/Button'
import PortfolioItem from './PortfolioItem/PortfolioItem'
import { graphql, useStaticQuery } from 'gatsby'
import SectName from '../UI/SectName/SectName'
import SectTitle from '../UI/SectTittle/SectTitle'
import SectInfo from '../UI/SectInfo/SectInfo'
import Section from '../../hoc/Section/Section'
import ChangeButton from '../UI/ChangeButton/ChangeButton'
import * as styles from './Portfolio.module.scss'

const getData = graphql`
  {
    portfolio: contentfulPortfolioSection {
      title
      info
      name
    }
    portfolioItems: allContentfulPortfolioItems {
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
const Portfolio = () => {
  const {
    portfolio,
    portfolioItems: { nodes: items },
  } = useStaticQuery(getData)
  const [indexToShow, setIndexToShow] = useState(0)

  const changePhotoHandlerMini = type => {
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
        <div className={styles.rightSide}>
          <Button text={'Wiecej'} type={'orange'} />
        </div>
      </div>
      <div className={styles.itemsForMobile}>
        {items.map((item, index) => {
          if (index === indexToShow) {
            return (
              <PortfolioItem
                key={index}
                mainPhoto={item.mainPhoto.fluid}
                title={item.title}
                category={item.category}
              />
            )
          }
        })}
      </div>
      <div className={styles.itemsForDevices}>
        {items.map((item, index) => {
          if (index <= indexToShow + 2 && index >= indexToShow) {
            return (
              <PortfolioItem
                key={index}
                mainPhoto={item.mainPhoto.fluid}
                title={item.title}
                category={item.category}
              />
            )
          } else {
          }
        })}
      </div>
      <div className={styles.buttonsMobile}>
        <ChangeButton
          type={'left'}
          click={() => changePhotoHandlerMobile('minus')}
        />
        <ChangeButton
          type={'right'}
          click={() => changePhotoHandlerMobile('plus')}
        />
      </div>
    </Section>
  )
}

export default Portfolio
