import React, { useState, useEffect } from 'react'

import { getArtist } from 'utils'
import { Loader } from 'components'
import { SubHeader } from 'components'
import { Error } from 'components'
import { Input } from 'plurall-form'
import { A } from 'hookrouter'

import styles from './Search.module.css'

const Search = () => {

  const [data, setData]   = useState([])
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {

    const fetchData = async () => {
      setIsLoading(true)
      setIsError(false)

      try {
        let response  = await getArtist(query)
        const nodes   = response.artists.items.map((item) => item)

        setData(nodes)
        console.log(response, 'get in')
        console.log(response.artists.items.images, 'images')
      } catch(error){
          setIsError(true)
      }
      
      setIsLoading(false)

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
          type = 'text' 
          className={styles.search}
          onChange={event => setQuery(event.target.value)}
        />

        { isLoading ? ( <Loader /> ): (
          
          <div className={styles.boxCards}>
            { data.map(item => ( 
             <div className={styles.card} key = {item.id}>
              <h3>
                <A href = {`/artist/${item.id}`}>
                  {item.name}
                </A> 
              </h3>
              {item.images.map((item, index) => (
                index === 1 ? <img key = {index} src = {item.url} alt={`${item.name}`} /> : ''
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