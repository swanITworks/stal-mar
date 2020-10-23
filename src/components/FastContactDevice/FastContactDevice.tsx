import React from 'react'
import ContactBox from './ContactBox/ContactBox'
import EmptyBackGroundBox from './EmptyBackgrounBox/EmptyBackGroundBox'
import * as styles from './FastContactDevice.module.scss'

const FastContactDevice = () => {
  return (
    <>
      <EmptyBackGroundBox />
      <section className={styles.fastContactDevice}>
        <ContactBox />
      </section>
    </>
  )
}

export default FastContactDevice
