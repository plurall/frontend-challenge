import React from 'react'
import { useParams } from 'react-router'
import styles from './Artist.module.css'
import Album from '../../components/Album'
import ProfileArtist from '../../components/ProfileArtist'
import { useProfileArtist } from '../../hooks'
import Conditional from '../../components/Conditional'

const Artis = () => {
  const { id } = useParams()
  const [artist, albums] = useProfileArtist(id)

  return (
    <section className={styles.container}>
      <Conditional condition={artist} truthy={<ProfileArtist artist={artist} />}/>
      <Conditional condition={albums} truthy={ <Album albums={albums} />}/>
    </section>
  )
}

export default Artis
