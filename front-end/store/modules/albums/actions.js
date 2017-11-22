import axios from 'axios'

export const requestAlbumsIfNeeded = () => (dispatch, getState) =>
	getState().albums.fetched || dispatch(requestAlbums())

export const requestAlbums = () => ({
	type: 'FETCH_ALBUMS',
	payload: axios('/api/albums')
})