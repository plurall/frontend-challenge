import { SomosClient } from '../../utils'

export function changeValue(e) {
  const params = { q: e.target.value, type: 'artist', market: 'us' }
  return dispatch => {
    dispatch({ type: 'CHANGE_VALUE', payload: e.target.value })
    if (e.target.value.length > 4) {
      SomosClient('search', params, res => {
        dispatch({
          type: 'HANDLE_SEARCH',
          payload: res.data.artists,
        })
      })
    }
  }
}

export function changeAlbums(id) {
  const params = { market: 'us', include_groups: 'single', limit: 10 }
  return dispatch => {
    SomosClient(`/artists/${id}/albums`, params, res => {
      dispatch({ type: 'HANDLE_ALBUMS', albums: res.data, id })
    })
  }
}
