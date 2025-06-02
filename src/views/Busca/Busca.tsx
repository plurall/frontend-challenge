import React from 'react'
import { SubHeader, Loading, Wrapper, ErrorMessage } from 'components'
import ArtistList from './components/ArtistList'
import { useSearch } from 'hooks'
import * as styles from './Busca.module.scss'

const Busca: React.FC = () => {
  const { isLoading, error, searchTerm, artists, handleInputChange } = useSearch()

  return (
    <>
      <SubHeader breadcrumb={[{ text: 'Busca' }]} heading='Busca de Artista' />
      <Wrapper>
        <div className={styles.searchSection}>
          <input
            type='text'
            value={searchTerm}
            onChange={handleInputChange}
            placeholder='Digite sua busca'
            className={styles.searchInput}
            autoFocus
          />
        </div>
        <div className={styles.listSection}>
          {isLoading && <Loading />}
          {error && <ErrorMessage title={error} />}
          <ArtistList artists={artists} />
        </div>
      </Wrapper>
    </>
  )
}

export default Busca
