import React from 'react'
import { Sidebar } from 'components'
import { Footer } from 'plurall-footer'
import { SomosClient } from 'utils'
import styles from './Artist.module.css'

class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: [],
      loading: true,
      id: '',
      albums: []
    }
  }
  client = new SomosClient()

  componentDidMount() {
    this.getArtist()
  }

  getArtist = async () => {
    const { match: { params: { id } } } = this.props;
    const artists = await this.client.getArtists()
    const albums = await this.client.getArtistAlbumsById(id)
    const artist = artists.artists.find((a) => a.id === id)
    console.log(artist)
    this.setState({
      loading: false,
      artist,
      albums: albums.items
    })
  }

  detailsArtist = (artist, albums) => {
    // A data de lançamento do album deve estar no formato `DD/MM/AAAA`.
    return (
      <div>
        {/* // - Foto */}
        <div className={styles.imageBG}>
          <img
            src={artist.images[0].url}
            alt={artist.name}
            className={styles.imageBG}
          />
        </div>
        {/* // - Nome */}
        <p>{artist.name}</p>
        {/* // Popularidade */}
        <p>{artist.popularity}</p>
        {/* // - Lista de gêneros */}
         {artist.genres.map((genre, index) => <p key={genre[index]}>{genre}</p>)}
        {/* // - Lista de 10 albuns, contendo: Imagem, nome do album e data de lançamento. */}
        {albums.map((album) => (
          <div key={album.name}>
            <img src={album.images[2].url} alt={album.name} />
            <p>{album.name}</p>
            <p>{album.release_date.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1')}</p>
          </div>
        ))}
      </div>
    )
  }

  render() {
    const { loading, artist, albums } = this.state;
    return (
      <React.Fragment>
        <div className={styles.main}>
          <Sidebar />
          {loading ? <p>Loading...</p> : this.detailsArtist(artist, albums)}
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}


export default Artist
