import { fetchAlbumsIfNeeded } from './actions'

export const mapStateToProps = state => ({
	isFetching: state.albums.isFetching,
	albums: state.albums.albums
})

export const mapDispatchToProps = dispatch => ({
	fetchAlbumsIfNeeded: () => dispatch(fetchAlbumsIfNeeded())
})
