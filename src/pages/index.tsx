import React from 'react'
import { PageProps } from 'gatsby'
import Layout from '../hoc/Layout/Layout'
import Partners from '../components/Partners/Partners'
import Achivements from '../components/Achivements/Achivements'

const index: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Partners />
      <Achivements />
      <p>Hello World</p>
    </Layout>
  )
}

export default index
