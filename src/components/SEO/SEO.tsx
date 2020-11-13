import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteDescription: description
        author
        siteUrl
        image
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const {
    site: {
      siteMetadata: { siteTitle, siteDescription, author, siteUrl, image },
    },
  } = useStaticQuery(query)

  return (
    <Helmet htmlAttributes={{ lang: 'pl' }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDescription} />
      <meta name="image" content={image} />
    </Helmet>
  )
}

export default SEO
