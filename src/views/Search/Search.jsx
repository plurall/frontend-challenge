import React from 'react'

import { SubHeader } from 'components'
import ArtistCard from 'components/ArtistCard/'

import styles from './Search.module.css'
import globalStyles from 'App.module.css'

import logoImg from 'assets/Spotify_Logo_Only.png'
import useGetArtists from 'hooks/useGetArtists'

const Search = () => {
  const [loading, artists, error, notFound, getArtists] = useGetArtists()

  return (
    <React.Fragment>
      <SubHeader
        breadcrumb={[{ text: 'Home' }]}
        heading="Buscar pelo nome do artista"
      />
      <div className={globalStyles.container}>
        <div className={styles.searchContainer}  data-testid="search-container">
          <input 
            className={styles.searchInput + ' ' + ((artists.length || notFound || error) ? styles.withResults : '')}
            onChange={getArtists}
            id="main-search"
            placeholder="Nome do artista"
          />
          <img 
            className={styles.logoSolo + ' ' + (loading ? styles.beat : '')} 
            src={logoImg} 
            alt="spotify-search"
          />
        </div>

        <div className={styles.artistContainer}>      
          <span className={styles.errorContainer}>
            {error}
            {notFound && 'Sorry, we coudn\'t find the artist that you are looking for :('}
          </span>

          {/* Sort by populatity before mapping */}
          {artists.sort(artist => artist.popularity).map(a =>
            <ArtistCard key={a.id} artist={a} />
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Search
