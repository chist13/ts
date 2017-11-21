import React from 'react'

import { Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router'

import './Main.sass'

import Album from './Album'
import AlbumListContainer from './AlbumListContainer'

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={AlbumListContainer} />
			<Route path='/error/:id/page/:page' component={Album} />
			<Route path='/error/:id' component={Album} />
			<Redirect to='/' />
		</Switch>
	</main>
)

export default Main