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
        distinct(field: categories___title)
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

 

  console.log(portfolio.data.items.distinct);



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

  portfolio.data.items.distinct.forEach(category => {

    createPage({
      path:`portfolio/${category.replace(/\s/g,'-').toLowerCase().replace(/[ó]/g,"o")}`,
      component: path.resolve(`src/templates/category/category-template.tsx`),
      context:{
        category
      }
    })
  })


};