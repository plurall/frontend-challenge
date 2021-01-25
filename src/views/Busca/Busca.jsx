import React from 'react'

import { SomosClient } from 'utils'
import {
  Link,
} from "react-router-dom";

import styles from './Busca.module.css';

import NotFound from 'assets/NotFound.jpg';

import Button from 'components/Button'

class Busca extends React.Component {
  state = {
    search: '',
    artists: [],
    loading: false,
    error: false
  }

  client = new SomosClient();

  fetchArtist = async (artist) => {
    try {
      this.setState({ loading: true })

      const { artists: { items } } = await this.client.getArtists(artist);

      this.setState({ artists: items, error: false })

    } catch (error) {
      console.log('Request failed successfully: ', error);
      this.setState({ error: true })
    } finally {
      setTimeout(() => {
        this.setState({ loading: false })
      }, 700)
    }
  }

  handleSearch = async (event) => {
    const search = String(event.target.value);

    this.setState({ search });

    if (search.length >= 4) {
      this.fetchArtist(search)
    }
  }

  renderSearch = () => (
    <div className={styles.flexContainer}>
      {this.state.artists.length > 0 && this.state.artists.map((artist => {
        return (
          <Link to={`/artista/${artist.id}`} className={styles.card}>
            <div>
              <img className={styles.imgStyles} height="150" src={artist.images.length ? artist.images[0].url : NotFound} />
            </div>
            <div className={styles.cardText}>
              <h1> {artist.name} </h1>
            </div>
          </Link>
        )
      }))}
    </div>
  )

  renderLoading = () => (
    <span>
      <h4>Carregando...</h4>
    </span>
  )

  renderError = () => (
    <span>
      <h4>Ocorreu um erro... :( </h4>
    </span>
  )

  renderContent = () => {
    const { error, loading } = this.state;

    if (error) {
      return this.renderError();
    } else if (loading) {
      return this.renderLoading()
    } else {
      return this.renderSearch();
    }
  }

  render() {
    const Content = this.renderContent;

    return (
      <>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h1>Busca</h1>
          </div>

          <div>
            <div className={styles.input}>
              <input type="text" value={this.state.search} onChange={this.handleSearch} />
            </div>
          </div>

          <Content />

          <Button route="/" text="Voltar" />

        </div>
      </>
    )
  }
}

export default Busca;
