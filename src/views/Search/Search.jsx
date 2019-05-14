import { from, Subject, of } from 'rxjs'
import { debounceTime, filter, switchMap, tap, catchError } from 'rxjs/operators'
import { Alert, Heading, Text, TextBox } from '@plurall/elo'
import React from 'react'

import { Client } from 'utils'
import { ArtistsList, Layout, SubHeader } from 'components'
import styles from './Search.module.css'

const MIN_QUERY_LENGTH = 5

class Search extends React.Component {
  state = {
    query: '',
    error: '',
    artists: [],
    isSearching: false,
  }

  componentDidMount() {
    this.createSearchSubscription()
  }

  componentWillUnmount() {
    this.searchSubscription.unsubscribe()
  }

  createSearchSubscription() {
    this.searchSubscription = this.searchSubject.pipe(
      filter(query => query.length >= MIN_QUERY_LENGTH),
      tap(() => this.setState({
        isSearching: true,
      })),
      debounceTime(400),
      switchMap(query => from(Client.searchArtists(query)).pipe(
        catchError(error => {
          this.setState({
            error,
          })

          return of([])
        }),
      )),
      tap(() => this.setState({
        isSearching: false,
      })),
    ).subscribe(artists => this.setState({
      artists,
    }))
  }

  searchSubject = new Subject()

  handleQueryChange = query => {
    const formattedQuery = query.trim().toLowerCase()
    this.setState({
      query: formattedQuery,
      error: '',
      artists: [],
      isSearching: false,
    })
    this.searchSubject.next(formattedQuery)
  }

  render() {
    const { query, error, artists, isSearching } = this.state
    return (
      <Layout>
        <SubHeader
          breadcrumb={[
            { text: 'Home', href: '' },
            { text: 'Search' },
          ]}
        />
        <div className={styles.wrapper}>
          {!isSearching && error ? (
            <Alert
              type="error"
            >
              {error.message}
            </Alert>
          ) : (
            null
          )}
          <Heading>Search page</Heading>
          <TextBox
            label="Search by artist on Spotify:"
            placeholder="E.g. Michael Jackson"
            onChange={this.handleQueryChange}
          />
          {isSearching ? (
            <div
              className={styles.textWrapper}
            >
              <Text
                element="p"
              >
                Wait a little bit. Searching on Spotify...
              </Text>
            </div>
          ) : (
            null
          )}
          {!isSearching && query.length < MIN_QUERY_LENGTH ? (
            <div
              className={styles.textWrapper}
            >
              <Text
                element="p"
                className={styles.textWrapper}
              >
                You must enter at least {MIN_QUERY_LENGTH} characters to search.
              </Text>
            </div>
          ) : (
            null
          )}
          {!isSearching && !artists.length && query.length >= MIN_QUERY_LENGTH && !error ? (
            <div
              className={styles.textWrapper}
            >
              <Text
                element="p"
                className={styles.textWrapper}
              >
                No artist found on Spotify.
              </Text>
            </div>
          ) : (
            null
          )}
          {!isSearching && artists && artists.length ? (
            <div
              className={styles.artistsListWrapper}
            >
              <ArtistsList artists={artists} />
            </div>
          ) : (
            null
          )}
        </div>
      </Layout>
    )
  }
}

export default Search
