import React from 'react'
import PropTypes from 'prop-types'

import Spinner from '@/Spinner'
import ImageList from './ImageList'
import AlbumHeader from './AlbumHeader'
import ImagePagination from './ImagePagination'

const Album = ({loading, info, pagination}) => {
	if (loading) return <Spinner size={32} style={{margin: 'auto'}}/>

	return (
		<div className="album">
			<AlbumHeader info={info} />
			<ImageList images={pagination.data} />
			<ImagePagination pagination={pagination} />
		</div>
	)
}

Album.propTypes = {
	loading: PropTypes.bool.isRequired,
	info: PropTypes.object.isRequired,
	pagination: PropTypes.object
}

export default Album