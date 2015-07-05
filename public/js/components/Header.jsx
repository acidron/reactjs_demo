var Header = React.createClass({
	logout: function() {
		if (confirm('You are signing out...')) flux.doAction('logout');
	},
	render: function() {
		return (
			<div className="header">
				<div className="container">
					<div className="col-sm-1"><img src="imgs/ico_lists.png" alt="" /></div>
					<div className="col-sm-4">My Messages</div>
					<div className="withtext col-sm-5 text-right"><UserName /></div>
					<div className="col-sm-1"><a href="#profile"><img src="imgs/ico_settings.png" alt="" /></a></div>
					<div className="col-sm-1"><a href="#signin"><img onClick={this.logout} src="imgs/ico_logout.png" alt="" /></a></div>
				</div>
			</div>
		);
	}
})