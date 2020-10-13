import React, { useRef } from 'react'
import meshMP4 from '../../assets/meshMP4.mp4'
import meshWEBM from '../../assets/meshWEBM.webm'
import * as styles from './VideoSection.module.scss'
import PlayButton from '../UI/PlayButton/PlayButton'

const VideoSection = (): JSX.Element => {
  const vidRef = useRef(null)
  return (
    <section className={styles.videoSection}>
      <article className={styles.content}>
        <div className={styles.videoBox}>
          <PlayButton
            click={() => {
              vidRef.current.play()
            }}
          />
          <video ref={vidRef} loop muted preload="auto">
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
