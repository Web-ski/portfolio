import { combineReducers } from "redux"
import themeReducer from './theme/'

const allReducers = combineReducers({
  themes: themeReducer
})

export default allReducers