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
	},
	render: function() {
		var out;
		if (!this.state.isSignedIn) {
			if (this.state.url == 'signup') {
				out = <SignUp />;
			} else {
				out = <SignIn />;
			}
		} else {
			switch (this.state.url) {
				case 'profile':
					out = <Profile />;
					break;
				default:
					out = <Messages />;
					break;
			}
		}
		return out;
	}
})
React.render(<App />, document.body);