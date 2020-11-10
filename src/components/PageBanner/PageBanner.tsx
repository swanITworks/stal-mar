import React from 'react'
import PhotosSection from './PhotosSection/PhotosSection'
import HelloSection from './HelloSection/HelloSection'
import * as styles from './PageBanner.module.scss'

const PageBanner = ({
  title,
  spanTitle,
  mainPhoto,
  photos,
  anchorLink,
}): JSX.Element => {
  return (
    <section className={styles.banner}>
      <PhotosSection mainPhoto={mainPhoto} photos={photos} />
      <HelloSection
        spanTitle={spanTitle}
        title={title}
        anchorLink={anchorLink}
      />
    </section>
  )
}

export default PageBanner
