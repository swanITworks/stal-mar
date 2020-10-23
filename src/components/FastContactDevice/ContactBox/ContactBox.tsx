import React from 'react'
import * as styles from './ContactBox.module.scss'
import TextSection from './ContactBoxItems/TextSection/TextSection'
import ImageSection from './ContactBoxItems/ImageSection/ImageSection'

const ContactBox = () => {
  return (
    <div className={styles.contactBox}>
      <ImageSection />
      <TextSection />
    </div>
  )
}

export default ContactBox
