import React from 'react'
import PortfolioItem from './PortfolioItem/PortfolioItem'
import * as styles from './PortfolioItems.module.scss'

const PortfolioItems = ({ device, items, toShow, type }): JSX.Element => {
  const quantityItemsOnPage = 3

  const printItems = (toShow, howManyItems, items) => {
    const itemsToShow = [...items]

    itemsToShow.forEach((item, index) => {
      if (index < howManyItems - 1) {
        itemsToShow.push(item)
      }
    })

    const toPrint = itemsToShow.map((item, index) => {
      if (index < toShow + howManyItems && index >= toShow) {
        return (
          <PortfolioItem
            key={index}
            title={item.title}
            mainPhoto={item.mainPhoto.fluid}
            category={item.category}
          />
        )
      }
    })

    return toPrint
  }

  switch (device) {
    case 'mobile':
      if (type === 'more') {
        return (
          <div className={styles.itemsForMobile}>
            {items.map((item, index) => {
              return (
                <PortfolioItem
                  key={index + item.title}
                  title={item.title}
                  mainPhoto={item.mainPhoto.fluid}
                  category={item.category}
                />
              )
            })}
          </div>
        )
      } else {
        return (
          <div className={styles.itemsForMobile}>
            <PortfolioItem
              title={items[toShow].title}
              mainPhoto={items[toShow].mainPhoto.fluid}
              category={items[toShow].category}
            />
          </div>
        )
      }

    case 'desktop':
      if (type === 'more') {
        return (
          <div className={styles.itemsForDesktop}>
            {items.map((item, index) => {
              return (
                <PortfolioItem
                  key={index + item.title}
                  title={item.title}
                  mainPhoto={item.mainPhoto.fluid}
                  category={item.category}
                />
              )
            })}
          </div>
        )
      } else
        return (
          <div className={styles.itemsForDesktop}>
            {printItems(toShow, quantityItemsOnPage, items)}
          </div>
        )
  }
}

export default PortfolioItems
