import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import logger from 'redux-logger'

import albums from './modules/albums/reducer'
import album from './modules/albumDetails/reducer'

const reducers = combineReducers({
	albums, album
})

const initialState = {}

const middlewares = applyMiddleware(
	thunkMiddleware,
	promiseMiddleware(),
	logger
)

export default createStore(
	reducers,
	initialState,
	middlewares
)