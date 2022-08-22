import React, { useState, useEffect, useCallback } from 'react'

import { ArtistCard } from 'components'

import isEmpty from 'lodash.isempty'

import PropTypes from 'prop-types'

import { useHistory } from 'react-router-dom'

import { getArtists } from 'utils'

import emptyState from 'assets/emptyState.png'

import styles from './ArtistsList.module.scss'

const ArtistsList = ({ artistName = '' }) => {
  const [artists, setArtists] = useState([])
  /* istanbul ignore next */
  const history = useHistory()

  const { wrapper, 'empty-state-text': emptyStateText } = styles

  const getArtistsData = useCallback(async () => {
    const artistsData = await getArtists(artistName)
    setArtists(artistsData.artists.items)
  }, [setArtists, artistName])

  useEffect(() => {
    if (artistName.length >= 4) {
      getArtistsData()
    }
    // eslint-disable-next-line
  }, [artistName])

  return (
    <div className={wrapper}>
      {!isEmpty(artists) && !isEmpty(artistName) ?
        artists.map(item => (
          <ArtistCard
            key={item.id}
            handleClick={() => history.push(`/artista/${item.id}`)}
            image={item?.images[0]?.url || emptyState}
            type={item.genres[0] || ''}
            name={item.name}
          />
        )) :
        <span className={emptyStateText}>
          Busque o artista que deseja encontrar
        </span>
      }
    </div>
  )
}

ArtistsList.propTypes = {
  artistName: PropTypes.string,
}

export default ArtistsList
