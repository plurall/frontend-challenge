import React from 'react'

import { SomosClient } from 'utils'

import styles from './Artista.module.css'

import NotFound from 'assets/NotFound.jpg';

import Button from 'components/Button'

export default class Artista extends React.Component {
  state = {
    albums: [],
    artist: [],
    loadingAlbum: false,
    loadingArtist: false,
  }

  client = new SomosClient()

  componentDidMount() {
    this.initialize();
  }

  initialize = () => {
    const { match: { params: { id } } } = this.props;

    this.fetchArtistById(id);
    this.fetchAlbums(id);
  }

  fetchArtistById = async (id) => {
    try {
      this.setState({ loadingArtist: true })

      const artist = await this.client.getArtistById(id);

      console.log('artist: ', artist)

      this.setState({ artist, error: false })

    } catch (error) {
      console.log('Request failed successfully: ', error);
      this.setState({ error: true })
    } finally {
      setTimeout(() => {
        this.setState({ loadingArtist: false })
      }, 700)
    }
  }

  fetchAlbums = async (id) => {
    try {
      this.setState({ loadingArtist: true })

      const { items } = await this.client.getAlbums(id);

      console.log('Albums: ', items)

      this.setState({ albums: items, error: false })

    } catch (error) {
      console.log('Request failed successfully: ', error);
      this.setState({ error: true })
    } finally {
      setTimeout(() => {
        this.setState({ loadingArtist: false })
      }, 700)
    }
  }

  formatDate = (albumDate) => {
    return new Date(albumDate).toLocaleDateString('pt-br');
  }

  renderAlbums = () => {
    const { albums } = this.state

    return (
      <div className={styles.albumOuter}>
        <h1>Albums</h1>
        <div className={styles.albumContainer}>
          {
            albums && albums.slice(0, 10).map(item => {
              return (
                <a href={item.external_urls.spotify} target="_blank" rel="noopener noreferrer" className={styles.albumCard}>
                  <img src={item.images ? item.images[0].url : NotFound} />
                  <div className={styles.albumCardText}>
                    <h4>{item.name}</h4>
                    <h4>{this.formatDate(item.release_date)}</h4>
                  </div>
                </a>
              )
            })
          }
        </div>
      </div>
    );
  }

  getGenresList = (genres) => {
    return genres && genres.map((item) => `${String(item).toUpperCase()}; `);
  }

  renderArtistDetails = () => {
    const { artist: { name, popularity, images, genres } } = this.state;

    const genresList = this.getGenresList(genres);

    return (
      <>
        <div className={styles.card}>
          <div className={styles.imgCard}>
            <img className={styles.cardImage} src={images ? images[0].url : NotFound} />
          </div>
          <div className={styles.cardText}>
            <h1> {name} </h1>
            <h4> Popularidade: {popularity}</h4>
            <h4> Estilo: {genresList}</h4>
          </div>
        </div>

        {this.renderAlbums()}
      </>
    )
  }

  renderLoading = () => (
    <span>
      <h4>Carregando...</h4>
    </span>
  )

  renderContent = () => {
    const { loadingAlbum, loadingArtist, artist, albums } = this.state;

    if (loadingAlbum || loadingArtist) {
      return this.renderLoading();
    } else {
      return this.renderArtistDetails();
    }
  }

  render() {

    const Content = this.renderContent;

    return (
      <React.Fragment>
        <div className={styles.wrapper}>
          <Content />

          <Button route="/busca" text="Voltar" />
        </div>
      </React.Fragment>
    )
  }
}
