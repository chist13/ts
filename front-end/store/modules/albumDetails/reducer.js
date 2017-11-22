import initialState from './initialState'

export default (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_ALBUM_PENDING":
			return {...state, fetching: true}

		case "FETCH_ALBUM_FULFILLED":
			const { info, pagination } = action.payload.data
			return {...state, fetching: false, fetched: true, info, pagination}

		case "FETCH_ALBUM_REJECTED":
			return {...state, fetching: false, error: action.payload}

		default:
			return state
	}
}