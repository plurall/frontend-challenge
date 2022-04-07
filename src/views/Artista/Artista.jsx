/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SubHeader, ListaAlbum, RatingStar } from 'components'
import { SomosClient } from 'utils'
import styles from './Artista.module.css'
import imagemDefault from './../../assets/img/singing.svg'

const Artista = () => {
  const client = new SomosClient()
  const [artista, setArtista] = useState({})
  const [albums, setAlbums] = useState([])
  const { id } = useParams()

  async function GetArtista() {
    const ArtistaApi = await client.showArtist(id)

    if (!ArtistaApi.id) return

    const oArtista = {
      id: ArtistaApi.id,
      name: ArtistaApi.name,
      popularity: ArtistaApi.popularity,
      image:
        ArtistaApi.images.length > 0 ? ArtistaApi.images[0].url : imagemDefault,
      genres: ArtistaApi.genres.join(', '),
    }

    // eslint-disable-next-line consistent-return
    return oArtista
  }

  function CalcularPercentualEstrelas(popularity) {
    return parseInt(popularity / 20, 10)
  }

  async function GetArtistaAlbums() {
    const AlbumsApi = await client.getArtistAlbums(id)

    if (!AlbumsApi.items) return null

    const oAlbums = AlbumsApi.items.map(album => {
      const oAlbum = {
        id: album.id,
        name: album.name,
        date: new Date(album.release_date).toLocaleDateString('pt-BR'),
        image:
          album.images.length > 0
            ? album.images[0].url
            : 'images/default-icon.png',
      }

      return oAlbum
    })
    return oAlbums
  }

  useEffect(() => {
    GetArtista(id).then(artistaRecebido => {
      setArtista(artistaRecebido)
    })
    GetArtistaAlbums(id).then(albumsRecebido => {
      setAlbums(albumsRecebido)
    })
  }, [])

  return (
    <React.Fragment>
      <SubHeader
        buttonHref="/busca"
        breadcrumb={[{ text: 'Artista' }]}
        heading={artista.name ? artista.name : ''}
      />
      <div className={styles.wrapper}>
        <div className={styles.sidenav}>
          <div className={styles.divImagem}>
            <img
              className={styles.Imagem}
              src={artista.image}
              alt="imagem do artista"
            />
          </div>
          <div className={styles.detalhes}>
            <p>
              Gênero : {artista.genres ? artista.genres : ['Não Informado']}
            </p>
            <div className={styles.popularidade}>
              <p>Popularidade:</p>
              <div className={styles.star}>
                {[1, 2, 3, 4, 5].map(index => (
                  <RatingStar
                    key={index}
                    index={index}
                    rating={CalcularPercentualEstrelas(artista.popularity)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <ListaAlbum albums={albums} />
      </div>
    </React.Fragment>
  )
}

export default Artista
