import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { getToken } from '../../utils/'

import styles from './Busca.module.css'

class Busca extends React.Component {
  state = {
    name: '',
    artists: [],
  }

  client = new SomosClient()

  handleFectchArtist = async artistname => {
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/search?type=artist&q=${artistname}&limit=10`,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      },
    )

    this.setState({
      artists: response.data.artists.items,
    })
  }

  handleChangeInput = event => {
    const { value } = event.target

    this.setState( state => ({
      name: value,
    }))

    if (value.length > 4) {
      this.handleFectchArtist(value)
    }
  }


  render() {
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
                      alt="artistname"
                      style={{ borderRadius: '50%' }}
                    />
                  )}
                  <b>{artist.name}</b>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default Busca
