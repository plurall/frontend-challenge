import React from 'react'

import PropTypes from 'prop-types'

import { PageTitle, Input } from 'components'

import styles from './ArtistSearchBar.module.scss'

const ArtistSearchBar = ({ artistName, handleChange }) => {
  const { wrapper, 'input-wrapper': inputWrapper } = styles
  return (
    <div className={wrapper}>
      <PageTitle title="Descubra SEU artista" />
      <div className={inputWrapper}>
        <Input
          value={artistName}
          handleChange={handleChange}
        />
      </div>
    </div>
  )
}

ArtistSearchBar.propTypes = {
  artistName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default ArtistSearchBar
