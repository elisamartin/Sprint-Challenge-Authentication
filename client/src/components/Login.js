import React from 'react';

class Login extends React.Component {
	render() {
		return (
			<div className="login">
				<h3>Login here</h3>
				<form>
					<p>username</p> <input type="text" name="username" />
					<p>password</p> <input type="text" name="password" />
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default Login;
