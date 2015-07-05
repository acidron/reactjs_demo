var Profile = React.createClass({
	mixins: [React.addons.LinkedStateMixin],
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
	doSave: function() {
		flux.doAction('saveProfile', this.state.firstname, this.state.lastname);
	},
	render: function() {
		return (
			<div className="container-fluid pagelayout">
				<Header title="Profile"/>
				<div className="body row">
					<form className="profileForm">
						<input className="form-control" type="text" placeholder="Firstname" valueLink={this.linkState('firstname')} ref="firstname" />
						<input className="form-control" type="text" placeholder="Lastname"  valueLink={this.linkState('lastname')} ref="lastname" />
						<button  className="form-control" type="button" onClick={this.doSave}>Save</button>				
					</form>
				</div>
			</div>
		);
	}
})