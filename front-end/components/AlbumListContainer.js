import { connect } from 'react-redux'
import React from 'react'

import AlbumList from './AlbumList'
import { requestAlbums } from '../store/modules/albums/actions'

@connect(({albums}) => ({
	fetching: albums.fetching,
	albums: albums.albums
}))
export default class AlbumListContainer extends React.Component {
	componentWillMount() {
		this.props.dispatch(requestAlbums())
	}

	onSelect(id) {
		console.log(id)
	}

	render() {
		const { fetching, albums } = this.props

		return <AlbumList loading={fetching} albums={albums} onSelect={this.onSelect.bind(this)}/>
	}
}