import React from 'react'

import './Main.sass'

import { Switch, Route } from 'react-router-dom'

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={() => <h1>albums</h1>}/>
			<Route path='/error' component={() => <h1>error</h1>}/>
		</Switch>
	</main>
)

export default Main