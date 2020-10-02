import React from 'react'
import PhotosSection from './PhotosSection/PhotosSection'
import HelloSection from './HelloSection/HelloSection'

const Banner = (): JSX.Element => {
  return (
    <section>
      <PhotosSection />
      <HelloSection />
    </section>
  )
}

export default Banner
