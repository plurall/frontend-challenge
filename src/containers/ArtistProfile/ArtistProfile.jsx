import React, { useState, useEffect, useCallback } from 'react'

import { PageTitle } from 'components'

import PropTypes from 'prop-types'

import { getArtist } from 'utils'

import styles from './ArtistProfile.module.scss'

const ArtistProfile = ({ id }) => {
  const [name, setName] = useState([])
  const [image, setImage] = useState([])
  const [popularity, setPopularity] = useState([])
  const [genres, setGenres] = useState([])

  const {
    'artist-image': artistImage,
    'info-wrapper': infoWrapper,
    'popularity-text': popularityText,
    wrapper,
  } = styles

  const getArtistData = useCallback(async () => {
    const artistData = await getArtist(id)

    setName(artistData.name)
    setImage(artistData.images[0]?.url)
    setGenres(artistData.genres)
    setPopularity(artistData.popularity)
  }, [id])

  useEffect(() => {
    getArtistData()
    // eslint-disable-next-line
  }, [])

  return (
    <div className={wrapper}>
      <img
        className={artistImage}
        src={image}
        alt=""
      />
      <div className={infoWrapper}>
        <PageTitle title={name} />
        <span>{genres.join(', ')}</span>
        <span className={popularityText}>Popularidade: {popularity}</span>
      </div>
    </div>
  )
}

export default ArtistProfile

ArtistProfile.propTypes = {
  id: PropTypes.string.isRequired,
}
