import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'
import { Link } from 'react-router-dom'

import Loading from '../../components/Loading'

import styles from './Busca.module.css'

class Busca extends React.Component {
  state = {
    artists: [],
    loading: false,
  }

  hadleSetLoading = () => {
    this.setState(() => ({
      loading: !this.state.loading,
    }))
  }

  handleFectchArtist = async artistname => {
    const client = new SomosClient()
    const response = await client.getArtists(artistname)

    this.setState({
      artists: response.artists.items,
    })

    this.hadleSetLoading()
  }

  handleChangeInput = event => {
    const { value } = event.target

    this.setState(() => ({
      name: value,
    }))

    if (value.length > 4) {
      this.hadleSetLoading()
      this.handleFectchArtist(value)
    }
  }


  render() {
    if (this.state.loading) return <Loading />

    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Busca' }]}
          heading="Somos Front-end Challange"
        />
        <div className={styles.wrapper}>
          <h1> Busca </h1>
          <input
            type="text"
            name="searchField"
            onChange={this.handleChangeInput}
          />
          {/* state: {this.state.name} */}
          <ul>
            {this.state.artists.map((artist, index) => (
              <Link to={`/artista/${artist.id}`} key={index}>
                <li className={styles.buscacaixa} >
                  {artist.images.length !== 0 && (
                    <img
                      src={artist.images[1].url}
                      alt={artist.name}
                      style={{ borderRadius: '50%' }}
                    />
                  )}
                  <p>{artist.name}</p>
                </li>
              </Link>
            ))}

            {!this.state.artists && <p> Nenhum artista encontrado. </p>}
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default Busca
