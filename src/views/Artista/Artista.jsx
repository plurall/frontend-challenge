import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { SubHeader, Loading, Wrapper, BackButton } from 'components'
import { SomosClient } from 'utils'
import * as styles from './Artista.module.scss'
import Genres from './components/genres'
import Popularity from './components/Popularity'
import Albuns from './components/Albuns'

const Artista = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [artistData, setArtistData] = useState(null)
  const [albuns, setalbuns] = useState([])

  useEffect(() => {
    const client = new SomosClient()

    const fetchArtistData = async () => {
      try {
        setLoading(true)
        const data = await client.getArtist(id)
        const { artista, albuns } = data
        setArtistData(artista)
        setalbuns(albuns)
      } catch (error) {
        console.error('Erro ao buscar dados do artista:', error)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchArtistData()
    }
  }, [id])

  return (
    <>
      <SubHeader breadcrumb={[{ text: 'Artista' }]} heading='Detalhes do Artista' />
      <Wrapper>
        <BackButton to='/busca'>Voltar</BackButton>
        {loading && <Loading />}
        <div className={styles.artistContent}>
          {artistData && (
            <div className={styles.artistHeader}>
              <img
                src={artistData.images[0]?.url}
                alt={artistData.name}
                className={styles.artistImage}
              />
              <div className={styles.artistInfo}>
                <h1 className={styles.artistName}>{artistData.name}</h1>
                <Popularity popularity={artistData?.popularity} />
                <Genres genres={artistData?.genres} />
              </div>
            </div>
          )}
          <Albuns albuns={albuns} />
        </div>
      </Wrapper>
    </>
  )
}

export default Artista
