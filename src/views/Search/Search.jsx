import React from 'react'
import { withRouter } from 'react-router-dom'

import { Alert, TextBox } from 'plurall-ui'

import { ArtistsList, Layout, SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Search.module.css'

class Search extends React.Component {
  state = {
    artists: [],
    error: {},
  }

  client = new SomosClient()

  async onSearch(value) {
    if (value.length > 4) {
      const res = await this.client.getArtists(value)

      res && res.artists
        ? this.setState({ artists: res.artists.items })
        : this.setState({
            error: res.error,
          })
    }
  }

  render() {
    const { artists, error } = this.state

    return (
      <Layout>
        <SubHeader
          breadcrumb={[{ text: 'Busca' }]}
          heading="Somos Front-end Challenge"
          buttonHref="/"
        />
        <div className={styles.wrapper}>
          {error.message && (
            <Alert name={`Erro ${error.status}`} type="error">
              {error.message}
            </Alert>
          )}
          <TextBox
            label="Digite o nome do artista"
            placeholder="Buscar um artista"
            onChange={value => this.onSearch(value)}
          />
          <ArtistsList artists={artists} loading={false} />
        </div>
      </Layout>
    )
  }
}

export default withRouter(Search)
