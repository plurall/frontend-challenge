import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { SubHeader, Layout, ArtistDetails } from 'components'
import { SomosClient } from 'utils'
import styles from './Artist.module.css'

class Artist extends Component {
  constructor(props) {
    super(props);
    this.client = new SomosClient();
    this.state = {
      artistInfo: []
    }
  }

  componentDidMount () {
    const { id } = this.props.match.params;
    this.getArtistInfo(id)
  }

  async getArtistInfo(artistId) {
    const artistInfo = await this.client.getArtistInfo(artistId);

    this.setState(prevState => ({
      artistInfo: [...prevState.artistInfo, artistInfo]
    }))
  }

  render() {
    const artist = this.state.artistInfo;
    const cover = this.state.artistCover;

    return (
      <Layout>
        <SubHeader
          breadcrumb={[{ text: 'Home / Artist' }]}
          heading="Somos Front-end Challange"
          />
         <div className={styles.wrapper}>
         {artist &&
            artist.map(artist => (
              <ArtistDetails key={artist.id} artist={artist}/>
            ))
          }
           <Link to="/busca">Voltar</Link>
         </div>

      </Layout>
    )
  }
}

export default Artist
