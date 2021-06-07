import React, { useState } from 'react'

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
        heading="Somos Front-end Challange"
      />
      <div className={globalStyles.container}>
        <div className={styles.searchContainer}>
          <input 
            className={styles.searchInput + ' ' + ((artists.length || notFound || error) ? styles.withResults : '')}
            onChange={getArtists}
            placeholder="Nome do artista"
          />
          <img 
            className={styles.logoSolo + ' ' + (loading ? styles.beat : '')} 
            src={logoImg} 
          />
        </div>

        <div className={styles.artistContainer}>      
          <div className={styles.errorMessage}>
            {error}
            {notFound && 'Sorry, we coudn\'t find the artist that you are looking for :('}
          </div>

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
