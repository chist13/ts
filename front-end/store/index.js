import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import logger from 'redux-logger'

import albums from './modules/albums/reducer'

const reducers = combineReducers({
	albums
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