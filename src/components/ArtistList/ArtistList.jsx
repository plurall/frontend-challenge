import ArtistItem from 'components/ArtistItem/ArtistItem'
import PropTypes from 'prop-types'
import React from 'react'

const ArtistList = ({ artists }) => {
  const listComponent = artists.map(item => (
    <ArtistItem item={item} key={item.id} />
  ))

  return <div>{listComponent}</div>
}

ArtistList.propTypes = {
  artists: PropTypes.array.isRequired,
}

export default ArtistList
