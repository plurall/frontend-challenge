import { Layout } from 'components'
import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import React from 'react'
import { FaSpotify } from 'react-icons/fa'
import ScrollContainer from 'react-indiana-drag-scroll'
import { Redirect } from 'react-router-dom'
import { clearToken, SomosClient } from 'utils'
import Load from '../../components/Load'
import { Container, Header, Albums, AlbumItem } from './styles'

class Artista extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentArtistID: this.props.match.params.id,
      currentArtist: {},
    }
  }

  // eslint-disable-next-line react/sort-comp
  client = new SomosClient()

  componentDidMount() {
    (async () => {
      const response = await this.client.getArtist(this.state.currentArtistID)
      this.setState({ ...this.state, currentArtist: response })
    })()
  }

  render() {
    if (!!this.state.currentArtist.error) {
      alert('Seu token expirou. Por favor, renove-o.')
      clearToken()
      return <Redirect to="/" />
    }

    if (Object.keys(this.state.currentArtist).length === 0) {
      return (
        <Layout>
          <Load />
        </Layout>
      )
    }

    return (
      <React.Fragment>
        <Layout>
          <Container>
            <Header>
              <img
                src={
                  !!this.state.currentArtist.images[0]
                    ? this.state.currentArtist.images[0].url
                    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png'
                }
                alt="Zé vaqueiro"
              />
              <main>
                <span>Artista</span>
                <h2>{this.state.currentArtist.name}</h2>
                <span>Gêneros</span>
                <div>
                  {this.state.currentArtist.genres.map(genre => (
                    <p key={genre}>{genre}</p>
                  ))}
                </div>
              </main>
              <aside>
                <p>
                  Popularidade:{' '}
                  <strong>{this.state.currentArtist.popularity}</strong>
                </p>
                <a
                  href={this.state.currentArtist.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSpotify />
                  Ver perfil
                </a>
              </aside>
            </Header>
            <Albums>
              <h2>Albúms</h2>
              <ScrollContainer horizontal vertical={false}>
                {this.state.currentArtist.albums.map(album => (
                  <AlbumItem key={album.id}>
                    <img
                      src={
                        album.images[0]
                          ? album.images[0].url
                          : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png'
                      }
                      alt={album.name}
                    />
                    <h3>{album.name}</h3>
                    <p>
                      {format(parseISO(album.release_date), 'dd/MM/yyyy', {
                        locale: ptBR,
                      })}
                    </p>
                  </AlbumItem>
                ))}
              </ScrollContainer>
            </Albums>
          </Container>
        </Layout>
      </React.Fragment>
    )
  }
}

export default Artista
