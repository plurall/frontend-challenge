import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SubHeader, Search } from 'components'
import { SomosClient } from 'utils'
import styles from './Busca.module.css'

const Busca = () => {
  const client = new SomosClient()
  const [data, setData] = useState([])
  const [value, setValue] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getArtists() {
      setLoading(true)
      const response = await client.getArtists(value)
      console.log(response)
      const artists = response.artists.items.map(({ name, id, images }) => {
        const image = images.length ? images[0].url : ''

        return { id, name, image }
      })

      setData(artists)
      setLoading(false)
    }

    if (value && value.length > 3) {
      getArtists()
    }
  }, [value])

  return (
    <>
      <SubHeader
        breadcrumb={[{ text: 'Home' }]}
        heading="Somos Front-end Challange"
      />
      <div className={styles.wrapper}>
        <div className={styles['grid-template-rows']}>
          <div>
            <h2>Busque seu Artista</h2>
            <p>
              {' '}
              Busque o artista que você mais gosta e veja a popularidade,
              generos, albums e mais.
            </p>
            <Search
              value={value}
              onChange={event => setValue(event.target.value)}
            />
          </div>
          {loading && <p>carregando</p>}

          {!loading && (
            <div>
              {data &&
                data.map(item => (
                  <Link key={item.id} to={`/artista/${item.id}`}>
                    <h1>{item.name}</h1>
                    <img borde src={item.image} alt="artista" width="70%" />
                  </Link>
                ))}
            </div>
          )}
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/26/26834.png"
            alt="fone"
          ></img>
        </div>
      </div>
    </>
  )
}
export default Busca
