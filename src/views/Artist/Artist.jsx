import React from 'react'

import {
  AlbumList,
  ArtistDescription,
  DataFetchTemplate,
  Spinner,
  SubHeader,
} from 'components'
import { SomosClient } from 'utils'

import styles from './Artist.module.css'
import { Button } from 'plurall-ui'

class Search extends React.Component {
  state = {
    loadingArtist: false,
    loadingAlbums: false,
    albums: null,
    artist: null,
    errorArtist: null,
    errorAlbums: null,
  }

  client = new SomosClient()

  getArtist = async id => {
    try {
      this.setState({ loadingArtist: true, errorArtist: null })
      const data = await this.client.getArtist(id)
      this.setState({ loadingArtist: false, artist: data, errorArtist: null })
      console.log(data)
    } catch (error) {
      console.log(error)
      this.setState({ loadingArtist: false, artist: null, errorArtist: error })
    }
  }

  getAlbums = async id => {
    try {
      this.setState({ loadingAlbums: true, errorAlbums: null })
      const data = await this.client.getArtistAlbums(id)
      this.setState({
        loadingAlbums: false,
        albums: data.items,
        errorAlbums: null,
      })
      console.log(data)
    } catch (error) {
      console.log(error)
      this.setState({ loadingAlbums: false, albums: null, errorAlbums: error })
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.getArtist(id)
    this.getAlbums(id)
  }

  render() {
    const isLoading = this.state.loadingArtist || this.state.loadingAlbum
    const hasError = this.state.errorAlbums || this.state.errorArtist
    const data = this.state.albums && this.state.artist

    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Artista' }]}
          heading="Dados do artista"
        />
        <DataFetchTemplate
          data={data}
          isLoading={isLoading}
          hasError={hasError}
        >
          <ArtistDescription
            artist={this.state.artist}
            className={styles.margin}
          />

          <h1 className={styles.margin}>Albums</h1>
          <AlbumList data={this.state.albums} />
        </DataFetchTemplate>
      </React.Fragment>
    )
  }
}

export default Search
