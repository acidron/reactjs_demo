var App = React.createClass({
	getInitialState: function() {
		return {
			url: this.props.url
		}
	},
	componentWillMount: function() {
		Store.on('change:url', function(url) {
			this.setState({url: url});
		}.bind(this));
	},
	render: function() {
		var out;
		console.log('URL is ', this.state.url);
		switch (this.state.url) {
			case 'signin':
				out = <SignIn />;
				break;
			case 'signup':
				out = <SignUp />;
				break;
			case 'messages':
				out = <Messages />;
				break;
			case 'profile':
				out = <Profile />;
				break;
			default:
				out = <Logo />;
				break;
		}
		return out;
	}
})
React.render(<App url={Store.url}/>, document.body);