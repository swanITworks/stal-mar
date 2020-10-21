const path = require('path')

exports.createPages = async ({ graphql,actions}) =>{

  const { createPage } = actions

  const result = await graphql(`
    query getOfferItems {
      items: allContentfulProductsItems {
        nodes {
          slug
        }
      }
    }
  `)

  console.log(result);

  result.data.items.nodes.forEach(item =>{
    createPage({
      path:`/oferta/${item.slug}`,
      component: path.resolve(`src/templates/product-template.tsx`),
      context:{
        slug: item.slug,
      }


    })
  })

};