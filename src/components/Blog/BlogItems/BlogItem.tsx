import React from 'react'
import Img from 'gatsby-image'
import * as styles from './BlogItem.module.scss'

const BlogItem = ({ photoData, date, title }): JSX.Element => {
  const myDate = new Date(date)

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return (
    <article className={styles.blogItem}>
      <Img className={styles.photo} fluid={photoData} />
      <h3 className={styles.date}>{`${myDate.getDate()} ${
        months[myDate.getMonth()]
      } ${myDate.getFullYear()}`}</h3>
      <h4 className={styles.title}>{title}</h4>
    </article>
  )
}

export default BlogItem
