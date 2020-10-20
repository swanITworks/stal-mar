import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Section from '../../hoc/Section/Section'
import SectName from '../UI/SectName/SectName'
import SectTitle from '../UI/SectTittle/SectTitle'
import BlogItem from './BlogItems/BlogItem'
import ChangeButton from '../UI/ChangeButton/ChangeButton'
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
  const changePhotoHandler = type => {
    switch (type) {
      case 'plus':
        if (indexToShow !== arrayItems.length - 1) {
          setIndexToShow(indexToShow => indexToShow + 1)
        } else setIndexToShow(0)
        break

      case 'minus':
        if (indexToShow !== 0) {
          setIndexToShow(indexToShow => indexToShow - 1)
        } else setIndexToShow(arrayItems.length - 1)
        break
    }
  }

  const [indexToShow, setIndexToShow] = useState(0)

  const {
    section: { name, title },
    items: { nodes: arrayItems },
  } = useStaticQuery(getData)

  return (
    <Section type={'veryLight'}>
      <SectName type={'orange'} text={name} />
      <SectTitle type={'dark'} text={title} />
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {arrayItems.map((item, index) => {
          if (index === indexToShow) {
            return (
              <BlogItem
                key={item.title}
                photoData={item.photo.fluid}
                title={item.title}
                date={item.date}
              />
            )
          }
        })}
        <div className={styles.buttons}>
          <ChangeButton
            style={'dark'}
            type={'left'}
            click={() => changePhotoHandler('minus')}
          />
          <p className={styles.counter}>
            {indexToShow + 1}/{arrayItems.length}
          </p>
          <ChangeButton
            style={'dark'}
            type={'right'}
            click={() => changePhotoHandler('plus')}
          />
        </div>
      </div>
    </Section>
  )
}

export default Blog
