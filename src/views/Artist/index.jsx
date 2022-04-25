import { Layout, SubHeader } from 'components'
import { FadeWrapper } from 'components/FadeWrapper'
import React, { useEffect, useState } from 'react'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'
import { getArtistAlbums, getArtistById } from 'utils/client'
import styles from './Artist.module.css'

const Artist = () => {
  const params = new URLSearchParams(document.location.search.substring(1))
  const artistId = params.get('artistId') // return artistId by url query
  const [artist, setArtist] = useState({})
  const [artistAlbums, setArtistAlbums] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getArtists = async () => {
      try {
        const artistData = await getArtistById(artistId)
        const { items: albumsData } = await getArtistAlbums(artistId)

        setArtist(artistData)
        setArtistAlbums(albumsData)
      } catch (err) {
        alert(err)
      }

      setLoading(false)
    }
    getArtists()
  }, [])

  return (
    <Layout>
      <SubHeader
        breadcrumb={[{ text: 'Artist' }]}
        heading="Desafio Front-end do Plurall"
      />
      {loading ? (
        <div className={styles.loader}>
          <ClipLoader color="#ffffff" size={100} />
        </div>
      ) : (
        <FadeWrapper>
          <main className={styles.wrapper}>
            <Link to="/search/artists" style={{ height: '20px' }}>
              <BsFillArrowLeftCircleFill size={20} color="#ffffff" />
            </Link>
            <section className={styles.artistDataContainer}>
              <div
                className={styles.artistImage}
                style={{
                  backgroundImage:
                    artist.images.length > 0
                      ? `url("${artist.images[0].url}")`
                      : 'url("https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg")',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              />

              <div className={styles.artistInfo}>
                <div className={styles.artistNameContainer}>
                  <h2>{artist.name}</h2>

                  <p>popularidade: {artist.popularity}</p>
                </div>

                {artist.genres.length > 0 ? (
                  <div className={styles.genresContainer}>
                    <h3>Gêneros</h3>
                    <ul>
                      {artist.genres.map(genre => (
                        <li key={genre}>
                          <span>{genre}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className={styles.genresContainer}>
                    <i>Não há gêneros</i>
                  </div>
                )}
              </div>
            </section>

            <section className={styles.artistAlbumsContainer}>
              <h2>Álbuns</h2>

              <div className={styles.artistAlbumsWrapper}>
                {artistAlbums ? (
                  artistAlbums.map(album => (
                    <div key={album.id} className={styles.albumCard}>
                      <div
                        className={styles.albumImage}
                        style={{
                          backgroundImage: album.images
                            ? `url("${album.images[0].url}")`
                            : 'url("https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg")',
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                        }}
                      />

                      <div className={styles.albumDataContainer}>
                        <h3>{album.name}</h3>
                        <p>
                          lançamento:{' '}
                          {String(album.release_date)
                            .split('-')
                            .reverse()
                            .join('/')}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <i>Não há álbuns</i>
                )}
              </div>
            </section>
          </main>
        </FadeWrapper>
      )}
    </Layout>
  )
}

export { Artist }
