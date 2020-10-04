import React from 'react'
import { withRouter } from 'react-router-dom'

import { Layout } from 'components'
import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './SearchArtists.module.css'

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

  async onSelectArtist(id) {
    this.props.history.push(`/artist/${id}`)
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
              {loading && <div className={styles.loading}>Carregando...</div>}
              {error.status && (
                <div className={styles.errorMessage}>
                  <b>Ocorreu um erro!</b> &nbsp; {error.message}
                </div>
              )}

              <div
                className={styles.artistContainer}
                style={{
                  visibility: !loading ? 'visible' : 'hidden',
                  opacity: !loading ? 1 : 0,
                }}
              >
                {artists.length > 0 &&
                  artists.map(art => (
                    <div
                      className={styles.artistItem}
                      key={art.id}
                      onClick={() => this.onSelectArtist(art.id)}
                    >
                      <div className={styles.photoContainer}>
                        {art.images.length > 0 && (
                          <img
                            src={art.images[0].url}
                            className={styles.photoArtist}
                            alt="Foto do artista"
                          />
                        )}{' '}
                        <br />
                      </div>
                      <div className={styles.nameSection}>
                        <span className={styles.artistName}>{art.name}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Layout>
      </React.Fragment>
    )
  }
}

export default withRouter(SearchArtists)
