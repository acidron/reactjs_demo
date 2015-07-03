var SignIn = React.createClass({
	doSignIn: function () {
		

		return;
		var payload = {
			'email': this.refs.email.getDOMNode().value,
			'password': this.refs.password.getDOMNode().value
		}

		$.post('auth/login', payload).fail(function(resp){console.log(resp.responseJSON);});
	},
	getInitialState: function() {
		return {
			signin: false
		}
	},
	componentWillMount: function() {
	/*	emitter.on('signed-in', function(isSignedIn) {
			this.setState({signin: isSignedIn});
		}.bind(this));*/
	},
	componentDidMount: function() {
		/*mainStore.on('signed-in', function(isSignedIn) {
			this.setState({signin: isSignedIn});
		}.bind(this));*/
	},
	render: function() {
		return (
			<ReactCSSTransitionGroup transitionName="fadeIn" transitionAppear={true}>
				<div key="signIn" className="container ">
					<Logo />
				
					<div className="row">
						<form action="" className="signInForm slideUp">
							<input className="form-control" type="email" placeholder="Email" ref="email" />
							<input className="form-control" type="password" placeholder="Password"  ref="password" />
							<button  className="form-control" type="button" onClick={this.doSignIn}>Sign in</button>
							<div className="text-center"><a href="#signup">Create Account</a></div>
							
						</form>
					</div>
				</div>
			</ReactCSSTransitionGroup>
		);
	}
});