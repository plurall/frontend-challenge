import React, { useEffect, useState } from 'react'

import Card from 'components/Card'
import { SomosClient } from 'utils'

import {
  wrapper,
  cards,
  loading_container as loadingContainer,
  loading_hidden as loadingHidden,
  not_found as notFound,
  header_container as headerContainer,
} from './SearchArtists.module.css'
import Loading from 'components/Loading'
import InputSearch from 'components/InputSearch';
import PaginationController from 'components/PaginationController';
import { BaseRoutes } from 'routes/BaseRoutes'
import { SubHeader } from 'components'

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
  const [isLoadingArtists, setIsLoadingArtists] = useState(false)

  const controllerPagination = ({
    offset = 0,
    nextPage,
    prevPage,
    totalItems
  }) => {
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
    setIsLoadingArtists(true)
    const querySanitized = queryParam && queryParam.split('/search')[1]
    const query = querySanitized || `?q=artist:${artistName || 'Skyn'}&type=artist&limit=20&offset=0`

    try {
      const response = await client.getArtists(query)
      const artistsFormatted = response.data.artists.items.map(item => ({
        id: item.id,
        name: item.name,
        photo: item.images.length ? item.images[0].url : '',
        url: item.href,
      }))

      const controllerPages = {
        offset: response.data.artists.offset,
        nextPage: response.data.artists.next,
        prevPage: response.data.artists.previous,
        totalItems: response.data.artists.total,
      }
      controllerPagination(controllerPages)
      setArtists(artistsFormatted)
    } catch (error) {
      console.log(error)
    }finally{
      setIsLoadingArtists(false)
    }
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
    <>
      <SubHeader
        breadcrumb={[{ text: 'Buscar Artistas', href: BaseRoutes.search}]}
        heading="Localize seus músicos favoritos"
        buttonHref={BaseRoutes.login}
      />
      <div className={wrapper}>
        <div className={headerContainer}>
          <InputSearch
            id="searchArtist"
            name="searchArtist"
            label="Buscar"
            placeholder="Digite o nome do artista"
            value={artistName}
            onChange={e => setArtistName(e.target.value)}
          />

          {artists.length ?
            <PaginationController
              id="controller"
              name="controller"
              pagination={pagination}
              debounceTime={300}
              buttonLeft={() => onLoadArtists(pagination.prev.prevPage)}
              buttonRight={() => onLoadArtists(pagination.next.nextPage)}
            />
          : ""}
        </div>

        <div className={`${loadingContainer} ${!isLoadingArtists && loadingHidden}`}>
          <Loading/>
        </div>

        <div className={cards}>
          {artists.length ? artists.map(item => (
            <Card
              id={item.id}
              key={item.id}
              photo={item.photo}
              name={item.name}
            />
          ))
        :
          !isLoadingArtists && <div className={notFound}>
            <h1>Artista {artistName} não encontrado.</h1>
          </div>
        }
        </div>
      </div>
    </>
  )
}

export default SearchArtists
