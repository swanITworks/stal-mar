import React, { useState, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../hoc/Layout/Layout'
import Section from '../../hoc/Section/Section'
import SectTitle from '../../components/UI/SectTittle/SectTitle'
import * as styles from './blog-template.module.scss'
import Button from '../../components/UI/Button/Button'
import changeIndexHandler from '../../utils/functions'
import ChangeButton from '../../components/UI/ChangeButton/ChangeButton'
import Modal from '../../hoc/Modal/Modal'
import Wave from '../../assets/waveAbout.svg'
import BlogItems from '../../components/Blog/BlogItems/BlogItems'

const productTemplate = ({ data, pageContext }) => {
  const {
    blog: {
      title,
      article: { article },
      photo: { fluid },
    },
    items: { nodes: arrayItems },
  } = data

  return (
    <Layout>
      <div style={{ backgroundColor: 'black', height: '70px' }}></div>
      <Wave
        className={styles.wave}
        style={{ backgroundColor: 'white', transform: 'rotate(180deg)' }}
      />
      <Section type={'veryLight'} style={{ paddingTop: '0px' }}>
        <SectTitle type={'dark'} text={title} position={'first'} />
        <article className={styles.top}>
          <div className={styles.mainPhoto}>
            <Img fluid={fluid} />
          </div>
          <div className={styles.description}>
            <p>{article}</p>
          </div>
        </article>

        <Button
          click={() => {
            typeof history !== 'undefined' && history.go(-1)
          }}
          text={'Wstecz'}
          type={'black'}
          style={{ marginRight: '2rem' }}
        />
        <Link to={'/blog/'}>
          <Button
            style={{ marginLeft: '0rem', minWidth: '164px' }}
            text={'Blog'}
            type={'black'}
          />
        </Link>

        <h2 className={styles.title}>Pozostałe artykuły:</h2>
        <BlogItems
          arrayItems={arrayItems.filter(item => item.slug !== pageContext.slug)}
        />
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query getSinglePost($slug: String) {
    blog: contentfulBlogItems(slug: { eq: $slug }) {
      title
      slug
      photo {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      article {
        article
      }
    }
    items: allContentfulBlogItems {
      nodes {
        title
        date
        slug
        photo {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default productTemplate
