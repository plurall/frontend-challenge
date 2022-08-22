import React, { useState, useEffect, useCallback } from 'react'

import { getArtistAlbums } from 'utils/client'

import { AlbumCard, PageTitle } from 'components'

import PropTypes from 'prop-types'

import emptyState from 'assets/emptyState.png'

import styles from './AlbumsList.module.scss'

const AlbumsList = ({ id }) => {
  const [albums, setAlbums] = useState(['id'])

  const { wrapper } = styles

  const getAlbumsData = useCallback(async () => {
    const { items: albumsData } = await getArtistAlbums(id)

    setAlbums(albumsData)
  }, [id])


  useEffect(() => {
    getAlbumsData()
    // eslint-disable-next-line
  }, [])

  return (
    <div className={wrapper}>
      <PageTitle title="Álbuns do SEU artista" />
      {
        albums && albums.map(item => (
          <AlbumCard
            key={item.id}
            image={(item?.images && item.images[0].url) || emptyState}
            name={item?.name && item.name}
            releaseDate={item.release_date && new Date(item.release_date).toLocaleDateString('en-US')}
          />
        ))
      }
    </div>
  )
}

export default AlbumsList

AlbumsList.propTypes = {
  id: PropTypes.string.isRequired,
}
