import React from 'react'
import { Link } from 'react-router-dom'

import './Header.sass'

const Header = () => (
	<header>
		<nav>
			<ul>
				<li><Link to='/'>Albums</Link></li>
				<li><Link to='/error'>ERROR</Link></li>
			</ul>
		</nav>
	</header>
)

export default Header