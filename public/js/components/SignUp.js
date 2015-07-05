var SignUp = React.createClass({
	doSignUp: function() {
		var data = {
			'firstname': this.refs.firstname.getDOMNode().value,
			'lastname': this.refs.lastname.getDOMNode().value,
			'email': this.refs.email.getDOMNode().value,
			'password': this.refs.password.getDOMNode().value
		}
		flux.doAction('signUp', data);
	},
	resetError: function() {
		flux.doAction('resetUserError');
	},
	getInitialState: function() {
		return {
			errors: Store.errors
		}
	},
	storeListener: function(errors) {
		this.setState({errors: errors});
	},
	componentDidMount: function() {
		Store.on('change:errors', this.storeListener);
	},
	componentWillUnmount: function() {
		Store.off('change:errors', this.storeListener);
	},
	render: function() {
		return (
			<div className="container signUpContainer main">
				<div className="row">
					<div className="text-center">Already have an account? <a href="#signin">Sign In</a></div>
					<form className="signUpForm slideUp">
						<p>{this.state.errors}</p>
						<input className="form-control" type="text" placeholder="First name" name="firstname" ref="firstname"/>
						<input className="form-control" type="text" placeholder="Last name" name="lastname" ref="lastname"/>
						<input className="form-control" type="email" placeholder="Email" ref="email" />
						<input className="form-control" type="password" placeholder="Password"  ref="password" />
						<button  className="form-control" type="button" onClick={this.doSignUp}>Create account</button>
						
					</form>
				</div>
			</div>
		);
	}
})