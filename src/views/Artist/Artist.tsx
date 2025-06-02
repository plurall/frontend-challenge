import React from 'react'
import { useArtistDetails } from '../../apis/spotify/queries/useArtistDetails'
import { useParams } from 'react-router-dom'
import * as styles from './Artist.module.scss'
import Spinner from 'components/Spinner/Spinner'
import { ArtistHeader } from './components/ArtistHeader'
import { AlbumList } from './components/AlbumList'
import Wrapper from 'components/Wrapper/Wrapper'
import { BackButton } from 'components/BackButton/BackButton'

export default function Artist() {
  const { id: artistId } = useParams()
  const { data, isLoading, error } = useArtistDetails(String(artistId))

  if (error || !data) return null

  const { artist, albums } = data

  return (
    <main className={styles.container}>
      <Wrapper>
        <BackButton />
        {isLoading && <Spinner />}
        {error && <p>Erro ao carregar artista</p>}
        <ArtistHeader artist={artist} />
        <AlbumList albums={albums} />
      </Wrapper>
    </main>
  )
}
