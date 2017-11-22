import React from 'react'

import Album from './Album'

export default ({loading, albums, onSelect}) =>
	albums.map(e => <Album {...e} />)
