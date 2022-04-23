import { Layout, SubHeader } from 'components'
import ArtistCard from 'components/ArtistCard'
import { FadeWrapper } from 'components/FadeWrapper'
import React, { useEffect, useState } from 'react'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { IoSearchCircle } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { getAllArtistsByName } from 'utils/client'
import styles from './SearchArtists.module.css'

const SearchArtists = () => {
  const [artists, setArtists] = useState([])
  const [artistsName, setArtistsName] = useState('')

  useEffect(() => {
    if (artistsName.length > 4) {
      const getArtists = async () => {
        try {
          const { artists } = await getAllArtistsByName(artistsName)
          setArtists(artists.items)
        } catch (err) {
          alert(err)
        }
      }

      getArtists()
    } else {
      setArtists([])
    }
  }, [artistsName])

  return (
    <Layout>
      <SubHeader
        breadcrumb={[{ text: 'Search artists' }]}
        heading="Desafio Front-end do Plurall"
      />
      <FadeWrapper>
        <div className={styles.wrapper}>
          <div className={styles.inputWrapper}>
            <Link
              to="/"
              style={{ height: '20px', width: '20px', marginBottom: '10px' }}
            >
              <BsFillArrowLeftCircleFill size={20} color="#ffffff" />
            </Link>
            <div>
              <label htmlFor="artistName">Buscar artistas pelo nome</label>
              <div>
                <input
                  id="artistName"
                  name="artistName"
                  type="text"
                  placeholder="Digite o nome do artista"
                  onChange={e => setArtistsName(e.target.value)}
                />
                <IoSearchCircle
                  className={styles.searchIcon}
                  size="30"
                  color="#18b34e"
                />
              </div>
            </div>
          </div>

          {artists.length > 0 ? (
            <section className={styles.artistsWrapper}>
              {artists.map(artist => (
                <ArtistCard
                  key={artist.id}
                  artistId={artist.id}
                  artistName={artist.name}
                  artistImage={artist.images.length > 0 && artist.images[0].url}
                />
              ))}
            </section>
          ) : (
            <div className={styles.noArtists}>
              <IoSearchCircle
                className={styles.searchIcon}
                size="130"
                color="#18b34e"
              />
              <p>Procure por um artista existênte!</p>
            </div>
          )}
        </div>
      </FadeWrapper>
    </Layout>
  )
}

export { SearchArtists }
