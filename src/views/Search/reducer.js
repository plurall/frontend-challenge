const INITIAL_STATE = {}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'HANDLE_ALBUMS':
      return {
        ...state,
        filter_artists: state.artists.items.filter(n => n.id === action.id),
        albums: action.albums.items,
        id: action.id,
      }
    case 'CHANGE_VALUE':
      return { change: action.payload }
    case 'HANDLE_SEARCH':
      return { artists: action.payload }
    default:
      return state
  }
}
