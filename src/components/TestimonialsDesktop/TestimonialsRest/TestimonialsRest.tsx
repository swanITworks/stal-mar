import React from 'react'
import Img from 'gatsby-image'
import * as styles from './TestimonialsRest.module.scss'

const TestomonialsRest = ({ items, toExclude }): JSX.Element => {
  const persons = [...items]
  const toShow = persons.map((item, index) => {
    if (index !== toExclude) {
      return (
        <div key={item.name} style={{ width: '50px' }}>
          <Img
            fluid={item.photo.fluid}
            style={{
              borderRadius: '50px',
              width: '50px',
              filter: 'grayscale(100%)',
            }}
            alt={item.photo.title}
          />
        </div>
      )
    } else {
      return (
        <div key={item.name}>
          <Img
            fluid={item.photo.fluid}
            style={{
              borderRadius: '50px',
              width: '50px',
              filter: 'grayscale(100%)',
            }}
            alt={item.photo.title}
          />
          <div
            style={{
              width: '5px',
              height: '5px',
              backgroundColor: 'white',
              margin: 'auto',
              marginTop: '20px',
              borderRadius: '5px',
            }}
          ></div>
        </div>
      )
    }
  })

  return <div className={styles.testimonialsRest}>{toShow}</div>
}

export default TestomonialsRest
