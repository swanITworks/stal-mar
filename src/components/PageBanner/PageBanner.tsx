import React from 'react'
import PhotosSection from './PhotosSection/PhotosSection'
import HelloSection from './HelloSection/HelloSection'
import * as styles from './PageBanner.module.scss'

const PageBanner = ({ title, spanTitle, mainPhoto, photos }): JSX.Element => {
  return (
    <section className={styles.banner}>
      <PhotosSection mainPhoto={mainPhoto} photos={photos} />
      <HelloSection spanTitle={spanTitle} title={title} />
    </section>
  )
}

export default PageBanner
