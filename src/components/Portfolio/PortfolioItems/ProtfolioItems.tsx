import React from 'react'
import PortfolioItem from './PortfolioItem/PortfolioItem'
import * as styles from './PortfolioItems.module.scss'

const PortfolioItems = ({ type, items, toShow }): JSX.Element => {
  const quantityItemsOnPage = 3

  const showItems = (quantity, items, start) => {
    let itemsToShow = []
    let itemsFromNewBeginning = start + quantity - items.length

    if (start + quantity <= items.length) {
      for (let index = start; index < quantity + start; index++) {
        itemsToShow.push(
          <PortfolioItem
            title={items[index].title}
            mainPhoto={items[index].mainPhoto.fluid}
            category={items[index].category}
          />
        )
      }
    } else if (itemsFromNewBeginning === 1) {
      itemsToShow.push(
        <PortfolioItem
          title={items[start].title}
          mainPhoto={items[start].mainPhoto.fluid}
          category={items[start].category}
        />
      )
      itemsToShow.push(
        <PortfolioItem
          title={items[items.length - 1].title}
          mainPhoto={items[items.length - 1].mainPhoto.fluid}
          category={items[items.length - 1].category}
        />
      )
      itemsToShow.push(
        <PortfolioItem
          title={items[0].title}
          mainPhoto={items[0].mainPhoto.fluid}
          category={items[0].category}
        />
      )
    } else if (itemsFromNewBeginning === 2) {
      itemsToShow.push(
        <PortfolioItem
          title={items[start].title}
          mainPhoto={items[start].mainPhoto.fluid}
          category={items[start].category}
        />
      )
      itemsToShow.push(
        <PortfolioItem
          title={items[0].title}
          mainPhoto={items[0].mainPhoto.fluid}
          category={items[0].category}
        />
      )
      itemsToShow.push(
        <PortfolioItem
          title={items[1].title}
          mainPhoto={items[1].mainPhoto.fluid}
          category={items[1].category}
        />
      )
    }
    return itemsToShow
  }

  switch (type) {
    case 'mobile':
      return (
        <div className={styles.itemsForMobile}>
          <PortfolioItem
            title={items[toShow].title}
            mainPhoto={items[toShow].mainPhoto.fluid}
            category={items[toShow].category}
          />
        </div>
      )
    case 'device':
      return (
        <div className={styles.itemsForDevices}>
          {showItems(quantityItemsOnPage, items, toShow)}
        </div>
      )
  }
}

export default PortfolioItems
