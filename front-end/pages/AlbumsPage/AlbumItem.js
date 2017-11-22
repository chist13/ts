import React from 'react'
import PropTypes from 'prop-types'
import RightIcon from 'react-icons/lib/md/chevron-right'

const AlbumItem = ({album, onSelect}) => (
	<li className="albums-item" onClick={() => onSelect(album.id)}>
		<img className="albums-item__cover" src={album.cover}/>
		<span className="albums-item__name">{album.name}</span>
		<span className="albums-item__icon"><RightIcon size={48} /></span>
	</li>
)

AlbumItem.propTypes = {
	album: PropTypes.shape({
		name: PropTypes.string.isRequired,
		id: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string
		]).isRequired,
		cover: PropTypes.string.isRequired
	}),
	onSelect: PropTypes.func.isRequired
}

export default AlbumItem