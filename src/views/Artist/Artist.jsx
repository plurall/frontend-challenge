import React, {Component} from 'react'

import PropTypes from 'prop-types'
import { SomosClient } from 'utils'
import defaultAvatar from '../../assets/default_avatar.png'
import PromptButton from '../../components/Featured/PromptButton.js'


function dateBuilder(d) {
  let months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];


  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${date} ${month} ${year}`;
}

export default class Search extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  }

  state = {}

  async componentDidMount() {
    const artist = await this.client.getArtist(this.props.match.params.id)
    const albums = await this.client.getAlbums(this.props.match.params.id)
    this.setState({ artist, albums })
  }

  client = new SomosClient()

  render() {
    return (
      <>
        {this.state.artist && (
          <div className="wrapper">
            <div className="profile">
              <div className="photo">
                {this.state.artist.images.length > 0 ? (
                  <img
                    src={this.state.artist.images[0].url}
                    alt={this.state.artist.name}
                  />
                ) : (
                  <img src={defaultAvatar} alt={this.state.artist.name} />
                )}
              </div>
              <div className="info">
                <h1>{this.state.artist.name}</h1>
                <p>
                  <strong>Followers</strong>: {this.state.artist.followers.total}
                  <br />
                  <br />
                  <strong>Popularidade</strong>: {this.state.artist.popularity}
                  <br />
                  <br />
                  <strong>Gêneros</strong>:{' '}
                  {this.state.artist.genres &&
                    this.state.artist.genres.map((genre, i) => (
                      <span key={`genre_${genre}`}>
                        {(i ? ', ' : '') + genre}
                      </span>
                    ))}
                </p>
              </div>
            </div>

            <div className="results">
              <h2>10 Últimos Álbuns:</h2>
              {this.state.albums &&
                this.state.albums.map(album => (
                  <div className="item" key={album.id}>
                    <div className="photo">
                      {album.images.length > 0 ? (
                        <img src={album.images[0].url} alt={album.name} />
                      ) : (
                        <img src={defaultAvatar} alt={album.name} />
                      )}
                    </div>
                    <div className="albumName">
                      {album.name}</div>
                    <div className="releaseDate">
                      {dateBuilder(new Date(album.release_date))}</div>
                  </div>
                ))}
            </div>
            <PromptButton to='/busca' name='Voltar' styleName='back'/>
          </div>
        )}
      </>
    )
  }
}

