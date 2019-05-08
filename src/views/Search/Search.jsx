import React from 'react'
import { SearchBox } from '@plurall/elo'
import { Box } from 'components'

import SomosClient from 'utils/client'
import styles from './Search.module.css'

import { filterElement } from '../../utils'

class Search extends React.Component {
  state = {
    artists: [],
    value: '',
    data: '',
  }

  componentDidMount() {
    this.getArtistsData()
  }

  getArtistsData = async () => {
    const client = new SomosClient()
    const allArtists = await client.getArtists()
    const {
      data: { artists },
    } = allArtists

    this.setState(
      {
        artists,
      },
      () => console.log('ARTISTS', this.state.artists),
    )
  }

  handleChange = event => {
    if (event.length >= 4) {
      this.setState({ value: event })

      const data = filterElement(this.state.artists, event)
      this.setState(
        {
          data,
        },
        () => console.log(this.state.data),
      )
    }
  }

  render() {
    // const { data } = this.state

    return (
      <React.Fragment>
        <div className={styles.wrapper}>
          <SearchBox
            label="Digite o nome do artista"
            placeholder="Digite a sua busca"
            // notFoundMessage="Nenhum resultado encontrado"
            items={[
              // { id: 1, value: 'Escola 14 de Julho' },
              // { id: 2, value: 'Escola Adventista UNASP' },
              // { id: 3, value: 'Escola Almeida Gasparin' },
              // { id: 4, value: 'Escola Modelo de Ensino' },
              // { id: 5, value: 'Escola Padre Francisco de Assis' },
              // { id: 6, value: 'Escola Padre Machado' },
            ]}
            // onClick={item => console.log(item)}
            onChange={this.handleChange}
          />
          <Box data={this.state.data} />
        </div>
      </React.Fragment>
    )
  }
}

export default Search
