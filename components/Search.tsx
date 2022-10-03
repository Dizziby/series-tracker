import {FC, useState} from "react"
import styles from "../styles/Search.module.scss"

const Search: FC<SearchPropsType> = ({searchMovie, disabled}) => {
  const [search, setSearch] = useState("Stranger")

  const onClickHandler = (): void => {
    searchMovie(search)
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        value={search}
        onChange={e => setSearch(e.currentTarget.value)}
      />
      <button className={styles.btn} onClick={onClickHandler} disabled={disabled}>
        Search
      </button>
    </div>
  )
}

export default Search

type SearchPropsType = {
  searchMovie: (search: string) => void
  disabled: boolean
}
