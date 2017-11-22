import axios from 'axios'

export const requestAlbums = () => ({
	type: 'FETCH_ALBUMS',
	payload: axios('/api/albums')
})