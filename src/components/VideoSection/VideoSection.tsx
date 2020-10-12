import React from 'react'
import Button from '../UI/Button/Button'
import * as styles from './VideoSection.module.scss'
import { graphql, useStaticQuery } from 'gatsby'

import { Video } from 'gatsby-video'

const getData = graphql`
  {
    file(relativePath: { eq: "168.MOV" }) {
      childVideoFfmpeg {
        webm: transcode(
          outputOptions: ["-crf 20", "-b:v 0"]
          maxWidth: 900
          maxHeight: 480
          fileExtension: "webm"
          codec: "libvpx-vp9"
        ) {
          width
          src
          presentationMaxWidth
          presentationMaxHeight
          originalName
          height
          fileExtension
          aspectRatio
        }
        mp4: transcode(
          maxWidth: 900
          maxHeight: 480
          fileExtension: "mp4"
          codec: "libx264"
        ) {
          width
          src
          presentationMaxWidth
          presentationMaxHeight
          originalName
          height
          fileExtension
          aspectRatio
        }
      }
    }
  }
`

const VideoSection = () => {
  const {
    file: { childVideoFfmpeg: videos },
  } = useStaticQuery(getData)

  return (
    <section className={styles.videoSection}>
      <div className={styles.content}>
        <article className={styles.videoBox}>
          <Video
            autoPlay
            muted
            loop
            sources={[videos.webm, videos.mp4]}
          ></Video>
          <h2 className={styles.title}>FILM</h2>
        </article>
      </div>
      <div className={styles.secondBackground}></div>
    </section>
  )
}

export default VideoSection
