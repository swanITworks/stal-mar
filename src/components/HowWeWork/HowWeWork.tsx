import React from 'react'
import Section from '../../hoc/Section/Section'
import SectName from '../UI/SectName/SectName'
import SectTitle from '../UI/SectTittle/SectTitle'
import HowWeWorkItem from './HowWeWorkItem/HowWeWorkItem'

const HowWeWork = (): JSX.Element => {
  return (
    <Section>
      <SectName text={'how we work'} type={'j'} />
      <SectTitle text={'Kompleksowa obsluga twojej inwestycji'} />
      <HowWeWorkItem number={'01'} title={'project'} info={'hello from item'} />
      <HowWeWorkItem number={'01'} title={'project'} info={'hello from item'} />
      <HowWeWorkItem number={'01'} title={'project'} info={'hello from item'} />
    </Section>
  )
}

export default HowWeWork
