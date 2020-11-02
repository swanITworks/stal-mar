import React from 'react'
import PhotosSection from './PhotosSection/PhotosSection'
import HelloSection from './HelloSection/HelloSection'
import * as styles from './Banner.module.scss'

const Banner = (): JSX.Element => {
  return (
    <section className={styles.banner}>
      <PhotosSection />
      <HelloSection />
    </section>
  )
}

export default Banner
