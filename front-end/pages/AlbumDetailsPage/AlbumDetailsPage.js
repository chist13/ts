import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { requestAlbumIfNeeded } from '#/albumDetails/actions'

import Album from './Album'

import './AlbumDetailsPage.sass'

@connect(({album}) => ({
	fetching: !album.fetched || album.fetching,
	info: album.info,
	pagination: album.pagination
}))
export default class AlbumDetailsPage extends React.Component {
	componentWillMount() {
		const { id, page } = this.props.match.params

		this.props.dispatch(requestAlbumIfNeeded(id, page))
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.fetching || nextProps.fetching) return

			const { id, page } = nextProps.match.params
			this.props.dispatch(requestAlbumIfNeeded(id, page))
	}

	render() {
		const { fetching, info, pagination } = this.props

		return <Album info={info} pagination={pagination} loading={fetching} />
	}
}