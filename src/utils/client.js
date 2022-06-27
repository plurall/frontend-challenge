import { getToken } from 'utils'
import React from 'react'

class SomosClient extends React.Component {
  // eslint-disable-next-line
  // eslint-disable-next-line

  // eslint-disable-next-line
  async getArtists(artist) {
    // console.log(token)
    const URL_TO_FETCH = `${process.env.REACT_APP_API_URL}/search?q=${artist}&type=artist`

    const response = await fetch(URL_TO_FETCH, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    return response.json()
  }

  // eslint-disable-next-line class-methods-use-this
  async getArtistId(id) {
    const URL_TO_FETCH = `${process.env.REACT_APP_API_URL}/artists/${id}`

    const response = await fetch(URL_TO_FETCH, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    return response.json()
  }

 // eslint-disable-next-line class-methods-use-this
  async getAlbumsById(id) {
    const URL_TO_FETCH = `${process.env.REACT_APP_API_URL}/artists/${id}/albums?limit=10`

    const response = await fetch(URL_TO_FETCH, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    return response.json()
  }
}

export default SomosClient
