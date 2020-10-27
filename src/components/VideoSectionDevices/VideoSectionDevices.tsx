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
    section: contentfulVideoSection {
      title
      name
    }
  }
`

const VideoSectionDevices = () => {
  const vidDevRef = useRef(null)
  const {
    meshPhoto: {
      childImageSharp: { fluid: photo },
    },
    section: { title, name },
  } = useStaticQuery(getData)

  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className={styles.videoSectionDevices}>
      <div className={styles.dummyBox}></div>
      <div className={styles.content}>
        <div className={styles.videoBox}>
          {isPlaying ? null : (
            <PlayButton
              click={() => {
                vidDevRef.current.play()
                setIsPlaying(true)
              }}
            />
          )}
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.title}>{title}</p>
          <video
            poster={photo.src}
            ref={vidDevRef}
            playsInline
            loop
            muted
            preload="auto"
          >
            <source src={meshMP4horizontal} type="video/mp4" />
            <source src={meshWEBMhorizontal} type="vide/webm" />
          </video>
        </div>
      </div>
    </section>
  )
}

export default VideoSectionDevices
