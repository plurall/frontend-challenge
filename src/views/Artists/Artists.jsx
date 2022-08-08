import React from 'react'

import { Layout, SearchBar, ArtistSmallCard } from 'components'
import styles from './Artists.module.scss'

class Artists extends React.Component {
  state = { search: '' }

  handleSearchBarChange = search => {
    this.setState({ ...this.state, search })
  }

  render = () => (
    <Layout>
      <div className={styles.wrapper}>
        <SearchBar
          value={this.state.search}
          onChange={this.handleSearchBarChange}
        />
        <ArtistSmallCard
          artist={{
            id: '1',
            name: 'Anitta',
            popularity: 80,
            image:
              'https://i.scdn.co/image/ab67616100005174847940395e7b755f626ad139',
            genres: [
              'funk carioca',
              'funk pop',
              'pagode baiano',
              'pop nacional',
            ],
          }}
        />
      </div>
    </Layout>
  )
}

export default Artists
