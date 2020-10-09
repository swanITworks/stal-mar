import React from 'react'
import Button from '../UI/Button/Button'
import PortfolioItem from './PortfolioItem/PortfolioItem'
import { graphql, useStaticQuery } from 'gatsby'
import SectName from '../UI/SectName/SectName'
import SectTitle from '../UI/SectTittle/SectTitle'
import SectInfo from '../UI/SectInfo/SectInfo'
import Section from '../../hoc/Section/Section'

const getData = graphql`
  {
    portfolio:contentfulPortfolioSection {
      title
      info
      name
    }
    portfolioItems:allContentfulPortfolioItems {
    nodes {
      title
      info {
        info
      }
      mainPhoto{
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      photos {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
  }
`
const Portfolio = () => {
  const { portfolio, portfolioItems:{nodes: items }} = useStaticQuery(getData)

  console.log(items);

  return (
    <Section type={'dark'}>
      <SectName text={portfolio.name} type={'orange'}/>
      <SectTitle text={portfolio.title}/>
      <SectInfo type={'transparent'} text={portfolio.info}/>
      <Button text={'Wiecej'} type={'orange'} />
      { items.map( (item,index) => <PortfolioItem key={index} mainPhoto={item.mainPhoto.fluid}title={item.title}/>)}
    </Section>
  )
}

export default Portfolio
