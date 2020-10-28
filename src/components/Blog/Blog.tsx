import React, { useState } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Section from '../../hoc/Section/Section'
import SectName from '../UI/SectName/SectName'
import SectTitle from '../UI/SectTittle/SectTitle'
import BlogItem from './BlogItems/BlogItem'
import ChangeButton from '../UI/ChangeButton/ChangeButton'
import Button from '../UI/Button/Button'
import * as styles from './Blog.module.scss'

const getData = graphql`
  {
    section: contentfulBlogSection {
      name
      title
    }
    items: allContentfulBlogItems {
      nodes {
        title
        date
        photo {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const Blog = (): JSX.Element => {
  const paggination = 3
  const [indexToShow, setIndexToShow] = useState(1)
  const {
    section: { name, title },
    items: { nodes: arrayItems },
  } = useStaticQuery(getData)

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

  const mainSection = (
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

  return (
    <Section
      type={'veryLight'}
      style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
    >
      <div className={styles.changeFlexBox}>
        <div className={styles.leftSide}>
          <SectName type={'orange'} text={name} />
          <SectTitle type={'dark'} text={title} />
        </div>
        <div className={styles.rightSide}>
          <Link to={'blog'}>
            <Button text={'Więcej'} />
          </Link>
        </div>
      </div>
      {mainSection}
    </Section>
  )
}

export default Blog
