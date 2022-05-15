import React, { useEffect, useState } from 'react'

import CardArtist from 'components/CardArtist'
import { Layout, SubHeader } from 'components'
import { SomosClient } from 'utils'

import arrowSvg from '../../assets/icons/arrow.svg'

import {
  wrapper,
  cards,
  controllers,
  button_disabled as buttonDisabled,
  header_container as headerContainer,
  label_search as labelSearch,
  label_span as labelSpan,
  input_search as inputSearch,
} from './SearchArtists.module.css'

const MIN_LENGHT_ARTIST_NAME = 4
const INIT_CONTROLLER_PAGINATION = {
  currentPage: 1,
  totalPages: 1,
  prev: {
    hasPage: false,
    prevPage: '',
  },
  next: {
    hasPage: false,
    nextPage: '',
  },
}

const SearchArtists = () => {
  const client = new SomosClient()
  const [artistName, setArtistName] = useState('')
  const [lastArtistName, setlastArtistName] = useState('')
  const [pagination, setPagination] = useState(INIT_CONTROLLER_PAGINATION)
  const [artists, setArtists] = useState([])

  const controllerPagination = ({ offset = 0, nextPage, prevPage, totalItems }) => {
    const LIMIT = 20
    const totalPages = Math.ceil(totalItems / LIMIT)
    const currentPage = (offset + LIMIT) / LIMIT
    const hasPrevPage = !!prevPage
    const hasNextPage = !!nextPage

    setPagination({
      currentPage,
      totalPages,
      prev: {
        hasPage: hasPrevPage,
        prevPage,
      },
      next: {
        hasPage: hasNextPage,
        nextPage,
      },
    })
  }

  const onLoadArtists = async (queryParam) => {
    const querySanitized = queryParam && queryParam.split('/search')[1]
    const query = querySanitized || `?q=artist:${artistName || 'Skyn'}&type=artist&limit=20&offset=0`

    const response = await client.getArtists(query)
    const data = response.data.artists
    const artistsFormatted = data.items.map(item => ({
      id: item.id,
      name: item.name,
      photo: item.images[2] ? item.images[2].url : '',
      url: item.href,
    }))

    const controllerPages = {
      offset: data.offset,
      nextPage: data.next,
      prevPage: data.previous,
      totalItems: data.total,
    }
    controllerPagination(controllerPages)
    setArtists(artistsFormatted)
  }

  useEffect(() => {
    onLoadArtists()
  }, [])

  useEffect(() => {
    if (lastArtistName !== artistName && artistName.length >= MIN_LENGHT_ARTIST_NAME) {
      onLoadArtists()
      setlastArtistName(artistName)
    }
  }, [artistName])


  return (
    <Layout>
      <SubHeader
        breadcrumb={[{ text: 'Buscar Artistas' }]}
        heading="Localize seus músicos favoritos"
        buttonHref="/"
      />
      <div className={wrapper}>
        <div className={headerContainer}>
          <label className={labelSearch} htmlFor="searchArtist">
            <span className={labelSpan}>Buscar</span>
            <input
              className={inputSearch}
              id="searchArtist"
              name="searchArtist"
              value={artistName}
              onChange={e => setArtistName(e.target.value)}
              placeholder="Digite o nome do artista"
            />
          </label>

          {pagination.currentPage &&
            <nav className={controllers}>
              <button
                className={`${!pagination.prev.hasPage && buttonDisabled}`}
                onClick={() => onLoadArtists(pagination.prev.prevPage)}
              >
                <img src={arrowSvg} alt="" />
              </button>

              <span>{`${pagination.currentPage} de ${pagination.totalPages}`}</span>

              <button
                className={`${!pagination.next.hasPage && buttonDisabled}`}
                onClick={() => onLoadArtists(pagination.next.nextPage)}
              >
                <img src={arrowSvg} alt="" />
              </button>
            </nav>
          }
        </div>

        <div className={cards}>
          {artists.map(item => (
            <CardArtist
              id={item.id}
              key={item.id}
              photo={item.photo}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default SearchArtists
