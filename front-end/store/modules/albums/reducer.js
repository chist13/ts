import { FETCH_POSTS_REQUEST, FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS } from './actions'

export default (state = {isFetching: false, albums: [], error: null}, action) => {
	switch (action.type) {
		case FETCH_POSTS_REQUEST:
			return Object.assign({}, state, {isFetching: true})
		case FETCH_POSTS_FAILURE:
			return Object.assign({}, state, {isFetching: false, error: action.error})
		case FETCH_POSTS_SUCCESS:
			return Object.assign({}, state, {isFetching: false, albums: action.albums})
		default:
			return state
	}
}