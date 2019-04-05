import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Jokes from './components/Jokes';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Dad Jokes React App</h1>
				<nav>
					<NavLink to="/register">Register</NavLink>
					<NavLink to="/login">Login</NavLink>
					<NavLink to="/jokes">Jokes</NavLink>
				</nav>
				<div>
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/jokes" component={Jokes} />
				</div>
				<img alt="dadjoke" src="https://bit.ly/2G2qnBu" />
			</div>
		);
	}
}

export default withRouter(App);
