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
			messages.push(<Message key={message.id} data={message} />);
		});
		return (
				<div className="container-fluid pagelayout messages">
					<Header title="My Messages"/>
				
					<div className="body">
						<div className="container">
							<div className="row">
								<div className="hidden-xs col-sm-8 col-sm-push-2">
									<NewMessage />
								</div>
							</div>
							<div className="row">
								<div className="col-sm-8 col-sm-push-2">
									<ReactCSSTransitionGroup transitionName="message">
									{messages}
									</ReactCSSTransitionGroup>
								</div>
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