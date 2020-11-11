import React from 'react'
import { TextBox } from 'plurall-ui'

import { SubHeader } from 'components'
import { ArtistCard } from 'components'

import styles from './Busca.module.css'

class Busca extends React.Component {
  state = {}
  render() {
    const { handleSearch, result } = this.props;
    const _handleOnType = (q) => {      
      if(q.length>4){
        handleSearch(q);
      }      
    }
    return (
      <React.Fragment>
        <SubHeader
          buttonHref="/home"
          breadcrumb={[{ text: 'Busca' }]}
          heading="Busque por um artista"
        />
        <div className={styles.wrapper}>
          <TextBox placeholder="Digite o nome de um artista" onChange={(e)=>_handleOnType(e)} type="text" />
          {result && result.artists && result.artists.items && (
            <div className={styles.resultContainer}>
              <h2 className={styles.resultTitle}>Resultado</h2>
              <div className={styles.grid}>
              {result.artists.items.map((artist)=>{
                return <ArtistCard name={artist.name} images={artist.images} id={artist.id} />                 
              })}
              </div>
            </div>
          )}
        </div>        
      </React.Fragment>
    )
  }
}

export default Busca
