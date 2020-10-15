import React from 'react'
import * as styles from './ContactItem.module.scss'

const ContactItem = ({ icon, contactData, adittionalInfo }) => {
  return (
    <article className={styles.contactItem}>
      <div className={styles.icon}>
        <img src={icon}></img>
      </div>
      <div className={styles.infoArea}>
        <h3 className={styles.contactData}>{contactData}</h3>
        <p className={styles.adittionalInfo}>{adittionalInfo}</p>
      </div>
    </article>
  )
}

export default ContactItem
