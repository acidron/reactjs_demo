var SignUp = React.createClass({
	getInitialState: function() {
		return {
			
		}
	},
	render: function() {
		return (
			<div className="container signUpContainer main">
				<div className="row">
					<div className="text-center">Already have an account? <a href="#signin">Sign In</a></div>
					<form action="" className="signUpForm slideUp">
						<input className="form-control" type="text" placeholder="First name" name="firstname"/>
						<input className="form-control" type="text" placeholder="Last name" name="lastname" />
						<input className="form-control" type="email" placeholder="Email" name="email"/>
						<input className="form-control" type="password" placeholder="Password"  name="password"/>
						<button  className="form-control" type="submit">Create account</button>
						
					</form>
				</div>
			</div>
		);
	}
})