import { clearToken, getToken } from 'utils'
import axios from 'axios'

const config = () => {
  const token = getToken()
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    return config
 }

 export const getArtist = async (artist) => {
  const request = await axios(`${process.env.REACT_APP_API_URL}/search?q=${artist}&type=artist`, config())
  
  if ( artist !== '') return request.data
} 


export const getArtistId = async (id) => {
  const request = await (`${process.env.REACT_APP_API_URL}/artists/${id}`, config())

  if(id !== undefined) return request.data
}


export const getAlbums = async (id) => {
  const request =  await (`${process.env.REACT_APP_API_URL}/artists/${id}/albums`, config())

  if(id !== undefined) return request.data
} 

