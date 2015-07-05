var NewMessagePage = React.createClass({
	postMessage: function() {
		this.refs.newMessage.send();
	},
	render: function() {
		return (
			<div className="container-fluid pagelayout newmessagepage">
				<div className="header">
					<div className="container">
						<div className="col-xs-1"><a href="#messages"><img src="imgs/ico_back.svg" alt="" /></a></div>
						<div className="col-xs-10">New Message</div>
						<div className="col-xs-1"><img onClick={this.postMessage} src="imgs/ico_confirm_mobile.svg" alt="" /></div>
					</div>
				</div>
				<div className="body row">
					<NewMessage ref="newMessage"/>

				</div>
			</div>
		);
	}
});