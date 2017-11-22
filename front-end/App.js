import React from 'react'

import { Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router'

import AlbumsPage from './pages/AlbumsPage/AlbumsPage'
import AlbumDetailsPage from './pages/AlbumDetailsPage/AlbumDetailsPage'

export default class App extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' component={AlbumsPage} />
				<Route path='/album/:id/page/:page' component={AlbumDetailsPage} />
				<Route path='/album/:id' component={AlbumDetailsPage} />
				<Redirect to='/' />
			</Switch>
		);
	}
}