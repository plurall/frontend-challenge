import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ArrowButton } from 'plurall-ui'
import { getToken } from 'utils'
import { Link } from 'react-router-dom'
import { SubHeader, AlbumsList } from 'components'

import styles from './ArtistDetails.module.css'

const ArtistDetails = () => {
  const [artistProfile, setArtistProfile] = useState([])
  const [artistAlbums, setArtistAlbums] = useState([])
  const pathname = (window.location.pathname).split('/')
  const id = pathname[pathname.length - 1]

  const { genres } = artistProfile

  const headers = {
    'Content-Type': 'application/json',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  }


  useEffect(() => {
    async function getArtistsById() {
      const { data } = await axios.get(`https://api.spotify.com/v1/artists/${id}`, headers)
      const { data: albumData } = await axios.get(`https://api.spotify.com/v1/artists/${id}/albums`, headers)
      setArtistProfile(data)
      setArtistAlbums(albumData.items)
    }
    if (!!id) {
      return getArtistsById()
    } return
  }, [])

  return (
    <>
      <SubHeader
        breadcrumb={[{}]}
        heading={artistProfile.name}
      />
      <div className={styles.wrapper}>
        <div className={styles.buttonBack}>
          <Link to='/search' >
            <ArrowButton direction="left" />
          </Link>
          <p>Back</p>
        </div>

        <section className={styles.sectionContainer}>
          <aside className={styles.asideContainer}>
            <div className={styles.profileImage}>
              {artistProfile.images &&
                <img
                  src={
                    artistProfile.images.length > 0
                      ? artistProfile.images[1].url
                      : 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'} alt={artistProfile.name}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'
                  }} />
              }

            </div>
            <div className={styles.profileName}>
              <p>{artistProfile.name}</p>
              <h5>Popularity: {artistProfile.popularity}</h5>
              <h5>Genres:</h5>
              <ul>
                {genres &&
                  genres.map(item =>
                    (<li key={item}>{item}</li>)
                  )
                }
              </ul>
            </div>
          </aside>
          <section className={styles.albumListContainer}>
            <div className={styles.albumListTitle}>
              <h1>Albums:</h1>
            </div>
            <ul className={styles.albumList}>
              {artistAlbums.map((album, index) => {
                if (index <= 9) {
                  return <AlbumsList data={album} key={Math.random(album.id)} />
                } return
              })
              }
            </ul>
          </section>
        </section>
      </div>

    </>
  )
}


export default ArtistDetails
