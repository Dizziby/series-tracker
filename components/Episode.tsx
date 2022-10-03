import React, {FC, useState} from "react"
import {EpisodeType} from "./types"
import {noCover} from "./MovieBlock"
import styles from "../styles/Episode.module.scss"
import Image from "next/image"

const Episode: FC<EpisodeProps> = ({episode}) => {
  const [showDescription, setShowDescription] = useState(false)

  const onClickHandler = (): void => {
    setShowDescription(!showDescription)
  }

  return (
    <div className={styles.container}>
      <div>Season: {episode.season}</div>
      <div>{episode.name}</div>
      <Image
        src={episode.image.original ? episode.image.original : noCover}
        alt={"cover"}
        width={350}
        height={200}
      />
      <button onClick={onClickHandler}>...</button>
      {showDescription && <div>{episode.summary}</div>}
    </div>
  )
}

export default Episode

type EpisodeProps = {
  episode: EpisodeType
}
