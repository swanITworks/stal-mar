const path = require('path')

exports.createPages = async ({ graphql,actions}) =>{

  const { createPage } = actions

  const products = await graphql(`
    query getOfferItems {
      items: allContentfulProductsItems {
        nodes {
          slug
        }
      }
    }
  `)

  const portfolio = await graphql(`
    query getPortfolioItems {
      items: allContentfulPortfolioItems {
        nodes {
          slug
        }
      }
    }
  `)

  products.data.items.nodes.forEach(item =>{
    createPage({
      path:`/oferta/${item.slug}`,
      component: path.resolve(`src/templates/product-template.tsx`),
      context:{
        slug: item.slug,
      }
    })
  })

  portfolio.data.items.nodes.forEach(item =>{
    createPage({
      path:`/portfolio/${item.slug}`,
      component: path.resolve(`src/templates/portfolio-template.tsx`),
      context:{
        slug: item.slug,
      }
    })
  })
};