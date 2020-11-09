import React from 'react'
import ContactBox from './ContactBox/ContactBox'
import EmptyBackGroundBox from './EmptyBackgrounBox/EmptyBackGroundBox'
import * as styles from './FastContactDesktop.module.scss'

const FastContactDesktop = () => {
  return (
    <section className={styles.fastContact}>
      <EmptyBackGroundBox />
      <div className={styles.fastContactDevice}>
        <ContactBox />
      </div>
    </section>
  )
}

export default FastContactDesktop
