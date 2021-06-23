/* eslint-disable no-alert */
/* eslint-disable camelcase */
import { AlbumsCard, ContentPage, Spin, SubHeader } from 'components'
import React, { useEffect, useState } from 'react'
import { SomosClient } from 'utils'
import noImage from '../../assets/noImage.png'

import styles from './ArtistInfo.module.css'

const ArtistInfo = props => {
  const { id: artistId } = props.match.params
  const client = new SomosClient()

  const [artist, setArtist] = useState({})
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(false)

  const searchArtistInfo = async () => {
    try {
      setLoading(true)
      const response = await client.getArtistDetails(artistId)

      const { name, id, images, popularity, genres } = response
      const image = images.length ? images[0].url : noImage

      setArtist({ name, id, image, popularity, genres })

      setLoading(false)
    } catch (error) {
      alert('Não foi possivel realizar as informações do artista')
      setLoading(false)
    }
  }

  const getArtistAlbums = async () => {
    try {
      setLoading(true)
      const response = await client.getArtistAlbums(artistId)

      const albumsItems = response.items.map(item => {
        const { name, id, images, release_date } = item
        const image = images.length ? images[0].url : noImage

        const formattedDate = release_date
          .split('-')
          .reverse()
          .join('/')

        return { name, id, image, formattedDate }
      })

      setAlbums(albumsItems)

      setLoading(false)
    } catch (error) {
      alert('Não foi possivel realizar a busca dos albums')
      setLoading(false)
    }
  }

  useEffect(() => {
    searchArtistInfo()
    getArtistAlbums()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <SubHeader
        buttonHref="/busca"
        breadcrumb={[
          { text: 'Home', href: '/' },
          { text: 'Busca', href: '/busca' },
          { text: 'Artista' },
        ]}
        heading="Informação do artista"
      />
      <Spin spinning={loading}>
        <ContentPage>
          <div className={styles.container}>
            <div className={styles.detailsWrapper}>
              <img src={artist.image} alt={artist.name} height="100%" />
              <h1>{artist.name}</h1>
              <h3>Popularidade: {artist.popularity}%</h3>

              <div className={styles.divider} />

              <h2>Gênero musical:</h2>
              {artist.genres && artist.genres.length ? (
                <ul className={styles.genresList}>
                  {artist.genres.map(genre => (
                    <li key={genre}>{genre}</li>
                  ))}
                </ul>
              ) : (
                <span>gênero não informado</span>
              )}
            </div>

            <div className={styles.albumsWrapper}>
              <h2>Albums:</h2>
              <div className={styles.albumContainer}>
                {albums.map(album => (
                  <AlbumsCard key={album.id} album={album} />
                ))}
              </div>
            </div>
          </div>
        </ContentPage>
      </Spin>
    </>
  )
}

export default ArtistInfo
