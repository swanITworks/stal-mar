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

  const blog = await graphql(`
    query getBlogItems {
      items: allContentfulBlogItems {
        nodes {
          slug
        }
      }
    }
  `)

  products.data.items.nodes.forEach(item =>{
    createPage({
      path:`/oferta/${item.slug}`,
      component: path.resolve(`src/templates/product/product-template.tsx`),
      context:{
        slug: item.slug,
      }
    })
  })

  portfolio.data.items.nodes.forEach(item =>{
    createPage({
      path:`/portfolio/${item.slug}`,
      component: path.resolve(`src/templates/portfolio/portfolio-template.tsx`),
      context:{
        slug: item.slug,
      }
    })
  })

  blog.data.items.nodes.forEach(item =>{
    createPage({
      path:`/blog/${item.slug}`,
      component: path.resolve(`src/templates/blog/blog-template.tsx`),
      context:{
        slug: item.slug,
      }
    })
  })
};