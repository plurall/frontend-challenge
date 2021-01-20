import React, { useState, useEffect } from 'react'

import { SubHeader } from 'components'
import { getArtistId, getAlbums, formatedDate } from 'utils'

import styles from './Artist.module.css'

const Artist = (props) => {

  const [ data, setData  ]   = useState([])
  const [albums, setAlbums ] = useState([])
  const [image, setImage ]   = useState([])
  const [style, setStyle ]   = useState([])


  useEffect(() => {
    let fetchData = async () => {

      try {
        const response = await getArtistId(props.id)
        const pictures = response.images
        const genres   = response.genres
        
        setData(response)
        setImage(pictures)
        setStyle(genres)

      } catch(error){
        console.log('ERROR', error)
      }
    }

    fetchData()
  },[])

  useEffect(() => {
    let fetchData = async () => {

      try {
        const response = await getAlbums(props.id)
        const nodes    = response.items.map((item) => item)
        
        setAlbums(nodes.slice(0,10))
        console.log(nodes.slice(0,10), 'albums get')
      } catch(error){
        console.log('ERROR', error)
      }
    }

    fetchData()
  },[])

  return (
    <>
      <SubHeader
        breadcrumb={[{ text: 'Home | Search | Artist' }]}
      /> 
      
      <div className = {styles.wrapper}>
        <h2 className={styles.title}>Welcome to my page</h2>
        
        <div className={styles.infos}>
          <div className={styles.picture}>
            {image.map((item, index) => (
              index === 2 ? <img key = {index} src = {item.url} alt={`${item.name}`}  /> : ''
            ))} 
          </div>
          <span> Name: {data.name}</span>
          <span> Popularity: {data.popularity}</span>
          <ul className={styles.genres}>
            <li> Genres: </li>
            { style.map((item, index) => (
              <li key = {index}>{item}</li>
            ))}
          </ul>
        </div>
        
        <hr className={styles.line}/>
        
        <h3 className={styles.title}>Albums:</h3>
        <div className={styles.boxCard}>
          { albums.map(item => (
            <div className={styles.card} key={item.id}>
              { item.images.map((item, index) => (
                index === 1 ? <img key = {index} src = {item.url} alt={`${item.name}`} /> : ''
              ))}
              <h4>{item.name}</h4>
              <span className={styles.date}>{formatedDate(item.release_date)}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Artist