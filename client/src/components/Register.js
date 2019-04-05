import React from 'react';

class Register extends React.Component {
	render() {
		return (
			<div className="register">
				<h3>Please Register</h3>
				<form>
					<p>username</p> <input type="text" name="username" />
					<p>password</p> <input type="text" name="password" />
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default Register;
