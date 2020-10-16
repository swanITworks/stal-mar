import React from 'react'
import { PageProps } from 'gatsby'
import Layout from '../hoc/Layout/Layout'
import Blog from '../components/Blog/Blog'
import Products from '../components/Products/Products'
import HowWerWork from '../components/HowWeWork/HowWeWork'

const Offer: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Products />
      <HowWerWork />
    </Layout>
  )
}

export default Offer
