import React from 'react'
import Img from 'gatsby-image'
import * as styles from './BlogItem.module.scss'
import { Link } from 'gatsby'

const BlogItem = ({ photoData, date, title, slug }): JSX.Element => {
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
      <Link to={`/blog/${slug}`}>
        <div style={{ display: 'inline-block', width: '100%' }}>
          <Img className={styles.photo} fluid={photoData} />
        </div>
        <h3 className={styles.date}>{`${myDate.getDate()} ${
          months[myDate.getMonth()]
        } ${myDate.getFullYear()}`}</h3>
        <h4 className={styles.title}>{title}</h4>
      </Link>
    </article>
  )
}

export default BlogItem
