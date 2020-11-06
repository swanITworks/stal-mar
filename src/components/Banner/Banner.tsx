import React from 'react'
import PhotosSection from './PhotosSection/PhotosSection'
import HelloSection from './HelloSection/HelloSection'
import * as styles from './Banner.module.scss'

const Banner = (): JSX.Element => {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <PhotosSection />
        <HelloSection />
      </div>
    </section>
  )
}

export default Banner
