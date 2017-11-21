import { createStore, combineReducers } from 'redux'

import albums from './modules/albums/reducer'

const reducers = combineReducers({
	albums
})

export default createStore(reducers)