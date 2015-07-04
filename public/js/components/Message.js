var Message = React.createClass({
	render: function() {
		return (
			<div className="message">
				<div className="date">{this.props.data.created_at.slice(11)}</div>
				<div className="text">{this.props.data.message}</div>
			</div>
		);
	}
})