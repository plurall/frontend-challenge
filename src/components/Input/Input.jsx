import Link from 'plurall-ui/dist/Link/Link';
import React, { Component } from 'react'
import { SomosClient } from 'utils'
import styles from './Input.module.css'

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      status: false,
      name: '',
      recent: []
    }
  };
  client = new SomosClient()

  componentDidMount() {
    this.getAllArtists();
  };

  getAllArtists = async () => {
    const artists = await this.client.getArtists();
    this.setState({
      artists: artists
    })
  };

  search = (event) => {
    const { value } = event.target;
    if (value.length > 4) {
      this.setState({
        status: true,
        name: value
      })
    } else {
      this.setState({
        status: false,
        name: ''
      })
    }
  };

  renderCart = (artists) => {
    const { name, recent } = this.state;
    console.log('Aqui:', recent)
    const cardsArtits = artists.artists.filter((artist) => {
      return artist.name.toLowerCase().includes(name.toLowerCase())
    });
    if (cardsArtits.length === 0) {
      return (<p className={styles.notFound}>Artista não encontrado </p>)
    } else {
      return (
        <>
          <p className={styles.results}>Melhor resultado</p>
          {
            cardsArtits.map((a) => (
              <Link
                href={`/artista/${a.id}`}
                key={a.id}
                className={styles.card}
              >
                <div  >
                  <img
                    src={a.images[2].url}
                    alt={a.name}
                    className={styles.imageCard}
                  />
                  <p className={styles.name}>{a.name}</p>
                  <p className={styles.category}>Artista</p>
                </div>
              </Link>
            ))
          }
        </>
      )



    }
  }



  render() {
    const { status, artists } = this.state;
    return (
      <React.Fragment>
        <div>
          <form>
            <label>
              <input
                className={styles.input}
                type="search"
                placeholder="Digite o nome de um artista"
                onChange={this.search}
              />
              {!status || this.renderCart(artists)}
              { }
            </label>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default Input;
