import React from 'react'

// import { SubHeader } from 'components'
import { SomosClient } from 'utils'

// import styles from './Home.module.css'

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
    console.log(albums.items[0])
    const artist = artists.artists.find((a) => a.id === id)
    this.setState({
      loading: false,
      artist,
      albums: albums.items.slice(0, 10)
    })
  }

  detailsArtist = (artist, albums) => {
    // A data de lançamento do album deve estar no formato `DD/MM/AAAA`.
    return (
      <div>
        {/* // - Nome */}
        <p>{artist.name}</p>
        {/* // Popularidade */}
        <p>{artist.popularity}</p>
        {/* // - Foto */}
        <img src={artist.images[2].url} alt={artist.name} />
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
        {loading ? <p>Loading...</p> : this.detailsArtist(artist, albums)}
        {/* <div>
          <p>Detalhe dos artistas por id</p>
        </div> */}
      </React.Fragment>
    )
  }
}


export default Artist
