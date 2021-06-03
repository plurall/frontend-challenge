import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './Search.module.css'
import { SomosClient } from '../../utils'
import { ArtistList } from '../../components'

const {
  'search-container': searchContainer,
  'back-btn': backBtn,
  'input-text': inputTxt,
  'artist-container': artistContainer,
  'transition-in': transitionIn,
} = styles

function Search() {
  const history = useHistory()
  const [userInput, setUserInput] = useState('')
  const [artistData, setArtistData] = useState([])

  function pushUrl(url) {
    history.push(url)
  }

  useEffect(() => {
    async function fetchAPI() {
      if (userInput.length >= 4) {
        const data = await SomosClient(userInput, 'search')
        setArtistData(data.artists.items)
      }
    }

    fetchAPI()
  }, [userInput])

  function handleEvent({ target }) {
    setUserInput(target.value)
  }

  return (
    <div className={`${searchContainer} ${transitionIn}`}>
      <input
        type="text"
        className={inputTxt}
        placeholder="Find your favorites Artist"
        onInput={e => handleEvent(e)}
      />
      <button className={backBtn} onClick={() => pushUrl('/')}>
        &#8249; <span>Back</span>
      </button>

      <div className={artistContainer}>
        {artistData.map(({ name, images, id }) => (
          <ArtistList name={name} image={images} id={id} pushing={pushUrl} />
        ))}
      </div>
    </div>
  )
}

export default Search
