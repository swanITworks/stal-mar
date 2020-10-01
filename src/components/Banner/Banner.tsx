import React from 'react'
import StyledBackgroundSection from './Photos/Photos'
import HelloSection from './HelloSection/HelloSection'

const Banner = (): JSX.Element => {
  return (
    <section>
      <StyledBackgroundSection />
      <HelloSection />
    </section>
  )
}

export default Banner
