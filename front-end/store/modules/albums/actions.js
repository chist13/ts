export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'

const fetchAlbums = () => async (dispatch) => {
	dispatch({type: FETCH_POSTS_REQUEST})

	try {
		const res = await fetch('/api/albums')
		const json = await res.json()

		dispatch({type: FETCH_POSTS_SUCCESS, albums: json})
	} catch (error) {
		dispatch({type: FETCH_POSTS_FAILURE, error})
	}
}

export const fetchAlbumsIfNeeded = () => (dispatch, getState) =>
	getState().albums.length || dispatch(fetchAlbums())
