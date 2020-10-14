import React from 'react'
import Img from 'gatsby-image'

const BlogItem = ({ photoData, date, title }): JSX.Element => {
  return (
    <article>
      <Img fluid={photoData} />
      <h3>{date}</h3>
      <h4>{title}</h4>
    </article>
  )
}

export default BlogItem
