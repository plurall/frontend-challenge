import React from 'react'
import PropTypes from 'prop-types'
import { SomosClient } from '../../utils'

class Artist extends React.Component {
  state = {}

  componentDidMount() {
    const { match } = this.props
    this.getArtistData(match.params)
  }

  getArtistData = async id => {
    console.log('PAGE ARTIST')
    const client = new SomosClient()
    const artist = await client.getArtist(id)
    console.log('ARTIST ID', artist)

    // this.setState(
    //   {
    //     artists,
    //   },
    //   () => console.log('PAGE ARTIST', this.state.artists),
    // )
  }

  render() {
    return (
      <div>
        <h1>Nome</h1>
        <p>Popularidade</p>
        <p>Foto</p>
        <p>Lista de gêneros</p>

        <h3>Albuns</h3>
        <img />
        <p>Nome do album</p>
        <date />
      </div>
    )
  }
}

export default Artist
