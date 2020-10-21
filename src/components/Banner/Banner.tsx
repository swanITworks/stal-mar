import React from 'react'
import PhotosSection from './PhotosSection/PhotosSection'
import HelloSection from './HelloSection/HelloSection'
import * as styles from './Banner.module.scss'

const Banner = ({ click }): JSX.Element => {
  return (
    <section className={styles.banner} onClick={click}>
      <PhotosSection />
      <HelloSection />
    </section>
  )
}

export default Banner
