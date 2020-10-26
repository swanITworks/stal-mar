import React, { useRef, useState } from 'react'
import meshMP4horizontal from '../../assets/meshHorizontal.mp4'
import meshWEBMhorizontal from '../../assets/meshHorizontal.webm'
import * as styles from './VideoSectionDevices.module.scss'
import PlayButton from '../UI/PlayButton/PlayButton'
import { graphql, useStaticQuery } from 'gatsby'

const getData = graphql`
  {
    meshPhoto: file(name: { eq: "meshHorizontal" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const VideoSectionDevices = () => {
  const {
    meshPhoto: {
      childImageSharp: { fluid: photo },
    },
  } = useStaticQuery(getData)

  return (
    <section className={styles.videoSectionDevices}>
      <div className={styles.dummyBox}></div>
      <div className={styles.content}>
        <div className={styles.videoBox}>
          <div className={styles.leftSide}>
            <p
              style={{
                color: 'white',
                zIndex: 50,
                position: 'absolute',
              }}
            >
              lefftSide
            </p>
          </div>
          <div className={styles.rightSide}>
            <p
              style={{
                color: 'white',
                zIndex: 50,
                position: 'absolute',
              }}
            >
              rightSide
            </p>
          </div>

          <video poster={photo.src} playsInline loop muted preload="auto">
            <source src={meshMP4horizontal} type="video/mp4" />
            <source src={meshWEBMhorizontal} type="vide/webm" />
          </video>
        </div>
      </div>
    </section>
  )
}

export default VideoSectionDevices
