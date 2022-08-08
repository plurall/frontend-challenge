import React from 'react'

import { Layout, SearchBar } from 'components'
import styles from './Artists.module.scss'

class Artists extends React.Component {
  state = { search: '' }

  handleSearchBarChange = search => {
    this.setState({ ...this.state, search })
  }

  render = () => (
    <Layout>
      <div className={styles.wrapper}>
        <SearchBar
          value={this.state.search}
          onChange={this.handleSearchBarChange}
        />
      </div>
    </Layout>
  )
}

export default Artists
