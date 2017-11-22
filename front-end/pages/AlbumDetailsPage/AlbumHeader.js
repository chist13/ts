import React from 'react'
import PropTypes from 'prop-types'

import ArrowBackIcon from 'react-icons/lib/md/arrow-back'
import { Link } from 'react-router-dom'

const AlbumHeader = ({info}) => (
	<div className="album-heading">
		<Link className="album-heading__icon" to='/'>
			<ArrowBackIcon size={32} />
		</Link>
		<h1 className="album-heading__title">{info.name}</h1>
		<img className="album-heading__img" src={info.cover} />
	</div>
)

AlbumHeader.propTypes = {
	info: PropTypes.shape({
		name: PropTypes.string.isRequired,
		cover: PropTypes.string.isRequired
	})
}

export default AlbumHeader