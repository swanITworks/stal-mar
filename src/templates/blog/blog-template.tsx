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

const productTemplate = ({ data }) => {
  const {
    blog: {
      title,
      article: { article },
      photo: { fluid },
    },
  } = data

  return (
    <Layout>
      <div style={{ backgroundColor: 'black', height: '150px' }}></div>
      <Wave style={{ backgroundColor: 'black' }} />
      <Section style={{ paddingTop: '0px' }}>
        <SectTitle text={title} position={'first'} />
        <article className={styles.top}>
          <div className={styles.mainPhoto}>
            <Img fluid={fluid} />
          </div>
          <div className={styles.description}>
            <p>{article}</p>
          </div>
        </article>
        <Link to={'/oferta/'}>
          <Button text={'Wróć'} type={'black'} />
        </Link>
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
  }
`

export default productTemplate
