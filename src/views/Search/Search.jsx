import React, { Component, Fragment } from 'react'
import { shape, func } from 'prop-types'
import { SubHeader, SearchBox as SearchB } from 'components'
import { SomosClient } from 'utils'

import styles from './Search.module.css'

class Search extends Component {
  state = {
    artists: [],
  }

  getArtists = async artist => {
    if (artist.length < 5) return

    try {
      const artists = await this.client.getArtists(artist)

      this.setState({ artists })
    } catch (e) {
      this.setState({ artists: [] })
    }
  }

  showArtist = id => {
    const { history: { push } } = this.props
    push(`/artista/${id}`)
  }

  client = new SomosClient()

  render() {
    return (
      <Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Busca' }]}
          heading=""
        />
        <div className={styles.wrapper}>
          <SearchB
            showArtist={this.showArtist}
            onChange={this.getArtists}
            placeholder="Buscar"
            suggestions={this.state.artists}
          />
        </div>
      </Fragment>
    )
  }
}

Search.propTypes = {
  history: shape({
    push: func,
  }),
}

export default Search
