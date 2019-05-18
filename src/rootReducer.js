import { combineReducers } from "redux"
import {artists} from "./views/Artista/artists.json"

const rootReducer = combineReducers({
  artists: ()=> ({
    type: "ARTISTS",
    payload: artists
  })
})

export default rootReducer;
