var Messages = React.createClass({
	getInitialState: function() {
		return {
			messages: Store.messages
		}
	},
	componentWillMount: function() {
		flux.doAction('getMessages');
	},
	componentDidMount: function() {
		Store.on('change:messages', function(messages) {
			this.setState({messages: messages});
		}.bind(this));
	},
	componentWillUnmount: function() {
		Store.off('change:messages');
	},
	render: function() {
		var messages = [];
		this.state.messages.map(function(message) {
			messages.push(<Message data={message} />);
		});
		return (
				<div className="container-fluid messages">
					<div>
						<div className="col-sm-12 header">header</div>
					</div>
				
					<div className="body">
						<div className="col-sm-4 col-sm-push-4">
							<NewMessage />
							{messages}
						</div>
					</div>

					<div>
						<div className="col-sm-12 footer text-center"><a className="arrowDown">&nbsp;</a></div>
					</div>
				</div>

		);
	}
})