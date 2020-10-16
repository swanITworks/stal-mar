import React from 'react'
import { PageProps } from 'gatsby'
import Layout from '../hoc/Layout/Layout'
import Blog from '../components/Blog/Blog'

const blog: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Blog />
    </Layout>
  )
}

export default blog
