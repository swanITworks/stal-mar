import React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/Layout/Layout"

const blog: React.FC<PageProps> = () => {
  return (
    <Layout>
      <p>Hello from blog</p>
    </Layout>
  )
}

export default blog
