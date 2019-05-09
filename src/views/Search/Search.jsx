import React from 'react'
import { SearchBox } from '@plurall/elo'
import { Box, Layout } from 'components'

import SomosClient from 'utils/client'
import styles from './Search.module.css'

import { filterElement, filterNameToValue } from '../../utils'

class Search extends React.Component {
  state = {
    artists: [],
    data: '',
    list: [{ id: 0, value: '' }],
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
      const data = filterElement(this.state.artists, event)
      const list = filterNameToValue(this.state.artists)
      this.setState(
        {
          data,
          list,
        },
        () => console.log(this.state.data),
      )
    }
  }

  render() {
    const { data, list } = this.state

    return (
      <Layout>
        <div className={styles.wrapper}>
          <SearchBox
            label="Digite o nome do artista"
            placeholder="Digite a sua busca ex: Daron"
            notFoundMessage="Nenhum resultado encontrado"
            items={[...list]}
            // onClick={item => console.log(item)}
            onChange={this.handleChange}
          />
          <Box data={data} />
        </div>
      </Layout>
    )
  }
}

export default Search
