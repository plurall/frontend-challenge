import Link from 'plurall-ui/dist/Link/Link';
import React, { Component } from 'react'
import { SomosClient } from 'utils'

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      status: false,
      name: ''
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
    const { name } = this.state;
    const cardsArtits = artists.artists.filter((artist) => {
      return artist.name.toLowerCase().includes(name.toLowerCase())
    });
    console.log(cardsArtits)
    return cardsArtits.map((a) => (
      <Link
        href={`/artista/${a.id}`}
        key={a.id}
      >
        <div >
          <img src={a.images[2].url} alt={a.name} />
          <p>{a.name}</p>
        </div>
      </Link>
    ))
  }



  render() {
    const { status, artists } = this.state;
    // console.log(artists)
    return (
      <React.Fragment>
        <div>
          <form>
            <label>
              <input
                type="search"
                placeholder="Digite o nome de um artista"
                onChange={this.search}
              />
              {!status || this.renderCart(artists)}
            </label>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default Input;
