import React from 'react'
import { SubHeader } from '../../components'
import Wrapper from '../../components/Wrapper'
import styles from './Search.module.css'
import ArtistCard from '../../components/ArtistCard'
import { SomosClient } from '../../utils'


class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '', artists: [] }

    this.handleChange = this.handleChange.bind(this)

    this.api = new SomosClient()
  }

  async handleChange(event) {
    this.setState({ artists: [] })
    this.setState({ value: event.target.value })

    if (this.state.value.length <= 4) {
      return
    }

    const { artists: { items } } = await this.api.getArtists(this.state.value)

    this.setState({ artists: items })
  }

  render() {
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Busca' }]}
          heading="Pesquise seus artistas favoritos"
        />
        <Wrapper>
          <input
            type="text"
            className={styles.searchInput}
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Pesquisar..."
          />

          <div className={styles.searchResults}>
            {
              !!this.state.artists && this.state.artists.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} />
              ))
            }
          </div>

        </Wrapper>
      </React.Fragment>
    )
  }
}

export default Search
