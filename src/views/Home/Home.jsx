import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { SomosClient } from '../../utils'

import styles from './Layout.module.css'

function Home() {
  const [userData, setUserData] = useState([])
  const [spinner, setSpinner] = useState(true)
  const { display_name: name, images } = userData
  const fakeEmail = name
    ? `${name.replace(' ', '_').toLowerCase()}@fakemail.com`
    : null
  const userImage = images ? images[0].url : null
  const history = useHistory()
  const {
    'nav-bar': navBar,
    'loading-element': loadingElement,
    'welcome-title': welcomeTitle,
    'profile-box': profileBox,
    'profile-picture': profilePicture,
    'user-email': userEmail,
    'user-box-btn': userBoxBtn,
    'transition-in': transitionIn,
  } = styles

  function pushUrl(url) {
    history.push(url)
  }

  useEffect(() => {
    async function fetchAPI() {
      setSpinner(false)
      const data = await SomosClient(true)
      setUserData(data)
    }
    fetchAPI()
  }, [])

  return (
    <div className={transitionIn}>
      <div className={navBar}>
        {spinner ? (
          <span className={loadingElement} />
        ) : (
          <div className={profileBox}>
            <img
              src={userImage}
              className={profilePicture}
              alt={`${name} profile`}
            />
            <span className={welcomeTitle}>
              {name} <br />
            </span>
            <span className={userEmail}>{fakeEmail}</span>
            <button className={userBoxBtn} onClick={() => pushUrl('/search')}>
              SEARCH MUSIC
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
