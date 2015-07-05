var UserName = React.createClass({
	getInitialState: function() {
		return {
			firstname: Store.profile.firstname,
			lastname: Store.profile.lastname
		}
	},
	componentDidMount: function() {
		Store.on('change:profile', function(p) {
			this.setState({
				firstname: p.firstname,
				lastname: p.lastname
			});
		}.bind(this));
	},
	componentWillUnmount: function() {
		Store.off('change:profile');
	},
	render: function() {
		return <span>{this.state.firstname} {this.state.lastname}</span>
	}
});