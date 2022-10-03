import React, {FC, useState} from "react"
import Back from "../components/Back"
import {baseURL} from "./index"
import {GetServerSideProps} from "next"
import {ShowType} from "../common/types"
import Image from "next/image"
import {noCover} from "../components/MovieBlock"
import styles from "../styles/Movie.module.scss"
import {useRouter} from "next/router"
import useSWR, {Fetcher} from "swr"
import {EpisodesResponseType} from "../components/types"
import Episode from "../components/Episode"

const fetcher: Fetcher<EpisodesResponseType> = async (url: string) => {
  const res = await fetch(url)
  return await res.json()
}

const Movie: FC<MovieProps> = ({movie}) => {
  const router = useRouter()

  const [showEpisodes, setShowEpisodes] = useState(false)

  const {data: episodes, error} = useSWR(`${baseURL}/shows/${router.query.id}/episodes`, fetcher)

  console.log(episodes)

  const onClickHandler = (): void => {
    setShowEpisodes(!showEpisodes)
  }

  return (
    <div className={styles.container}>
      <Back href={"/"} name={"Back"} />
      <div className={styles.main}>
        <Image
          src={movie.image ? movie.image.original : noCover}
          alt={"cover"}
          width={400}
          height={600}
          className={styles.cover}
        />
        <div className={styles.info}>
          <div className={styles.name}>{movie.name}</div>
          <div>Rating: {movie.rating.average}</div>
          <div>{movie.summary}</div>
        </div>
      </div>
      <button onClick={onClickHandler}>Show</button>
      {showEpisodes && (
        <div className={styles.episodes}>
          {episodes && episodes.map(el => <Episode key={el.id} episode={el} />)}
        </div>
      )}
    </div>
  )
}

export default Movie

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const res = await fetch(`${baseURL}/shows/${params?.id}`)
  const movie = await res.json()
  return {
    props: {movie},
  }
}

type MovieProps = {
  movie: ShowType
}
