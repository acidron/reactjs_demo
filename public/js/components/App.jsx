var App = React.createClass({
	getInitialState: function() {
		return {
			url: Store.url,
			isSignedIn: Store.isSignedIn
		}
	},
	componentWillMount: function() {
		Store.on('change:url', function(url) {
			this.setState({url: url});
		}.bind(this));
		Store.on('change:isSignedIn', function(value) {
			this.setState({isSignedIn: value});
		}.bind(this));

		flux.doAction('checkAuth');
	},
	render: function() {
		var out;
		if (this.state.isSignedIn === false) {
			if (this.state.url == 'signup') {
				out = <SignUp key="signup"/>;
			} else {
				out = <SignIn key="signin" />;
			}
		} else if (this.state.isSignedIn === true) {
			switch (this.state.url) {
				case 'profile':
					out = <Profile key="profile"/>;
					break;
				default:
					out = <Messages key="messages"/>;
					break;
			}
		} else {
			out = <PleaseWait />;
		}
		return (
			<ReactCSSTransitionGroup transitionName="fadeIn" transitionAppear={true} transitionLeave={false}>
				{out}
			</ReactCSSTransitionGroup>
		);
	}
})
React.render(<App />, document.body);