import React from 'react'
import Img from 'gatsby-image'
import * as styles from './BlogItem.module.scss'
import { Link } from 'gatsby'
import Button from '../../../UI/Button/Button'

const BlogItem = ({ photoData, date, title, slug, type }): JSX.Element => {
  const myDate = new Date(date)

  const months = [
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    'Maj',
    'Czerwiec',
    'Lipiec',
    'Sierpień',
    'Wrzesień',
    'Październik',
    'Listopad',
    'Grudzień',
  ]

  return (
    <article className={styles.blogItem}>
      <div style={{ width: '100%' }}>
        <Img className={styles.photo} fluid={photoData} />
      </div>
      <h3 className={styles.date}>{`${myDate.getDate()} ${
        months[myDate.getMonth()]
      } ${myDate.getFullYear()}`}</h3>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.buttonArea}>
        <Link to={`/blog/${slug}`}>
          <Button text={'zobacz'} />
        </Link>
      </div>
    </article>
  )
}

export default BlogItem
