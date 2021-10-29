import React from 'react'
import { SomosClient } from '../../utils'
import { PopularityCard, SubHeader } from '../../components'
import Wrapper from '../../components/Wrapper'
import styles from './Artists.module.css'
import GenreCard from '../../components/GenreCard'
import AlbumCard from '../../components/AlbumCard'

class Artists extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        albums: [],
        artist: [],
      },
    }

    this.api = new SomosClient()
  }

  async componentDidMount() {
    const { artist, albums: { items } } = await this.api.showArtist(this.props.match.params.id)

    this.setState({
      data: {
        albums: items,
        artist,
      },
    })
  }

  render() {
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Artista' }]}
          heading={`${this.state.data.artist.name}`}
        />
        <Wrapper>
          <div className={styles.artistImage}>
            {
              !!this.state.data.artist.images && this.state.data.artist.images.map((image, index) => (
                <img
                  key={`${this.state.data.artist.name}-${index}`}
                  src={this.state.data.artist.images[index] ? this.state.data.artist.images[index].url : ''}
                  alt={`${this.state.data.artist.name} - ${index}`}
                  className={styles.image}
                />
              ))
            }
          </div>
          <div className={styles.artistInfo}>
            <PopularityCard
              popularity={this.state.data.artist.popularity ? this.state.data.artist.popularity : ''}
              followers={this.state.data.artist.followers ? this.state.data.artist.followers.total : ''}
            />
            <GenreCard
              genre={this.state.data.artist.genres}
            />
          </div>
          <h1 className={styles.sectionTitle}>Discografia</h1>
          <div className={styles.albumsGrid}>
            {
              !!this.state.data.albums && this.state.data.albums.map((album, index) => (
                <AlbumCard key={`${album.name}-${index}`} album={album} />
              ))
            }
          </div>
        </Wrapper>
      </React.Fragment>
    )
  }
}

export default Artists
