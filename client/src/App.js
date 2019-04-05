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
					<NavLink to="/">Login</NavLink>
					<NavLink to="/jokes">Jokes</NavLink>
					<NavLink to="/register">Register</NavLink>
				</nav>
				<div>
					<Route exact path="/" component={Login} />
					<Route exact path="/jokes" component={Jokes} />
					<Route exact path="/register" component={Register} />
				</div>
			</div>
		);
	}
}

export default withRouter(App);
