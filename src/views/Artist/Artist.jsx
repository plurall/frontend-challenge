import React, { useContext, useEffect } from 'react'
import { Sidebar } from 'components'
import { Footer } from 'plurall-footer'
import styles from './Artist.module.css'
import Context from 'context/Context'
import DetailsArtist from 'components/Details/DetailsArtist'

const Artist = (props) => {
  const { match: { params: { id } } } = props;
  const {
    loading,
    albums,
    artists,
    setLoading,
    getAlbumArtist } = useContext(Context);

  const artist = artists.find((a) => {
    const result = a.id === id
    setLoading(false)
    return result
  });

  useEffect(() => { getAlbumArtist(id) }, [])

  return (
    <React.Fragment>
      <div className={styles.main}>
        <Sidebar />
        {loading ? <p>Loading...</p> : DetailsArtist(artist, albums)}
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Artist
