import React, { useState } from 'react'
import { useGetArtists } from 'hooks'

import { Layout, Input, Loading, GridArtistas } from 'components'

import styles from './Busca.module.css'

const Busca = () => {
  const [inputValue, setInputValue] = useState('')
  const [artists, loading] = useGetArtists(inputValue)

  return (
    <>
      <Layout>
        <div className={styles.wrapper}>
          <Input
            placeholder="Buscar"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />

          {loading ? <Loading /> : <GridArtistas data={artists} />}
        </div>
      </Layout>
    </>
  )
}

export default Busca
