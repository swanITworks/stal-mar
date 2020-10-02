import React from 'react'
import { PageProps } from 'gatsby'
import Layout from '../hoc/Layout/Layout'
import Partners from '../components/Partners/Partners'
import Achivements from '../components/Achivements/Achivements'

const index: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Partners />
    </Layout>
  )
}

export default index
