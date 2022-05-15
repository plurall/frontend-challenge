import React, {useEffect} from 'react';
import { SubHeader } from 'components';

import {
  wrapper
} from './ArtistDetails.module.css';
import { BaseRoutes } from 'routes/BaseRoutes';
import { SomosClient } from 'utils';

const ArtistDetails = (props) => {
  const id = props.match.params.id
  const client = new SomosClient()

  const onLoadArtistDetails = async () => {
    try {
      const response = await client.getArtistById(id)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    onLoadArtistDetails()
  }, [])

  return (
    <>
      <SubHeader
        breadcrumb={[{ text: 'Artista' }]}
        heading="Localize seus músicos favoritos"
        buttonHref={BaseRoutes.search}
      />
      <div className={wrapper}>

      </div>
    </>
  );
}

export default ArtistDetails
