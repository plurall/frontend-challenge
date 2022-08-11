import PropTypes from 'prop-types'
import React from 'react'

import { TextBox, Text } from 'plurall-ui'
import { Layout } from 'components'

import { getOauthClient, SomosClient } from 'utils'

import styles from './Search.module.scss'

class Search extends React.Component {
  state = {
    search: '',
    artists: [],
  }

  client = new SomosClient()

  fillArtists = async () => {
    const response = await this.client.getArtistsByName(this.state.search)
    if (response?.status === 200) {
      this.setState({
        artists: response.data.artists,
      })
      return null
    }

    const OAuth = getOauthClient('/')
    window.location.href = OAuth.token.getUri()
    return null
  }

  handleChange = async (e) => {
    if (e.length >= 4) {
      await this.fillArtists()
    }

    this.setState({
      search: e,
    })
  }

  handleSelection = (artist) => {
    const { history } = this.props
    history.push(`/artista/${artist.id}`)
  }

  render() {
    const { search, artists } = this.state

    return (
      <Layout>
        <div className={styles.wrapper}>
          <TextBox value={search} onChange={this.handleChange} placeholder="Digite o nome do artista que está buscando" />
        </div>

        <div className={styles.artists}>
          {artists.map(artist => (
            <div key={artist.id} onClick={() => this.handleSelection(artist)} className={styles.info}>
              <img
                src={artist?.images[0]?.url ? artist?.images[0]?.url : 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'}
                alt=""
              />
              <Text size="big" bold>{artist.name}</Text>
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

Search.propTypes = {
  history: PropTypes.string,
}.isRequired

export default Search
