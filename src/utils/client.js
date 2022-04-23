import { getToken } from 'utils'

const getAllArtistsByName = async artistName => {
  const token = getToken()

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  }

  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/search?q=${artistName}&type=artist`,
      {
        headers,
      },
    )

    const data = response.json()

    return data
  } catch (err) {
    throw err
  }
}

const getArtistById = async id => {
  const token = getToken()

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  }

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/artists/${id}`,
    {
      headers,
    },
  )

  const data = response.json()

  return data
}

const getArtistAlbums = async id => {
  const token = getToken()

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  }

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/artists/${id}/albums?limit=10`,
    {
      headers,
    },
  )

  const data = response.json()

  return data
}

export { getAllArtistsByName }
export { getArtistById }
export { getArtistAlbums }
