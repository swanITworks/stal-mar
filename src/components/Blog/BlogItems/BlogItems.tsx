import React, { useState } from 'react'
import * as styles from './BlogItems.module.scss'
import BlogItem from './BlogItem/BlogItem'
import ChangeButton from '../../UI/ChangeButton/ChangeButton'

const BlogItems = ({ type, arrayItems }): JSX.Element => {
  const paggination = 3
  const [indexToShow, setIndexToShow] = useState(1)

  const changeHandlerMin = value => {
    switch (value) {
      case 'plus':
        indexToShow < arrayItems.length
          ? setIndexToShow(indexToShow => indexToShow + 1)
          : setIndexToShow(1)
        break

      case 'minus':
        indexToShow === 1
          ? setIndexToShow(arrayItems.length)
          : setIndexToShow(indexToShow => indexToShow - 1)
        break
    }
  }

  const changeHandlerMax = value => {
    const quantityOfSites = Math.ceil(arrayItems.length / paggination)
    switch (value) {
      case 'plus':
        indexToShow + paggination < quantityOfSites * paggination
          ? setIndexToShow(indexToShow => indexToShow + paggination)
          : setIndexToShow(1)
        break

      case 'minus':
        indexToShow === 1
          ? setIndexToShow(quantityOfSites * paggination - paggination + 1)
          : setIndexToShow(indexToShow => Math.abs(indexToShow - paggination))
        break
    }
  }

  if (type === 'more') {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        {arrayItems.map((item, index) => {
          return (
            <BlogItem
              key={item.title}
              title={item.title}
              photoData={item.photo.fluid}
              date={item.date}
              slug={item.slug}
            />
          )
        })}
      </div>
    )
  } else
    return (
      <>
        <div className={styles.articlesListMini}>
          {arrayItems.map((item, index) => {
            if (index === indexToShow - 1) {
              return (
                <BlogItem
                  key={item.title}
                  title={item.title}
                  photoData={item.photo.fluid}
                  date={item.date}
                  slug={item.slug}
                />
              )
            }
          })}
        </div>
        <div className={styles.articlesListMax}>
          {arrayItems.map((item, index) => {
            if (
              index === indexToShow - 1 ||
              index === indexToShow ||
              index === indexToShow + 1
            ) {
              return (
                <BlogItem
                  key={item.title}
                  title={item.title}
                  photoData={item.photo.fluid}
                  date={item.date}
                  slug={item.slug}
                />
              )
            }
          })}
        </div>
        <article className={styles.buttonsMini}>
          <ChangeButton
            click={() => changeHandlerMin('minus')}
            type={'left'}
            style={'dark'}
          />
          {indexToShow}/{arrayItems.length}
          <ChangeButton
            click={() => changeHandlerMin('plus')}
            type={'right'}
            style={'dark'}
          />
        </article>
        {arrayItems.length / paggination > 1 ? (
          <article className={styles.buttonsMax}>
            <ChangeButton
              click={() => changeHandlerMax('minus')}
              type={'left'}
              style={'dark'}
            />
            {Math.ceil(indexToShow / paggination)}/
            {Math.ceil(arrayItems.length / paggination)}
            <ChangeButton
              click={() => changeHandlerMax('plus')}
              type={'right'}
              style={'dark'}
            />
          </article>
        ) : null}
      </>
    )
}

export default BlogItems
