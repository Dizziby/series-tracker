import type {NextPage} from "next"
import Head from "next/head"
import styles from "../styles/Home.module.scss"
import useSWR, {Fetcher} from "swr"
import Search from "../components/Search"
import {useState} from "react"
import MovieBlock from "../components/MovieBlock"
import {DataType} from "../common/types"

export const baseURL = "https://api.tvmaze.com"

const fetcher: Fetcher<DataType> = async (url: string) => {
  const res = await fetch(url)
  return await res.json()
}

const Home: NextPage = () => {
  const [searchRequest, setSearchRequest] = useState("")

  const {data} = useSWR(`${baseURL}/search/shows?q=${searchRequest}`, fetcher)

  const setSearchMovie = (search: string) => {
    setSearchRequest(search)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Series tracker</title>
        <meta name="description" content="Series tracker" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <nav className={styles.nav}>Nav</nav>

      <Search searchMovie={setSearchMovie} disabled={false} />
      <div className={styles.list}>
        {data && data.map(el => <MovieBlock key={el.show.id} show={el.show} />)}
      </div>

      <footer className={styles.footer}>Footer</footer>
    </div>
  )
}

export default Home
