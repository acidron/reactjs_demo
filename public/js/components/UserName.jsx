var UserName = React.createClass({
	getInitialState: function() {
		return {
			firstname: Store.profile.firstname,
			lastname: Store.profile.lastname
		}
	},
	componentDidMount: function() {
		Store.on('change:profile', this.profileChanged);
	},
	profileChanged: function(p) {
		this.setState({
			firstname: p.firstname,
			lastname: p.lastname
		});
	},
	componentWillUnmount: function() {
		Store.off('change:profile', this.profileChanged);
	},
	render: function() {
		return <span>{this.state.firstname} {this.state.lastname}</span>
	}
});