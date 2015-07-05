var NewMessage = React.createClass({
	getDefaultProps: function() {
		return {
			maxchars: 140
		}
	},
	getInitialState: function() {
		return {
			counter: this.props.maxchars,
			text: ''
		}
	},
	typing: function() {
		var value = this.refs.text.getDOMNode().value;
		var newValue = this.props.maxchars - value.length;
		if (newValue < 0) {
			value = value.slice(0, this.props.maxchars);
			this.refs.text.getDOMNode().value = value;
			newValue = 0;
		}
		this.setState({counter: newValue, text: value});
	},
	send: function() {
		flux.doAction('postMessage', this.state.text);
	},
	componentDidMount: function() {
		Store.on('messageHasBeenPosted', function(errors) {
			this.setState({text: ''});
		}.bind(this));
	},
	componentWillUnmount: function() {
		Store.off('messageHasBeenPosted');
	},
	render: function () {
		return (
			<div className="newMessage">
				<textarea ref="text" onChange={this.typing} value={this.state.text}></textarea>
				<div className="counter">{this.state.counter}</div>
				<button onClick={this.send}>&nbsp;</button>
			</div>
		);
	}
});