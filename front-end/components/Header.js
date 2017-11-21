import React from 'react'
import { Link } from 'react-router-dom'

import './Header.sass'

const Header = () => (
	<nav className="header">
		<ul>
			<li><Link to='/'>Albums</Link></li>
			<li><Link to='/error/1'>Album 1</Link></li>
			<li><Link to='/error/1/page/2'>Album 1 page 2</Link></li>
		</ul>
	</nav>
)

export default Header