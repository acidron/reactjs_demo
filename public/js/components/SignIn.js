var SignIn = React.createClass({
	doSignIn: function() {
		var credentials = {
			'email': this.refs.email.getDOMNode().value,
			'password': this.refs.password.getDOMNode().value
		}
		flux.doAction('signIn', credentials);
	},
	resetError: function() {
		flux.doAction('resetUserError');
	},



	getInitialState: function() {
		return {
			errors: Store.errors
		}
	},
	componentDidMount: function() {
		Store.on('change:errors', function(errors) {
			this.setState({errors: errors});
		}.bind(this));
	},
	componentWillUnmount: function() {
		Store.off('change:errors');
	},

	getFormCSSClass: function() {
		return this.state.errors ? 'error' : '';
	},
	getErrorMsg: function () {
		if (this.state.errors) {
			return 'There are errors!'; //this.props.errors;
		}
		return '';
	},
	render: function() {
		var btn;
		if (this.state.errors) {
			btn = <button  className="form-control error" type="button" onClick={this.resetError}>Wrong credentials, try again</button>;
		} else {
			btn = <button  className="form-control" type="button" onClick={this.doSignIn}>Sign in</button>;
		}
		
		var formCSS = React.addons.classSet({
			'signInForm slideUp': true,
			'errors': this.state.errors
		})

		return (
			<div key="signIn" className="container">
				<Logo />
			
				<div className="row">
					<form action="" className={formCSS}>
						<input className="form-control" type="email" placeholder="Email" ref="email" />
						<input className="form-control" type="password" placeholder="Password"  ref="password" />
						{btn}
						<div className="text-center"><a href="#signup">Create Account</a></div>
						
					</form>
				</div>
			</div>
		);
	}
});