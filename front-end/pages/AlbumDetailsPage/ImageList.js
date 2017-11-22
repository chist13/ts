import React from 'react'
import PropTypes from 'prop-types'

import Spinner from '@/Spinner'
import ImageItem from './ImageItem'

const ImageList = ({images}) => {
	return (
		<div className="image-list container">
			<div className="row">
				{images.map((image, i) => <div key={i} className="col-12 col-md-4 col-lg-3"><ImageItem source={image} /></div>)}
			</div>
		</div>
	)
}

ImageList.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ImageList