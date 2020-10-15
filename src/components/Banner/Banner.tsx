import React from 'react'
import PhotosSection from './PhotosSection/PhotosSection'
import HelloSection from './HelloSection/HelloSection'

const Banner = ({ click }): JSX.Element => {
  return (
    <section onClick={click}>
      <PhotosSection />
      <HelloSection />
    </section>
  )
}

export default Banner
