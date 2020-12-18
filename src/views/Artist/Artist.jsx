import React, { Component } from 'react'

import { SubHeader, Layout, ArtistDetails, Button } from 'components'
import { SomosClient } from 'utils'
import { SEARCH } from 'routes'
import styles from './Artist.module.css'

class Artist extends Component {
  constructor(props) {
    super(props);
    this.client = new SomosClient();
    this.state = {
      artistInfo: [],
      albums: null
    }
  }

  componentDidMount () {
    const { id } = this.props.match.params;
    this.getArtistInfo(id)
    this.getArtistAlbums(id)
  }

  async getArtistInfo(artistId) {
    const artistInfo = await this.client.getArtistInfo(artistId);

    this.setState(prevState => ({
      artistInfo: [...prevState.artistInfo, artistInfo]
    }))
  }

  async getArtistAlbums(artistId) {
    const albums = await this.client.getArtistAlbums(artistId);
    this.setState({albums: albums})

  }

  render() {
    const artist = this.state.artistInfo;
    const albums = this.state.albums;

    return (
      <Layout>
        <SubHeader
          breadcrumb={[{ text: 'Home / Artist' }]}
          heading="Somos Front-end Challange"
          />
         <div className={styles.wrapper}>
         {artist &&
            artist.map((artist, index) => (
              <ArtistDetails
                key={index}
                artist={artist}
                albums={albums}
              />
            ))
          }

           <Button
            text={'Voltar'}
            href={SEARCH}
          />
         </div>

      </Layout>
    )
  }
}

export default Artist
