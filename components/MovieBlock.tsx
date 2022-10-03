import React, {FC} from "react"
import {ShowType} from "../common/types"
import styles from "../styles/MovieBlock.module.scss"
import Image from "next/image"
import Link from "next/link"

export const noCover = "https://actar.com/wp-content/uploads/2015/12/nocover-227x300.jpg"

const MovieBlock: FC<MovieProps> = ({show}) => {
  return (
    <div className={styles.container}>
      <Link href={`/${show.id}`}>
        <a>
          <Image
            src={show.image ? show.image.original : noCover}
            alt={"cover"}
            width={"200px"}
            height={"300px"}
            layout={"responsive"}
          />
          <h2 className={styles.name}>{show.name}</h2>
          <div className={styles.info}>
            <div className={styles.infoElement}>
              <p>{show.rating.average ? show.rating.average : "-"}</p>
              <p className={styles.titleElement}>Rating</p>
            </div>
            <div className={styles.infoElement}>
              <p>{show.type}</p>
              <p className={styles.titleElement}>Type</p>
            </div>
            <div className={styles.infoElement}>
              <p>{show.network?.name ? show.network?.name : "-"}</p>
              <p className={styles.titleElement}>Network</p>
            </div>
            <div className={styles.infoElement}>
              <p>{show.premiered ? show.premiered.slice(0, 4) : "-"}</p>
              <p className={styles.titleElement}>Premiered</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default MovieBlock

type MovieProps = {
  show: ShowType
}
