import { Heading, Text, TextBox } from '@plurall/elo'
import { from, Subject, of } from 'rxjs'
import { debounceTime, filter, switchMap, tap, catchError } from 'rxjs/operators'
import React from 'react'

import { SomosClient } from 'utils'
import { ArtistsList, Layout, SubHeader } from 'components'
import styles from './Search.module.css'

class Search extends React.Component {
  state = {
    query: '',
    error: '',
    artists: [],
    isSearching: false,
  }

  componentDidMount() {
    this.searchSubscription = this.searchSubject.pipe(
      filter(query => query.length >= this.minQueryLength),
      tap(() => this.setState({
        isSearching: true,
      })),
      debounceTime(400),
      switchMap(query => from(SomosClient.searchArtists(query)).pipe(
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

  componentWillUnmount() {
    this.searchSubscription.unsubscribe()
  }

  searchSubject = new Subject()
  minQueryLength = 5

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
          <Heading>Search page</Heading>
          <TextBox
            label="Search by artist name:"
            placeholder="E.g. Michael Jackson"
            onChange={this.handleQueryChange}
          />
          {isSearching ? (
            <Text
              element="p"
              className={styles.message}
            >
              Wait a little bit. Searching on Spotify...
            </Text>
          ) : (
            null
          )}
          {!isSearching && error && error.message ? (
            <Text
              element="p"
              className={styles.message}
            >
              {error.message}
            </Text>
          ) : (
            null
          )}
          {!isSearching && query.length < this.minQueryLength ? (
            <Text
              element="p"
              className={styles.message}
            >
              You must enter at least {this.minQueryLength} characters to search.
            </Text>
          ) : (
            null
          )}
          {!isSearching && !artists.length && query.length >= this.minQueryLength && !error ? (
            <Text
              element="p"
              className={styles.message}
            >
              No artist found on Spotify.
            </Text>
          ) : (
            null
          )}
          {!isSearching && artists && artists.length ? (
            <ArtistsList artists={artists} />
          ) : (
            null
          )}
        </div>
      </Layout>
    )
  }
}

export default Search
