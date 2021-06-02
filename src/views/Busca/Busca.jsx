import { Layout, SubHeader } from 'components'
import React from 'react'
import { Link } from 'react-router-dom'
import { RiSearchLine } from 'react-icons/ri'
import { SomosClient } from 'utils'
import styles from './Busca.module.css'

class Busca extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      artists: [],
    }
  }

  client = new SomosClient()

  render() {
    const searchArtists = async event => {
      const { value } = event.target
      if (value.length >= 4) {
        const response = await this.client.getArtists(value)
        this.setState({
          artists: response,
        })
      }
    }

    return (
      <React.Fragment>
        <Layout>
          <SubHeader
            breadcrumb={[{ text: 'Pesquisar artista' }]}
            heading="Encontre aqui os seus artistas preferidos do Spotify pelo nome"
          />
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <div className={styles.search}>
                <RiSearchLine />
                <input
                  type="text"
                  placeholder="Pesquise seu artista"
                  onChange={e => searchArtists(e)}
                />
              </div>
              {this.state.artists.map(artist => (
                <Link
                  key={artist.id}
                  to={`/artista/${artist.id}`}
                  className={styles.results}
                >
                  <span>
                    <img
                      src={
                        artist.images[0]
                          ? artist.images[0].url
                          : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png'
                      }
                      alt={artist.name}
                    />
                    <p>{artist.name}</p>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Layout>
      </React.Fragment>
    )
  }
}

export default Busca
