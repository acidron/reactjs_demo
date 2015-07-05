var Profile = React.createClass({
	mixins: [React.addons.LinkedStateMixin],
	getInitialState: function() {
		return {
			firstname: Store.profile.firstname,
			lastname: Store.profile.lastname
		}
	},
	storeListener: function(p) {
		this.setState({
			firstname: p.firstname,
			lastname: p.lastname
		});
	},
	componentDidMount: function() {
		Store.on('change:profile', this.storeListener);
	},
	componentWillUnmount: function() {
		Store.off('change:profile', this.storeListener);
	},
	doSave: function() {
		flux.doAction('saveProfile', this.state.firstname, this.state.lastname);
	},
	render: function() {
		return (
			<div className="container-fluid pagelayout verticalAligned">
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