import React, { useState } from 'react'
import * as styles from './Products.module.scss'
import ProductsItem from './ProductsItem/ProductsItem'
import { useStaticQuery, graphql } from 'gatsby'
import ChangeButton from '../UI/ChangeButton/ChangeButton'

const products: object[] = [
  { title: 'bramy wjazdowe' },
  {
    title: 'ogrodzenia',
  },
  { title: 'balustrady' },
  { title: 'poręcze' },
  { title: 'lekkie konstrukcje stalowe' },
  { title: 'balkony' },
  { title: 'elementy małej architektury' },
  { title: 'elementy meblowe' },
]

export const getData = graphql`
  {
    productsData: allContentfulProducts {
      edges {
        node {
          title
          photo {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const Products = (): JSX.Element => {
  const {
    productsData: { edges: ourProducts },
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

  console.log(ourProducts)

  return (
    <section className={styles.products}>
      <h2>Produkty</h2>
      <h3>Reatail & Business Solutions</h3>
      <article>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast.
        </p>
      </article>
      {ourProducts.map((product, index) => {
        if (index === productToShow - 1) {
          return (
            <ProductsItem
              key={product.node.title}
              title={product.node.title}
              number={'0' + (index + 1)}
              imageData={product.node.photo.fluid}
            />
          )
        }
      })}
      <article className={styles.buttons}>
        <ChangeButton click={() => changeHandler('minus')} type={'left'} />
        {productToShow}/{ourProducts.length}
        <ChangeButton click={() => changeHandler('plus')} type={'right'} />
      </article>
    </section>
  )
}

export default Products
