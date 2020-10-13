import React, { useRef } from 'react'
import meshMP4 from '../../assets/meshMP4.mp4'
import meshWEBM from '../../assets/meshWEBM.webm'
import * as styles from './VideoSection.module.scss'
import PlayButton from '../UI/PlayButton/PlayButton'
import { graphql, useStaticQuery } from 'gatsby'

const getData = graphql`
  {
    meshPhoto: file(name: { eq: "meshPhoto" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const VideoSection = (): JSX.Element => {
  const vidRef = useRef(null)

  const {
    meshPhoto: {
      childImageSharp: { fluid: photo },
    },
  } = useStaticQuery(getData)

  return (
    <section className={styles.videoSection}>
      <article className={styles.content}>
        <div className={styles.videoBox}>
          <PlayButton
            click={() => {
              vidRef.current.play()
            }}
          />
          <video
            poster={photo.src}
            ref={vidRef}
            playsInline
            loop
            muted
            preload="auto"
          >
            <source src={meshMP4} type="video/mp4" />
            <source src={meshWEBM} type="vide/webm" />
          </video>
          <h2 className={styles.title}>Film</h2>
          <p className={styles.info}>
            Siatka ogrodzeniowa zobacz jak ją pleciemy.
          </p>
        </div>
      </article>
      <div className={styles.secondBackground}></div>
    </section>
  )
}

export default VideoSection
