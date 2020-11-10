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
    items: allContentfulProductsItems(sort: { fields: priority }) {
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

export const PureProducts = ({ type, data }): JSX.Element => {
  const {
    section: { title, name, info },
    items: { nodes: ourProducts },
  } = data

  const [productToShow, setProductToShow] = useState(1)

  const paggination = 3

  const changeHandlerMin = value => {
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

  const changeHandlerMax = value => {
    const quantityOfSites = Math.ceil(ourProducts.length / paggination)
    switch (value) {
      case 'plus':
        productToShow + paggination < quantityOfSites * paggination
          ? setProductToShow(productToShow => productToShow + paggination)
          : setProductToShow(1)
        break

      case 'minus':
        productToShow === 1
          ? setProductToShow(quantityOfSites * paggination - paggination + 1)
          : setProductToShow(productToShow =>
              Math.abs(productToShow - paggination)
            )
        break
    }
  }

  const mainSection = (
    <>
      <div className={styles.productsListMini}>
        {ourProducts.map((product, index) => {
          if (index === productToShow - 1) {
            let number = index + 1 < 10 ? '0' + (index + 1) : index + 1
            return (
              <ProductsItem
                type={type}
                key={product.title}
                title={product.title}
                number={number}
                imageData={product.photo.fluid}
                slug={product.slug}
              />
            )
          }
        })}
      </div>
      <div className={styles.productsListMax}>
        {ourProducts.map((product, index) => {
          if (
            index === productToShow - 1 ||
            index === productToShow ||
            index === productToShow + 1
          ) {
            let number = index + 1 < 10 ? '0' + (index + 1) : index + 1
            return (
              <ProductsItem
                type={type}
                key={product.title}
                title={product.title}
                slug={product.slug}
                number={number}
                imageData={product.photo.fluid}
              />
            )
          }
        })}
      </div>
      <article className={styles.buttonsMini}>
        <ChangeButton click={() => changeHandlerMin('minus')} type={'left'} />
        {productToShow}/{ourProducts.length}
        <ChangeButton click={() => changeHandlerMin('plus')} type={'right'} />
      </article>
      <article className={styles.buttonsMax}>
        <ChangeButton click={() => changeHandlerMax('minus')} type={'left'} />
        {Math.ceil(productToShow / paggination)}/
        {Math.ceil(ourProducts.length / paggination)}
        <ChangeButton click={() => changeHandlerMax('plus')} type={'right'} />
      </article>
    </>
  )

  const mainSectionMore = (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: '1fr 1fr 1fr',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridGap: '3rem',
        }}
      >
        {ourProducts.map((product, index) => {
          let number = index + 1 < 10 ? '0' + (index + 1) : index + 1
          return (
            <ProductsItem
              type={type}
              features={product.features}
              key={product.title}
              title={product.title}
              number={number}
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
      id="offer"
    >
      <div className={styles.changeFlexBox}>
        <div className={styles.leftSide}>
          <SectName text={name} />
          <SectTitle text={title} />
          <SectInfo text={info} />
        </div>
        {type === 'more' ? null : (
          <div className={styles.rightSide}>
            <Link to="oferta#offer">
              <Button type={'black'} />
            </Link>
          </div>
        )}
      </div>
      {type === 'more' ? mainSectionMore : mainSection}
    </Section>
  )
}

const Products = props => {
  const data = useStaticQuery(getData)
  return <PureProducts {...props} data={data} />
}

export default Products
