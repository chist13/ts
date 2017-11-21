import { connect } from 'react-redux'
import React from 'react'

import { mapStateToProps, mapDispatchToProps } from '../store/modules/albums/maps'

@connect(mapStateToProps, mapDispatchToProps)
export default class AlbumListContainer extends React.Component {
	componentWillMount() {
		this.props.fetchAlbumsIfNeeded()
	}

	render() {
		console.log(this)
		return <h1>AlbumListContainer</h1>
	}
}