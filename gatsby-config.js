/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Bramy i ogrodzenia Piła',
    description:'Strona firmowa producenta bram i ogrodzeń z Piły. Oferujemy kompleksową obsługę od projektu, pomiaru, produkcji po montaż oraz serwis',
    author: 'SwanITworks.com',
    siteUrl:'http://stal-mar.com.pl',
    image:'/thumbnails.jpg'
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    'gatsby-plugin-scss-typescript',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-inline-svg`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Overpass`, `Overpass \:400,900`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, /// See below to configure properly
        },
      },
    },
  
  ],
}
