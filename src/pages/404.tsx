import React from 'react'
import Layout from '../hoc/Layout/Layout'
import SEO from '../components/SEO/SEO'

const Error = (): JSX.Element => {
  return (
    <Layout>
      <SEO
        title="Błąd"
        description="Ta strona nie istnieje, zapraszamy na strone główną"
      />
      <h1>Ta strona nie istnieje</h1>
    </Layout>
  )
}

export default Error
