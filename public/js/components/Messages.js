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
	logout: function() {
		if (confirm('You are signing out...')) flux.doAction('logout');
	},
	render: function() {
		var messages = [];
		this.state.messages.map(function(message) {
			messages.push(<Message key={message.id} data={message} />);
		});
		return (
				<div className="container-fluid messages">
					<Header />
				
					<div className="body">
						<div className="container">
							<div className="col-sm-8 col-sm-push-2">
								<NewMessage />
								<ReactCSSTransitionGroup transitionName="message">
								{messages}
								</ReactCSSTransitionGroup>
							</div>
						</div>
					</div>

					<div>
						<div className="col-sm-12 footer text-center"><a className="arrowDown">&nbsp;</a></div>
					</div>
				</div>

		);
	}
})