import React from 'react';


import SubHeader from '../../components/SubHeader';

import { SomosClient } from '../../utils';

const Artist: React.FC = () => {

  const client = new SomosClient();

  return (
    <>
      <SubHeader
        buttonHref="/busca"
        breadcrumb={[{ text: 'Home  >  Busca  >  Artista' }]}
        heading="Somos Front-end Challange"
      />
      <h1>Informações do Artista</h1>
    </>
  )
}

export default Artist;
