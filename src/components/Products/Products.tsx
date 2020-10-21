import React, { useState } from 'react'
import * as styles from './Products.module.scss'
import ProductsItem from './ProductsItem/ProductsItem'
import { useStaticQuery, graphql, Link } from 'gatsby'
import ChangeButton from '../UI/ChangeButton/ChangeButton'
import Section from '../../hoc/Section/Section'
import SectName from '../UI/SectName/SectName'
import SectTitle from '../UI/SectTittle/SectTitle'
import SectInfo from '../UI/SectInfo/SectInfo'
import Button from '../UI/Button/Button'

const getData = graphql`
  {
    section: contentfulProductsSection {
      title
      name
      info
    }
    items: allContentfulProductsItems {
      nodes {
        title
        slug
        features
        photo {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const Products = ({ type }): JSX.Element => {
  const {
    section: { title, name, info },
    items: { nodes: ourProducts },
  } = useStaticQuery(getData)

  const [productToShow, setProductToShow] = useState(1)

  const changeHandler = value => {
    switch (value) {
      case 'plus':
        productToShow < ourProducts.length
          ? setProductToShow(productToShow => productToShow + 1)
          : setProductToShow(1)
        break

      case 'minus':
        productToShow === 1
          ? setProductToShow(ourProducts.length)
          : setProductToShow(productToShow => productToShow - 1)
        break
    }
  }

  const mainSection = (
    <>
      <Link to="oferta">
        <Button type={'black'} />
      </Link>
      <div>
        {ourProducts.map((product, index) => {
          if (index === productToShow - 1) {
            return (
              <ProductsItem
                type={type}
                key={product.title}
                title={product.title}
                number={'0' + (index + 1)}
                imageData={product.photo.fluid}
              />
            )
          }
        })}
      </div>
      <article className={styles.buttons}>
        <ChangeButton click={() => changeHandler('minus')} type={'left'} />
        {productToShow}/{ourProducts.length}
        <ChangeButton click={() => changeHandler('plus')} type={'right'} />
      </article>
    </>
  )

  const mainSectionMore = (
    <>
      <div>
        {ourProducts.map((product, index) => {
          return (
            <ProductsItem
              type={type}
              features={product.features}
              key={product.title}
              title={product.title}
              number={'0' + (index + 1)}
              imageData={product.photo.fluid}
              slug={product.slug}
            />
          )
        })}
      </div>
    </>
  )

  return (
    <Section
      type="light"
      style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
    >
      <SectName text={name} />
      <SectTitle text={title} />
      <SectInfo text={info} />
      {type === 'more' ? mainSectionMore : mainSection}
    </Section>
  )
}

export default Products
