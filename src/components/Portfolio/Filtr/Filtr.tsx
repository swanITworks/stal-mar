import React, { useContext, useState } from 'react'
import { Link } from 'gatsby'
import * as styles from './Filtr.module.scss'
import { category } from '../PortfolioItems/PortfolioItem/PortfolioItem.module.scss'

const Filtr = ({ categories, choosenCategory }): JSX.Element => {
  const [isFiltrOpen, setIsFiltrOpen] = useState(false)
  const [recentChoose, setRecentChoose] = useState(
    categories.indexOf(choosenCategory)
  )

  const changeCategoryToPath = category => {
    if (category === 'Brak') {
      return ''
    }
    return category.replace(/\s/g, '-').toLowerCase().replace(/[ó]/g, 'o')
  }

  const ArrayOfListItemStyles = []
  const ArrayOfListStyles = []
  let ArrayOfIconStyles = []

  if (!categories.find(item => item === 'Brak')) {
    categories.unshift('Brak')
  }

  ArrayOfListItemStyles.push(styles.filtrItems)

  if (!isFiltrOpen) {
    ArrayOfListStyles.push(styles.listHide)
    ArrayOfIconStyles = [styles.iconUP]
  } else {
    ArrayOfIconStyles = [styles.iconDown]
  }

  let indexOfChoosenCategory = categories.indexOf(choosenCategory)

  if (indexOfChoosenCategory === -1) {
    return (
      <div id="filtr" className={styles.filtrSection}>
        <div className={styles.info}>Filtruj:</div>
        <ul className={ArrayOfListStyles.join(' ')}>
          {categories.map((categoryItem, index) => {
            return (
              <li className={ArrayOfListItemStyles.join(' ')}>
                <Link
                  to={
                    '/portfolio/' +
                    changeCategoryToPath(categoryItem) +
                    '#filtr'
                  }
                >
                  {categoryItem}
                </Link>
              </li>
            )
          })}
        </ul>

        <button
          onClick={() => {
            setIsFiltrOpen(!isFiltrOpen)
          }}
        >
          <div className={ArrayOfIconStyles.join(' ')}></div>
        </button>
      </div>
    )
  } else
    return (
      <div id="filtr" className={styles.filtrSection}>
        <div className={styles.info}>Filtruj:</div>
        <ul className={ArrayOfListStyles.join(' ')}>
          <li className={ArrayOfListItemStyles.join(' ')}>
            <Link
              to={
                '/portfolio/' +
                changeCategoryToPath(
                  categories[indexOfChoosenCategory] + '#filtr'
                )
              }
            >
              {categories[indexOfChoosenCategory]}
            </Link>
          </li>

          {categories.map((categoryItem, index) => {
            if (index !== indexOfChoosenCategory) {
              return (
                <li className={ArrayOfListItemStyles.join(' ')}>
                  <Link
                    to={
                      '/portfolio/' +
                      changeCategoryToPath(categoryItem) +
                      '#filtr'
                    }
                  >
                    {categoryItem}
                  </Link>
                </li>
              )
            }
          })}
        </ul>
        <button
          onClick={() => {
            setIsFiltrOpen(!isFiltrOpen)
          }}
        >
          <div className={ArrayOfIconStyles.join(' ')}></div>
        </button>
      </div>
    )
}

export default Filtr
