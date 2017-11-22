import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import RightIcon from 'react-icons/lib/md/chevron-right'
import LeftIcon from 'react-icons/lib/md/chevron-left'

const AlbumPagination = ({pagination}) => (
	<div className="album-pagination">
		<Link to={pagination.prev || ''} className={'album-pagination__link' + (pagination.prev ? '' : ' disabled')}>
			<LeftIcon size={48} />
		</Link>
		<div className="d-flex">
			<span className="m-auto">total: {pagination.total}</span>
		</div>
		<Link to={pagination.next || ''} className={'album-pagination__link' + (pagination.next ? '' : ' disabled')}>
			<RightIcon size={48} />
		</Link>
	</div>
)

AlbumPagination.propTypes = {
	pagination: PropTypes.shape({
		next: PropTypes.string,
		prev: PropTypes.string,
		current: PropTypes.number,
		total: PropTypes.number,
		perPage: PropTypes.number
	})
}

export default AlbumPagination