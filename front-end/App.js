import React from 'react'
import './App.sass'

import Header from './components/Header'
import Main from './components/Main'

export default class App extends React.Component {
	render() {
		return (
			<div className="panel">
				<Header />
				<Main />
			</div>
		);
	}
}