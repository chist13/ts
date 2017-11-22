import React from 'react'
import PropTypes from 'prop-types'

import AlbumItem from './AlbumItem'
import Spinner from '@/Spinner'

const AlbumList = ({loading, albums, onSelect}) => {
	const content = loading
		? <Spinner size={32} style={{margin: 'auto'}}/>
		: <ul className="albums-list">{albums.map(album => <AlbumItem
			key={album.id}
			album={album}
			onSelect={onSelect}
		/>)}</ul>

	return (
		<div className="albums-wrap">
			<h1 className="albums-heading">Albums</h1>

			<div className="albums">
				{content}
			</div>
		</div>
	)
}

AlbumList.propTypes = {
	loading: PropTypes.bool.isRequired,
	albums: PropTypes.array.isRequired,
	onSelect: PropTypes.func.isRequired
}

export default AlbumList