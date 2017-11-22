import axios from 'axios'

export const requestAlbumIfNeeded = (id, page) => (dispatch, getState) => {
	const { album } = getState()

	if (id != album.info.id || page != album.pagination.page || album.fetched)
		dispatch(requestAlbum(id, page))
}

export const requestAlbum = (id, page) => ({
	type: 'FETCH_ALBUM',
	payload: axios(page ? `/api/album/${id}/page/${page}` : `/api/album/${id}`)
})