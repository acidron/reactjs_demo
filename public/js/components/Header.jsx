var Header = React.createClass({
	logout: function() {
		if (confirm('You are signing out...')) flux.doAction('logout');
		else return false;
	},
	render: function() {
		return (
			<div className="header">
				<div className="container">
					<div className="col-xs-1"><img src="imgs/ico_lists.png" alt="" /></div>
					<div className="col-xs-10 col-sm-4">{this.props.title}</div>
					<div className="visible-xs-block col-xs-1"><a href="#new"><img src="imgs/ico_edit.svg" alt="" /></a></div>
					<div className="hidden-xs col-sm-5 text-right"><UserName /></div>
					<div className="hidden-xs col-sm-1"><a href="#profile"><img src="imgs/ico_settings.png" alt="" /></a></div>
					<div className="hidden-xs col-sm-1"><a href="#signin"><img onClick={this.logout} src="imgs/ico_logout.png" alt="" /></a></div>
				</div>
			</div>
		);
	}
})