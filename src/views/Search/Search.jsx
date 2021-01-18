import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { getToken, getArtist } from 'utils'
import { SubHeader } from 'components'
import { Input } from 'plurall-form'
import { Card } from 'plurall-cards'
import { Loader } from 'components'

import styles from './Search.module.css'

const Search = () => {

  const [data, setData]   = useState([])
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

    const fetchData = async () => {
      setIsLoading(true)
      
      let response  = await getArtist(query)
      const nodes   = response.artists.items.map((item) => item)

      setData(nodes)
      setIsLoading(false)

      console.log(response, 'vai porra')
      console.log(response.artists.items.images, 'images')
    }

    if(query !== ''){
      fetchData();
    }   
    
  }, [query]);

  return (
    <>
      <SubHeader
        breadcrumb={[{ text: 'Home | Search' }]}
      /> 
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Type an Artist or Band would like to listen</h2>
        <Input 
          className={styles.search}
          onChange={event => setQuery(event.target.value)}
        />

        { isLoading ? ( <Loader /> ): (
          
          <div className={styles.boxCards}>
            { data.map(item => ( 
             <div className={styles.card}>
              <h3>{item.name}</h3>
              {item.images.map((item, index) => (
                index === 1 ? <img src = {item.url} /> : ''
              ))}
             </div> 
            ))}
          </div>
        )}
      </div>
    </>   
  )
}

export default Search