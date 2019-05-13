import React from 'react'

import { SubHeader, InputSearch, BoxArtistas } from 'components'
import { SomosClient } from 'utils'

import styles from './Busca.module.css'

const INTERVAL = 500
class Busca extends React.Component {
  state = {
    showArtistas: false,
    artistas: [],
    notFound: false
  }

  client = new SomosClient()

  cbOnChange = function(param) {
    if(param.trim().length >= 4) {
      this.client.getArtistas(param).then(response => {
        console.log("Response: ", response);
        this.setState({ artistas: response.artists.items })
        this.setState({ showArtistas: true });
      })

    }else{
     this.setState({ showArtistas: false })
    }
  }

  render() {
    const { showArtistas, artistas } = this.state
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Busca' }]}
          heading="Somos Front-end Challange"
        />

        <InputSearch
          label="Digite pelo menos 4 caracteres"
          placeholder="Busca de artistas"
          styleProps={{
            display: 'block',
            margin: '10px auto',
            maxWidth: '500px',
            width: '100%',
          }}
          cbOnChange={e => this.cbOnChange(e)}
        />
        {showArtistas && <BoxArtistas artistas={artistas} />}
      </React.Fragment>
    )
  }
}

export default Busca
