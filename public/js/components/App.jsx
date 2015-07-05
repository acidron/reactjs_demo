var App = React.createClass({
	getInitialState: function() {
		return {
			url: Store.url,
			isSignedIn: Store.isSignedIn
		}
	},
	urlListener: function(url) {
		this.setState({url: url});
	},
	signinListener: function(value) {
		this.setState({isSignedIn: value});
	},
	componentWillMount: function() {
		Store.on('change:url', this.urlListener);
		Store.on('change:isSignedIn', this.signinListener);
		flux.doAction('checkAuth');
	},
	componentWillUnmount: function() {
		Store.off('change:url', this.urlListener);
		Store.off('change:isSignedIn', this.signinListener);
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
				case 'new':
					out = <NewMessagePage key="NewMessagePage"/>;
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