import { combineReducers } from 'redux'
import { searchReducer } from './views'

const rootReducer = combineReducers({
  searchData: searchReducer,
})

export default rootReducer
