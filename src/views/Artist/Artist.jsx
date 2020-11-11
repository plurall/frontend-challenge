import React from 'react'
import { SubHeader } from 'components'
import { AlbumCard } from 'components'

import styles from './Artist.module.css'

class Artist extends React.Component {
  render() {
    const { artist, albums } = this.props;
    const { name, popularity, images, genres } = artist;
    return (
      <React.Fragment>
        <SubHeader
          buttonHref="/busca"
          breadcrumb={[{ text: 'Artista' }]}
          heading={name}          
        />
        <div className={styles.wrapper}>
          <div className={styles.artistData}>
            <div>              
              {images && images.length > 0 && 
                <img className={styles.artistPhoto} width="100%" src={images[0].url} alt={name}/>
              }
              <p className={styles.labelPopularity}>Popularidade: <b>{popularity}</b></p>            
              
              {genres && genres.length > 0 && ( 
                <>
                  <h2 className={styles.subTitle}>Gêneros</h2>                
                  {genres.map((genre, index)=>{
                    return <span className={styles.badgeGenre} key={index}>{genre}</span>
                    })
                  }
                </>
              )}            
            </div>
            <div>
              <h2 className={styles.subTitle}>Discografia</h2>
              <div className={styles.albumsList}>
              {
                albums && albums.items.map((album, index) => {
                  return <AlbumCard key={index} name={album.name} releaseDate={album.release_date} images={album.images} />
                })
              }              
              </div>              
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Artist
