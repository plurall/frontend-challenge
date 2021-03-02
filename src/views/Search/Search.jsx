import React from 'react'
import styles from './Search.module.css'
import LogoSpotify from '../../assets/images/logo-spotify-white.svg'
import { useListArtists } from '../../hooks'
import Conditional from '../../components/Conditional'
import ListArtists from '../../components/ListArtists'

const Search = () => {
  const [artists, loading, fetch, setValueArtist] = useListArtists()

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerSearch}>
        <img src={LogoSpotify} width={'200px'} alt={'logo-spotify-white'} />
        <input type='text' placeholder='Buscar Artista' onChange={(e) => setValueArtist(e.target.value)} />
      </div>
      <Conditional condition={loading} truthy={'loading...'} lie={<ListArtists artists={artists}  fetch={fetch} />} />
    </div>
  )
}

export default Search
