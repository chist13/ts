import initialState from './initialState'

export default (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_ALBUMS_PENDING":
			return {...state, fetching: true}
		case "FETCH_ALBUMS_FULFILLED":
			return {...state, fetching: false, fetched: true, albums: action.payload.data}
		case "FETCH_ALBUMS_REJECTED":
			return {...state, fetching: false, error: action.payload}
		default:
			return state
	}
}