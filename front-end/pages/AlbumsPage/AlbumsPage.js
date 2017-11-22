import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { requestAlbumsIfNeeded } from '#/albums/actions'

import './AlbumsPage.sass'

import AlbumList from './AlbumList'

@connect(({albums}) => ({
	fetching: albums.fetching,
	albums: albums.albums
}))
export default class AlbumsPage extends React.Component {
	static contextTypes = {
		router: PropTypes.object
	}

	componentWillMount() {
		this.props.dispatch(requestAlbumsIfNeeded())
	}

	onSelect(id) {
		this.context.router.history.push(`/album/${id}`)
	}

	render() {
		const { fetching, albums } = this.props

		return <AlbumList loading={fetching} albums={albums} onSelect={this.onSelect.bind(this)}/>
	}
}