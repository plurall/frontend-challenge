import { Heading, Text } from '@plurall/elo'
import React from 'react'
import PropTypes from 'prop-types'

import { Layout, SubHeader } from 'components'
// import { SomosClient } from 'utils'

import styles from './Artist.module.css'

class Artist extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }

  state = {
    artist: null,
    isLoading: true,
    error: '',
  }

  componentDidMount() {
    const { params } = this.props.match
    this.setState({
      artist: {
        id: params.id,
      },
    })
  }

  render() {
    const { artist, isLoading, error } = this.state
    return (
      <Layout>
        <SubHeader
          breadcrumb={[
            { text: 'Home', href: '' },
            { text: 'Search', href: '/search' },
            { text: 'Artist' },
          ]}
        />
        <div className={styles.wrapper}>
          <Heading>Artist page</Heading>
          <Text>{JSON.stringify({ artist })}</Text>
        </div>
      </Layout>
    )
  }
}

export default Artist
