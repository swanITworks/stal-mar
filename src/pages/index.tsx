import React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/Layout/Layout"

const index: React.FC<PageProps> = () => {
  return (
    <Layout>
      <p>Hello World</p>
    </Layout>
  )
}

export default index
