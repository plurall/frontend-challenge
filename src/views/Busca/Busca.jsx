import React, { useState } from 'react'
import { SubHeader, Loading, Wrapper } from 'components'
import { SomosClient } from 'utils'
import * as styles from './Busca.module.scss'
import ListaArtistas from './components/ListaArtistas'

const Busca = () => {
  const [loadingSearch, setLoadingSearch] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [listArtists, setListArtists] = useState([])
  const client = new SomosClient()

  const handleSearch = async event => {
    const value = event.target.value
    setSearchTerm(value)
    if (value.length === 0) {
      setLoadingSearch(false)
      setListArtists([])
    }

    if (value.length > 4) {
      setLoadingSearch(true)
      try {
        const data = await client.getArtists(value)
        // Atualiza a lista independentemente do resultado
        setListArtists(data?.artists?.items || [])
      } catch (error) {
        console.error('Erro ao buscar artistas:', error)
        setListArtists([])
      } finally {
        setLoadingSearch(false)
      }
    }
  }

  return (
    <>
      <SubHeader breadcrumb={[{ text: 'Busca' }]} heading='Busca de Artista' />
      <Wrapper>
        <div className={styles.searchSection}>
          <input
            type='text'
            value={searchTerm}
            onChange={handleSearch}
            placeholder='Digite sua busca'
            className={styles.searchInput}
            autoFocus
          />
        </div>
        <div className={styles.listSection}>
          {loadingSearch && <Loading />}
          {listArtists.length > 0 &&
            listArtists.map(elem => {
              const { id, name, type, images } = elem
              return (
                <ListaArtistas
                  key={id}
                  id={id}
                  name={name}
                  type={type}
                  imageUrl={images?.[0]?.url}
                />
              )
            })}
        </div>
      </Wrapper>
    </>
  )
}

export default Busca
