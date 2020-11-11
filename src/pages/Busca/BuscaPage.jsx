import React, { useState } from 'react'

import { SomosClient } from 'utils'

import { Layout } from 'components'
import { Busca } from 'views'

const client = new SomosClient()

const BuscaPage = () => {

  const [result, setResult] = useState('');

  const handleSearch = async (q) => {    
    const data = await client.searchArtists(q);
    setResult(data);      
  }

  return(
    <Layout>
      <Busca result={result} handleSearch={handleSearch} />
    </Layout>
  )
}

export default BuscaPage
