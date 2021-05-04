import React from 'react'

import { AlbumList, ArtistDescription, Spinner, SubHeader } from 'components'
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

    let artistPage = (
      <>
        {this.state.artist != null ? (
          <ArtistDescription
            artist={this.state.artist}
            className={styles.margin}
          />
        ) : null}

        <div>
          <h1 className={styles.margin}>Albums</h1>
          {this.state.albums && <AlbumList data={this.state.albums} />}
        </div>
      </>
    )

    if (isLoading) {
      artistPage = (
        <div className={styles.feedbackContainer}>
          <Spinner />
        </div>
      )
    }

    if (hasError) {
      artistPage = (
        <div className={styles.feedbackContainer}>
          <h2 className={styles.margin}>Erro ao carregar página</h2>
          <Button
            onClick={() => {
              window.location = '/busca'
            }}
          >
            Ir para busca
          </Button>
        </div>
      )
    }

    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Artista' }]}
          heading="Dados do artista"
        />
        {artistPage}
      </React.Fragment>
    )
  }
}

export default Search
