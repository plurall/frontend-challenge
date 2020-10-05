import React from 'react'
import { withRouter } from 'react-router-dom'

import { Layout } from 'components'
import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './SearchArtists.module.css'
import ArtistsList from 'components/ArtistsList/ArtistsList'
import Loading from 'components/Loading/Loading'

class SearchArtists extends React.Component {
  state = {
    artists: [],
    loading: null,
    error: {},
  }

  client = new SomosClient()

  async onSearchArtist(name) {
    if (name.length > 0) this.setState({ loading: true })
    else this.setState({ loading: null })

    if (name.length > 4) {
      const res = await this.client.getArtists(name)

      if (res.artists !== undefined) {
        this.setState({ artists: res.artists, loading: false })
      } else {
        const { response } = res.error
        this.setState({ error: response.data.error, loading: false })
      }
    }
  }

  render() {
    const { artists, loading, error } = this.state

    return (
      <React.Fragment>
        <Layout>
          <SubHeader
            breadcrumb={[{ text: 'SearchArtists' }]}
            heading="Somos Front-end Challange"
          />
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <input
                type="text"
                onChange={e => this.onSearchArtist(e.target.value)}
                className={styles.searchInput}
                placeholder="Informe o nome do artista desejado"
              />
              <br />
              <Loading loading={loading} />
              {error.status && (
                <div className={styles.errorMessage}>
                  <b>Ocorreu um erro!</b> &nbsp; {error.message}
                </div>
              )}

              <ArtistsList artists={artists} loading={loading} />
            </div>
          </div>
        </Layout>
      </React.Fragment>
    )
  }
}

export default withRouter(SearchArtists)
