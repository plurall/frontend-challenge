import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProfileArtist.module.css'
import Avatar from '../Avatar'
import arrow from '../../assets/images/arrow.png'

const ProfileArtist = ({artist}) => {

  return (
      <div className={styles.container}>
          <div className={styles.wrapperAvatar}>
              <Avatar width={'280px'} height={'280px'} images={artist.images} name={artist.name} />
              <span>Popularidade: {artist.popularity}</span>
              <h2 className={styles.title}>{artist.name}</h2>
            <div className={styles.genres}>
              {artist.genres.map(genre => (
                <span>{genre}</span>
              ))}
            </div>
          </div>
        <Link to={'/busca'}><img width={'50px'} height={'50px'} src={arrow} alt={'icon voltar para home'}/></Link>
      </div>
  )
}

export default ProfileArtist
