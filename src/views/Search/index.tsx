import React from 'react';


import SubHeader from '../../components/SubHeader';

import { SomosClient } from '../../utils';

const Search: React.FC = () => {

  const client = new SomosClient();

  return (
    <>
      <SubHeader
        buttonHref="/"
        breadcrumb={[{ text: 'Home  >  Busca' }]}
        heading="Somos Front-end Challange"
      />
      <h1>Buscar Artista</h1>
    </>
  )
}

export default Search;
