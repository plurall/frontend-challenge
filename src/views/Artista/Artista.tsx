import React from 'react'
import { useParams } from 'react-router-dom'
import { SubHeader, Loading, Wrapper, BackButton, ErrorMessage } from 'components'
import { useArtist } from 'hooks'
import { ArtistHeader } from './components/ArtistHeader'
import Albuns from './components/Albuns'
import * as styles from './Artista.module.scss'

const Artista: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { isLoading, error, artist, albums } = useArtist(id)

  return (
    <>
      <SubHeader breadcrumb={[{ text: 'Artista' }]} heading='Detalhes do Artista' />
      <Wrapper>
        <BackButton to='/busca'>Voltar</BackButton>

        <div className={styles.artistContent}>
          {isLoading && <Loading />}
          {error && <ErrorMessage title={error} />}
          {artist && (
            <>
              <ArtistHeader artist={artist} />
              <Albuns albuns={albums} />
            </>
          )}
        </div>
      </Wrapper>
    </>
  )
}

export default Artista
