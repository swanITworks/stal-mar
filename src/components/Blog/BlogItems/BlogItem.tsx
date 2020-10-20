import React from 'react'
import Img from 'gatsby-image'
import * as styles from './BlogItem.module.scss'

const BlogItem = ({ photoData, date, title }): JSX.Element => {
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
      <div style={{ display: 'inline-block', width: '100%' }}>
        <Img className={styles.photo} fluid={photoData} />
      </div>
      <h3 className={styles.date}>{`${myDate.getDate()} ${
        months[myDate.getMonth()]
      } ${myDate.getFullYear()}`}</h3>
      <h4 className={styles.title}>{title}</h4>
    </article>
  )
}

export default BlogItem
