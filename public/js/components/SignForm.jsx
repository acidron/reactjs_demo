var SignForm = React.createClass({
	render: function() {
		var out;
		switch (this.props.url) {
			case 'signin':
				out = <SignIn />;
				break;
			case 'signup':
				out = <SignUp />;
				break;
		}
	}
});