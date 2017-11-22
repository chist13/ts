import React from 'react'
import PropTypes from 'prop-types'

const ImageItem = ({source}) => (
	<div className="image-item">
		<img className="image-item__image" src={source}/>
	</div>
)

ImageItem.propTypes = {
	source: PropTypes.string.isRequired
}

export default ImageItem