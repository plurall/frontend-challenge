import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Artista.module.scss'

class Artista extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      artist: [],
      imageURL: '',
      genres: [],
      albums: [],
    }
  }

  async componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { id } = this.props.match.params
    const { getArtistsById, getArtistsAlbums } = new SomosClient()
    const artistData = await getArtistsById(id)
    const albumsData = await getArtistsAlbums(id)

    this.setState({
      artist: artistData,
      imageURL: artistData.images[0].url,
      genres: artistData.genres,
      albums: albumsData.items,
    })
  }

  render() {
    return (
      <>
        <SubHeader
          breadcrumb={[{ text: 'Home / Busca / Artista' }]}
          heading={`${this.state.artist.name}`}
        />
        <div className={styles.wrapper}>
          <Link to="/busca">Fazer nova busca</Link>
          <div className={styles.grid}>
            <div className={styles.gridLeft}>
              <img src={this.state.imageURL} alt="" />
              <div>
                <p>Popularidade:</p>
                <div className={styles.tags}>
                  <span className={styles.popularityTag}>
                    {this.state.artist.popularity} / 100
                  </span>
                </div>
                <p>Gêneros:</p>
                <div className={styles.tags}>
                  {this.state.genres.map(genre => (
                    <span
                      key={`${this.state.artist.id}-${genre}`}
                      className={styles.genreTag}
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.rigth}>
              <p>Albums:</p>
              <ul>
                {this.state.albums.map(album => (
                  <li key={album.id}>
                    <img src={album.images[1].url} alt="" />
                    <div>
                      <p>{album.name}</p>
                      <span>
                        Data de lançamento:
                        <span>
                          {moment(album.release_date).format('DD/MM/YYYY')}
                        </span>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Artista
