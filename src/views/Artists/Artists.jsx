import React from 'react'

import {
  getArtistImageByDimension,
  getThrottledCallback,
  removeUnnecessarySpaces,
  SpotifyClient,
} from 'utils'
import { Layout, SearchBar, ArtistSmallCard } from 'components'
import styles from './Artists.module.scss'

const MIN_NAME_LENGTH_TO_SEARCH = 4
const SEARCH_THROTTLE_INTERVAL_MS = 1_000

class Artists extends React.Component {
  state = { search: '', artists: [] }

  getArtistByName = getThrottledCallback(async search => {
    const { items } = await this.client.getArtistsByName(search)
    const artists = items.map(artist => ({
      ...artist,
      image: getArtistImageByDimension(artist.images, 80, 600)?.url,
    }))

    this.setState({ ...this.state, artists })
  }, SEARCH_THROTTLE_INTERVAL_MS)

  client = new SpotifyClient()

  handleSearchBarChange = search => {
    const formattedSearch = removeUnnecessarySpaces(search, true)
    const artistName = formattedSearch.trim()
    const isReadyToSearch = artistName.length >= MIN_NAME_LENGTH_TO_SEARCH

    this.setState({
      ...this.state,
      artists: isReadyToSearch ? this.state.artists : [],
      search: formattedSearch,
    })

    if (isReadyToSearch) this.getArtistByName(artistName)
  }

  render = () => (
    <Layout>
      <div className={styles.wrapper}>
        <SearchBar
          value={this.state.search}
          onChange={this.handleSearchBarChange}
        />
        <div className={styles.artists}>
          {this.state.artists.map(artist => (
            <ArtistSmallCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Artists
