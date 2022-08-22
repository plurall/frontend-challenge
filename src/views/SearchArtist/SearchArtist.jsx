import React, { useState } from 'react'

import { Layout } from 'components'

import { ArtistsList, ArtistsSearchBar } from 'containers'

import styles from './SearchArtist.module.scss'

const SearchArtist = () => {
  const [artistName, setArtistName] = useState('')

  return (
    <Layout>
      <div className={styles.wrapper}>
        <ArtistsSearchBar
          artistName={artistName}
          handleChange={setArtistName}
        />
        <ArtistsList artistName={artistName} />
      </div>
    </Layout>
  )
}

export default SearchArtist
