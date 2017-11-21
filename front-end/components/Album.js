import React from 'react'

export default ({match}) => (
	<div>
		<p>id - {match.params.id}</p>
		{match.params.page && <p>page - {match.params.page}</p>}
	</div>
)